import { connect } from 'react-redux';
import Form from './Form';
import { addTextfield, updateTextfield, submitForm } from '../../actions/form';

const mapStateToProps = state => {
    return {
        formList: state.formList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addTextfield: id => {
            dispatch(addTextfield(id));
        },
        updateTextfield: (event) => {
            dispatch(updateTextfield(event.target.id, event.target.value));
        },
        submitForm: () => {
            dispatch(submitForm());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
