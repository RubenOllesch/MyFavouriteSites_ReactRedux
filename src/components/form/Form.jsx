import React from 'react';
import PropTypes from 'prop-types';

import { Accordion, Button } from 'chayns-components/lib';
import TextInput from './textInput/TextInput';

import './center.scss';

const Form = ({ config, addTextfield, updateTextfield, submitForm }) => (
    <Accordion head={config.title} >
        <div>
            {
                config.textInputs && config.textInputs.map(({ type, id, placeholder }) => {
                    addTextfield(id);
                    return (
                        <TextInput
                            type={type}
                            id={id}
                            key={id}
                            placeholder={placeholder}
                            onChange={(inputId, value) => updateTextfield(inputId, value)}
                        />
                    );
                })
            }
        </div>
        <div className="center">
            <Button onClick={submitForm} >
                {config.buttonText}
            </Button>
        </div>
    </Accordion>
);

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
    }).isRequired,
    addTextfield: PropTypes.func.isRequired,
    updateTextfield: PropTypes.func.isRequired,
    submitForm: PropTypes.func.isRequired
};
