import jsonSender from "../utils/jsonSender";

export const UPDATE_TEXTFIELD = 'UPDATE_TEXTFIELD';
export const ADD_TEXTFIELD = 'ADD_TEXTFIELD';

export const updateTextfield = (id, text) => {
    return {
        type: UPDATE_TEXTFIELD,
        id,
        text
    };
}

export const addTextfield = (id) => {
    return {
        type: ADD_TEXTFIELD,
        id
    };
}

export const submitForm = () => {
    return (dispatch, getState) => {
        const state = getState();
        const { formList } = state.formReducer;
        dispatch(sentForm());
        return jsonSender(formList)
        .then(
            () => dispatch(sentFormSuccess),
            () => dispatch(sentFormFailure)
        )
    }
}

export const sentForm = () => {
    return () => {
        chayns.showWaitCursor();
    }
}

export const sentFormSuccess = () => {
    return () => {
        chayns.hideWaitCursor();
    }
}

export const sentFormFailure = () => {
    return () => {
        chayns.hideWaitCursor();
    }
}