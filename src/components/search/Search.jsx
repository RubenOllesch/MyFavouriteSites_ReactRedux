import React from 'react';
import PropTypes from 'prop-types';

import { Accordion } from 'chayns-components';

import DelayedInput from './delayedInput/DelayedInput';
import SiteList from './site/SiteList';
import ShowMoreButton from './showMoreButton/Button';

import jsonFetcher from '../../utils/jsonFetcher';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: [],
            searchString: '',
            skip: 0,
        };
    }

    newSearch(newSearchString) {
        this.setState({
            searchString: newSearchString,
            skip: 0
        }, () => {
            this.clearSites();
            this.searchHandler();
        });
    }

    showMore() {
        const { skip } = this.state;
        const { take } = this.props.config;
        this.setState({
            skip: skip + take
        }, () => {
            this.searchHandler();
        });
    }

    addSites(newSites) {
        const { sites } = this.state;
        this.setState({
            sites: [...sites, ...newSites]
        });
    }

    clearSites() {
        this.setState({
            sites: []
        });
    }

    searchHandler = () => {
        const { searchString, skip } = this.state;
        const { take } = this.props.config;
        if (searchString === '') {
            return;
        }
        const url = `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${skip}&Take=${take}`;
        const result = jsonFetcher(url);
        result.then((data) => {
            if (data.ResultCode === 1) {
                return;
            }
            this.addSites(data.Data);
        });
    }

    render() {
        const {
            title,
            placeholder,
            showMoreText,
            inputDelay
        } = this.props.config;
        const { sites } = this.state;
        return (
            <Accordion
                head={
                    title
                }
                right={
                    <div className="Suche Suche--accordion">
                        <DelayedInput
                            placeholder={placeholder}
                            delay={inputDelay}
                            callback={(value) => {
                                    this.newSearch(value);
                            }}
                        />
                        <div className="label">
                            <i className="fa fa-search" />
                        </div>
                    </div>
                }
                defaultOpened
            >
                <div>
                    <SiteList
                        sites={sites}
                    />
                    <ShowMoreButton
                        position="right"
                        text={showMoreText}
                        onClick={() => {
                            this.showMore();
                        }}
                    />
                </div>
            </Accordion>
        );
    }
}

Search.propTypes = {
    config: PropTypes.shape({

        title: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        showMoreText: PropTypes.string.isRequired,
        take: PropTypes.number.isRequired,
        inputDelay: PropTypes.number.isRequired,

    }).isRequired
};
