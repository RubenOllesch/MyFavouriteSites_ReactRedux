import { NEW_SEARCH, RECEIVED_RESULT, SHOW_MORE, CLEAR_SITES } from "../actions/search";

const initialState = {
    siteList: [],
    searchString: '',
    skip: 0,
    take: 10
}
export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_SEARCH:
            return {
                ...state,
                ...{
                    searchString: action.searchString,
                    skip: 0
                }
            };

        case SHOW_MORE:
            return {
                ...state,
                ...{
                    skip: state.skip + state.take
                }
            };

        case CLEAR_SITES:
            return {
                ...state,
                ...{
                    siteList: []
                }
            };

        case RECEIVED_RESULT:
            const sites = action.result.ResultCode === 0 ? action.result.Data : [];
            return {
                ...state,
                ...{
                    siteList: [
                        ...state.siteList,
                        ...sites
                    ]
                }
            };

        default:
            return state;
    }
}

