import { combineReducers } from 'redux';
import { ADD_TEXTFIELD, UPDATE_TEXTFIELD } from '../actions/index';

const initialState = {
    formList: []
}

const formApp = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TEXTFIELD:
            return {...state, ...{
                formList: state.formList.map((input) => {
                    if (input.name === action.id) {
                        return {...input, ...{
                            value: action.text
                        }};
                    };
                    return input;
                })
            }};
    
        case ADD_TEXTFIELD:
            return {...state, ...{
                formList: [
                    ...state.formList,
                    {
                        name: action.id,
                        value: ''
                    }
                ]
            }};
s
        default:
            return state;
    }
}

export default combineReducers({
    formApp
});