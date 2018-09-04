export const UPDATE_TEXTFIELD = 'UPDATE_TEXTFIELD';
export const ADD_TEXTFIELD = 'ADD_TEXTFIELD';

export const updateTextfield = (id, text) => ({
        type: UPDATE_TEXTFIELD,
        id,
        text
    });

export const addTextfield = id => ({
        type: ADD_TEXTFIELD,
        id
    });

// dispatch needed as placeholder
export const submitForm = () => (dispatch, getState) => {
        const state = getState();
        const { formList } = state.formReducer;
        chayns.showWaitCursor();
        chayns.intercom.sendMesssageToPage({
            text: JSON.stringify(formList)
        })
        .then(() => {
            chayns.hideWaitCursor();
        });
    };
