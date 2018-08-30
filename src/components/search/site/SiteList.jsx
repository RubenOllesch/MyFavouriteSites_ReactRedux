import React from 'react';
import Site from './siteElement/Site';

/**
 * Whenever the user prop gets a new value this component re-renders. Users were added in the Content.jsx via the PersonFinder
 * If a Component has no States (State-less Component) you should Change the Component to a Function
 */
export default sites => (
    <div id="usersList">
        {
            // You can write some JavaScript in this HTML-Code if it is inside {}
            sites && sites.map(({ appstoreName, siteId, locationId }) => (
                <Site
                    name={appstoreName}
                    siteId={siteId}
                    locationId={locationId}
                />
            ))
        }
        {
            sites.length === 0 && <div>No Sites have been found.</div>
        }
    </div>);
