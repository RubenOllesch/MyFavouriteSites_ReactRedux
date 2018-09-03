import React from 'react';

import FormContainer from './form/FormContainer';
import SearchContainer from './search/SearchContainer';

import formConfig from '../constants/formConfig';
import searchConfig from '../constants/searchConfig';


const Content = () => (
    <div className="tapp__content content">
        <FormContainer config={formConfig} />
        <SearchContainer config={searchConfig} />
    </div>
);

export default Content;
