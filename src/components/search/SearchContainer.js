import { connect } from 'react-redux';
import Search from './Search';
import { clearSites, addSites, newSearch, showMore, fetchSites } from '../../actions';

const mapStateToProps = (state) => {
    return {
        siteList: state.searchReducer.siteList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        clearSites: () => {
            dispatch(clearSites());
        },
        addSites: (newSites) => {
            dispatch(addSites(newSites));
        },
        newSearch: (value) => {
            dispatch(newSearch(value));
            dispatch(fetchSites);
        },
        showMore: () => {
            dispatch(showMore());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
