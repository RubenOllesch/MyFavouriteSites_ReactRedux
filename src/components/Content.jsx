import React from 'react';

import Form from './form/Form';
import Search from './search/Search';

import formConfig from '../constants/formConfig';
import searchConfig from '../constants/searchConfig';

const Content = () => (
    <div className="tapp__content content">
        <Form config={formConfig} />
        <Search config={searchConfig} />
    </div>
);

export default Content;
