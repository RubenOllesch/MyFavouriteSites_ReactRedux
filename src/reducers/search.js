import { ADD_SITES, NEW_SEARCH, SHOW_MORE, CLEAR_SITES } from "../actions";

const initialState = {
    siteList: [],
    searchString: '',
    skip: 0,
    take: 10
}

export default (state = initialState, action) => {
    switch (action.type) {
        case CLEAR_SITES:
            return {...state,...{
                siteList: []
            }};
            
        case ADD_SITES:
            return {...state, ...{
                siteList: [...state.siteList,
                    ...action.newSites
                ]
            }};

        case NEW_SEARCH:
            return {...state, ...{
                searchString: action.searchString,
                skip: 0
            }};

        case SHOW_MORE:
            return {...state, ...{
                skip: state.skip + state.take
            }};
    
        default:
            return state;
    }
}

