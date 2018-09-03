export const UPDATE_TEXTFIELD = 'UPDATE_TEXTFIELD';
export const ADD_TEXTFIELD = 'ADD_TEXTFIELD';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const CLEAR_SITES = 'CLEAR_SITES';
export const ADD_SITES = 'ADD_SITES';
export const NEW_SEARCH = 'NEW_SEARCH';
export const SHOW_MORE = 'SHOW_MORE';

export const updateTextfield = (id, text) => {
    return { type: UPDATE_TEXTFIELD, id, text };
}

export const addTextfield = (id) => {
    return { type: ADD_TEXTFIELD, id };
}

export const clearSites = () => {
    return { type: CLEAR_SITES };
}

export const addSites = (newSites) => {
    return { type: ADD_SITES, newSites };
}

export const newSearch = (searchString) => {
    return { type: NEW_SEARCH, searchString };
}

export const showMore = () => {
    return { type: SHOW_MORE };
}
