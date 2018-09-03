import { NEW_SEARCH, RECEIVED_SITES, SHOW_MORE } from "../actions";

const initialState = {
    siteList: [],
    searchString: '',
    skip: 0,
    take: 10
}
export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_SEARCH:
            return {...state, ...{
                searchString: action.searchString,
                skip: 0
            }};

        case SHOW_MORE:
            return {...state, ...{
                skip: state.skip + state.take
            }};
    
        case RECEIVED_SITES:
            return {...state, ...{
                siteList: [...state.siteList,
                    ...action.sites
                ]
            }}
        default:
            return state;
    }
}

