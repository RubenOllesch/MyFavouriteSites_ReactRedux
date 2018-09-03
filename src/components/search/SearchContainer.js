import { connect } from 'react-redux';
import Search from './Search';
import { newSearch, showMore, fetchSites } from '../../actions/search';

const mapStateToProps = (state) => {
    return {
        siteList: state.searchReducer.siteList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newSearch: (value) => {
            dispatch(newSearch(value));
            dispatch(fetchSites());
        },
        showMore: () => {
            dispatch(showMore());
            dispatch(fetchSites());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
