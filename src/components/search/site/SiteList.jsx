import React from 'react';
import PropTypes from 'prop-types';
import Site from './siteElement/Site';

const SiteList = ({ sites }) => (
    <div id="siteList">
        {
            sites && sites.map(({ siteId, appstoreName }) => (
                <Site
                    appstoreName={appstoreName}
                    siteId={siteId}
                    key={siteId}
                />
            ))
        }
    </div>
);

SiteList.propTypes = {
    sites: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SiteList;
