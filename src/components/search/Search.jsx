import React from 'react';
import PropTypes from 'prop-types';

import { Accordion, Input } from 'chayns-components';
import './searchInput/searchInput';

import SiteList from './site/SiteList';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: [
                {
                    siteId: '75505-33940',
                    locationId: 148001,
                    appstoreName: 'Cinemy',
                    facebookId: '1414774485212009'
                  },
                  {
                    siteId: '77890-31571',
                    locationId: 158829,
                    appstoreName: 'cinemy-unlim',
                    facebookId: ''
                  }
            ],
            skip: 0,
        };
    }

    showMore() {
        const { skip, take } = this.state;
        this.setState({
            skip: skip + take
        });
    }

    newSearch() {
        this.setState({
            skip: 0,
        });
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

    render() {
        const { title, placeholder } = this.props.config;
        const { sites } = this.state;
        return (
            <div className="tapp__content content">
                <Accordion
                    head={
                        title
                    }
                    right={
                        <div>
                            <Input
                                placeholder={placeholder}
                            />
                            <i className="fa fa-search" />
                        </div>
                    }
                    defaultOpened
                >
                    <SiteList
                        sites={sites}
                    />
                </Accordion>
            </div>
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
