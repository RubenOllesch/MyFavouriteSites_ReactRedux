import React from 'react';
import PropTypes from 'prop-types';

import SiteList from './site/SiteList';
import Button from './button/Button';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sites: [],
            searchString: '',
            skip: 0,
        };
    }

    showMore() {
        const { skip, take } = this.state;
        this.setState({
            skip: skip + take
        });
    }

    newSearch(newSearchString) {
        this.setState({
            skip: 0,
            searchString: newSearchString
        });
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
        const { title, showMoreText } = this.props.config;
        const { sites } = this.state;
        return (
            <div className="tapp__content content">
                <div className="accordion accordion--open" style={{ overflow: 'hidden', marginTop: '30px' }}>
                    <div className="accordion__head">
                        <div className="accordion--trigger accordion__head--search--wrapper" >
                            <div className="accordion--trigger accordion__head--search">
                                {title}
                            </div>
                        </div>
                        <div id="searchInput" />
                    </div>
                    <div className="accordion__body">
                        <SiteList
                            sites={sites}
                        />
                        <Button
                            position="center"
                            text={showMoreText}
                            onClick={this.clearSites()}
                        />
                    </div>
                </div>
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
