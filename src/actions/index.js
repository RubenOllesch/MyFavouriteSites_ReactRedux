export const UPDATE_TEXTFIELD = 'UPDATE_TEXTFIELD';
export const ADD_TEXTFIELD = 'ADD_TEXTFIELD';

export const updateTextfield = (id, text) => {
    return { type: UPDATE_TEXTFIELD, id, text}
}

export const addTextfield = (id) => {
    return { type: ADD_TEXTFIELD, id}
}