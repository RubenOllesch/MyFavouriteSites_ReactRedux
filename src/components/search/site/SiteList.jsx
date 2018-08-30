import React from 'react';
import PropTypes from 'prop-types';
import Site from './siteElement/Site';

const SiteList = ({ sites }) => (
    <div id="siteList">
        {
            sites && sites.map(({ siteId, appstoreName }) => (
                <Site
                    name={appstoreName}
                    siteId={siteId}
                    key={siteId}
                />
            ))
        }
        {
            sites.length === 0 && <div>No Sites have been found.</div>
        }
    </div>
);

SiteList.propTypes = {
    sites: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SiteList;
