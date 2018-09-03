export const NEW_SEARCH = 'NEW_SEARCH';
export const SHOW_MORE = 'SHOW_MORE';
export const RECEIVED_RESULT = 'RECEIVED_RESULT';

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
        if (searchString === '') {
            return;
        }
        const url = `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${searchString}&Skip=${skip}&Take=${take}`;
        return fetch(url)
        .then(
            response => response.json(),
            error => {
                console.error(error);
                return;
            }
        )
        .then(
            json => {
                dispatch(receivedResult(json));
            }
        )
    }
}
