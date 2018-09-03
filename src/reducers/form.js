import { UPDATE_TEXTFIELD, ADD_TEXTFIELD } from "../actions/form";

const initialState = {
    formList: []
}

export default (state = initialState, action) => {
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

        default:
            return state;
    }
}