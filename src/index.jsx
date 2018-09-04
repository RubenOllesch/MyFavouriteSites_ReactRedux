import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';

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

    const store = createStore(
        rootReducer,
        applyMiddleware(thunkMiddleware)
    );

    const tappElement = document.querySelector('.tapp');
    ReactDOM.render(<Provider store={store}><App /></Provider>, tappElement);
    store.subscribe(() => {
        console.log(store.getState());
    });
}

init();
