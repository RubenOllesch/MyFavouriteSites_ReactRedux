import React from 'react';

import FormContainer from './form/FormContainer';
import Search from './search/Search';

import formConfig from '../constants/formConfig';
import searchConfig from '../constants/searchConfig';


const Content = () => (
    <div className="tapp__content content">
        <FormContainer config={formConfig} />
        <Search config={searchConfig} />
    </div>
);

export default Content;
