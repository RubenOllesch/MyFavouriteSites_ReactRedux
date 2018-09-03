import React from 'react';
import PropTypes from 'prop-types';

import jsonSender from '../../utils/jsonSender';
import store from '../../store';

import { Accordion, Button } from 'chayns-components';
import TextInput from './textInput/TextInput';

import './center.scss';

var Form = ({ config, addTextfield, updateTextfield }) => {
    console.log(config);
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
                    console.log(store.getState.formList);
                    jsonSender({
                        text: store.getState().formList
                    });
                }} >
                    {config.buttonText}
                </Button>
            </div>
        </Accordion>
    );
}

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
