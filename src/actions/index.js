export const UPDATE_TEXTFIELD = 'UPDATE_TEXTFIELD';
export const ADD_TEXTFIELD = 'ADD_TEXTFIELD';
export const SUBMIT_FORM = 'SUBMIT_FORM';

export const NEW_SEARCH = 'NEW_SEARCH';
export const SHOW_MORE = 'SHOW_MORE';
export const RECEIVED_SITES = 'RECEIVED_SITES';

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

export const receivedSites = (json) => {
    return { 
        type: RECEIVED_SITES, 
        sites: json.Resultcode === 0 ? json.Data : []
    }
}

export const fetchSites = (searchString, skip, take) => {
    return (dispatch) => {
        const url = `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${skip}&Take=${take}`;
        return fetch(url)
        .then(
            response => response.json(),
            error => console.error(error)
        )
        .then(
            json => dispatch(receivedSites(json))
        )
    }
}
