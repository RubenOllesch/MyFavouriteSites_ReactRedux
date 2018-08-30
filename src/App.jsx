import React from 'react';
import { hot } from 'react-hot-loader';
import Intro from './components/Intro';
import Content from './components/search/Search';


/**
 * Stateless Component App which holds the Components Intro and Content
 */
const App = () => (
    <div>
        test
        <Intro/>
        <Content/>
    </div>
);

export default hot(module)(App);
