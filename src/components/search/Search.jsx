import React from 'react';

import SiteList from './site/SiteList';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: []
        };
    }

    addSite = (site) => {
        const { sites } = this.state;

        this.setState({
            sites: [...sites, site]
        });
    };

    clearSites = () => {
        this.setState({
            sites: []
        });
    };

    render() {
        const { sites } = this.state;
        return (
            <div className="tapp__content content">
                {

                <SiteList
                    sites={sites}
                />
                }
            </div>
        );
    }
}

