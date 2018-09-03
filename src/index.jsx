import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import app from './reducers/index';0
import { addTextfield, updateTextfield } from './actions/index';
import App from './App';

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
    const store = createStore(app);
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
