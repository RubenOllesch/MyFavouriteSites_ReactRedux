import React from 'react';

import SiteList from './site/SiteList';
import Button from './button/Button';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: [],
            searchString: '',
            skip: 0,
            take: 10
        };
    }

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
        const { sites } = this.state;
        return (
            <div className="tapp__content content">

                <SiteList
                    sites={sites}
                />
                

            </div>
        );
    }
}

