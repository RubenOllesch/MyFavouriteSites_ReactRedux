import React from 'react';
import PropTypes from 'prop-types';

import { Accordion, Button } from 'chayns-components';
import TextInput from './textInput/TextInput';

import './center.scss';
import { connect } from 'react-redux';

var Form = ({ config, addTextfield, updateTextfield }) => {
    console.log(config);
    console.log(addTextfield);
    console.log(updateTextfield);
    return (
        <Accordion head={config.title} >
            <div>
                {
                    config.textInputs && (config.textInputs.map(({ type, id, placeholder }) => {
                        addTextfield(id);
                        return (
                            <TextInput
                                className="input"
                                type={type}
                                id={id}
                                key={id}
                                placeholder={placeholder}
                                onChange={updateTextfield}
                            />
                        );
                    }))
                }
            </div>
            <div className="center">
                <Button onClick={() => {
                    console.log('submit');
                }} >
                    {config.buttonText}
                </Button>
            </div>
        </Accordion>
    );
}

Form = connect()(Form);

export default Form;

Form.propTypes = {
    config: PropTypes.shape({
        title: PropTypes.string.isRequired,

        textInputs: PropTypes.arrayOf(PropTypes.shape({
            type: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
            placeholder: PropTypes.string.isRequired,
            required: PropTypes.bool
        })),

        buttonText: PropTypes.string.isRequired
    }).isRequired
};
