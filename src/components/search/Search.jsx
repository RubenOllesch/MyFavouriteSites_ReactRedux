import React from 'react';
import PropTypes from 'prop-types';

import { Accordion, Input } from 'chayns-components';
import './searchInput/searchInput.scss';

import SiteList from './site/SiteList';
import ShowMoreButton from './showMoreButton/Button';

import jsonFetcher from '../../utils/jsonFetcher';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: [],
            skip: 0,
        };
    }

    showMore() {
        const { skip, take } = this.state;
        this.setState({
            skip: skip + take
        });
        this.clearSites();
        this.searchHandler();
    }

    newSearch(newSearchString) {
        this.setState({
            searchString: newSearchString,
            skip: 0
        });
        this.searchHandler();
    }

    search

    addSites = (newSites) => {
        const { sites } = this.state;
        this.setState({
            sites: [...sites, ...newSites]
        });
    };

    clearSites = () => {
        this.setState({
            sites: []
        });
    };

    searchHandler = () => {
        const { searchString, skip } = this.state;
        const { take } = this.props.config;
        console.log(searchString);
        if (searchString === '') {
            return;
        }
        const url = `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${skip}&Take=${take}`;
        const data = jsonFetcher(url);
        data.then(() => {
            if (data.ResultCode === 1) {
                return;
            }
            this.addSites(data.Data);
        });
    }

    render() {
        const { title, placeholder, showMoreText } = this.props.config;
        const { sites } = this.state;
        return (
            <Accordion
                head={
                    title
                }
                right={
                    <div>
                        <Input placeholder={placeholder} onChange={(value) => { console.log(value); }} />
                        <i className="fa fa-search" />
                    </div>
                }
                defaultOpened
            >
                <div>
                    <SiteList
                        sites={sites}
                    />
                    <ShowMoreButton position="right" text={showMoreText} onClick={() => { this.showMore().bind(this); }} />
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
