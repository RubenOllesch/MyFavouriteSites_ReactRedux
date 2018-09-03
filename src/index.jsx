import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

/**
 * The function waits till the chayns api is successfully loaded and
 * every additional functionality of it is ready to go,
 * renders the App component
 * @return {Promise.<void>}
 */
async function init() {
    try {
        await chayns.ready;

    } catch (err) {
        console.warn('no chayns environment found:\n', err);
    }
    /**
     * Render the Component App inside the tappElement
     */
    const tappElement = document.querySelector('.tapp');
    ReactDOM.render(<Provider store={store}><App /></Provider>, tappElement);

    console.log(store.getState());
    const unsubscribe = store.subscribe(() =>
        console.log(store.getState())
    )
    }

init();
