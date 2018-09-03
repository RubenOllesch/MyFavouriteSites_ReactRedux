import React from 'react';
import PropTypes from 'prop-types';

import { Accordion } from 'chayns-components';

import DelayedInput from './delayedInput/DelayedInput';
import SiteList from './site/SiteList';
import ShowMoreButton from './showMoreButton/Button';

const Search = ({ config, siteList, newSearch, showMore }) => {
    return (
        <Accordion
            head={
                config.title
            }
            right={
                <div className="Suche Suche--accordion">
                    <DelayedInput
                        placeholder={config.placeholder}
                        delay={config.inputDelay}
                        callback={newSearch}
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
                    sites={siteList}
                />
                <ShowMoreButton
                    position="right"
                    text={config.showMoreText}
                    onClick={showMore}
                />
            </div>
        </Accordion>
    );
}

export default Search;

Search.propTypes = {
    config: PropTypes.shape({

        title: PropTypes.string.isRequired,
        placeholder: PropTypes.string.isRequired,
        showMoreText: PropTypes.string.isRequired,
        take: PropTypes.number.isRequired,
        inputDelay: PropTypes.number.isRequired,

    }).isRequired
};
