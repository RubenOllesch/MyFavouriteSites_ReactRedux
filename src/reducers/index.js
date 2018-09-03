import { combineReducers } from 'redux';
import searchReducer from './search';
import formReducer from './form';

export default combineReducers({
    formReducer,
    searchReducer
});