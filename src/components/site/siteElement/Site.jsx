import React from 'react';
import PropTypes from 'prop-types';

/**
 * to keep your scss cleaner und more readable you can make a scss-file for each Component. This way your Code stays modular
 */
import './site.scss';

/**
 *
 * @param appstoreName
 * @param siteId
 * @constructor
 *
 * The Site-Component as a stateless Component with 2 Parameters
 */

/* jsx-a11y-disable-line click-events-have-key-events */
const Site = ({ appstoreName, siteId }) => (
    <div className="ListItem ListItem--clickable" onClick={chayns.openUrlInBrowser(`https://chayns.net/${siteId}/aboutus`)}>
        <div className="ListItem__head">
            <div className="ListItem__Image" style={{ backgroundimage: `url('https://sub60.tobit.com/l/${siteId}')` }} />
            <div className="ListItem__Title">
                <p className="ListItem__Title--headline">
                    {appstoreName}
                </p>
                <p className="ListItem__Title--description" />
            </div>
        </div>
    </div>
);

Site.propTypes = {
    appstoreName: PropTypes.string.isRequired,
    siteId: PropTypes.string.isRequired,
};

export default Site;
