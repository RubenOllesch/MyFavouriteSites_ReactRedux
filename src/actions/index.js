export const UPDATE_TEXTFIELD = 'UPDATE_TEXTFIELD';
export const ADD_TEXTFIELD = 'ADD_TEXTFIELD';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const NEW_SEARCH = 'NEW_SEARCH';
export const SHOW_MORE = 'SHOW_MORE';
export const RECEIVED_RESULT = 'RECEIVED_RESULT';

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

export const newSearch = (searchString) => {
    return {
        type: NEW_SEARCH,
        searchString
    };
}

export const showMore = () => {
    return {
        type: SHOW_MORE
    };
}

export const receivedResult = (json) => {
    return { 
        type: RECEIVED_RESULT, 
        result: json
    }
}

export const fetchSites = () => {
    return (dispatch, getState) => {
        const state = getState();
        const { searchString, skip, take } = state.searchReducer;
        const url = `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${skip}&Take=${take}`;
        return fetch(url)
        .then(
            response => response.json(),
            error => console.error(error)
        )
        .then(
            json => {
                console.log(json);
                dispatch(receivedResult(json));
            }
        )
    }
}
