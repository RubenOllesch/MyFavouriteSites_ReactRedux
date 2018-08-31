import React from 'react';
import PropTypes from 'prop-types';

import { Accordion, Button } from 'chayns-components';
import TextInput from './textInput/TextInput';
import jsonSender from '../../utils/jsonSender';

import './center.scss';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: []
        };

        const { textInputs } = this.props.config;
        textInputs.forEach(({ id }) => {
            this.state.inputs.push({
                name: id,
                value: ''
            });
        });

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event) {
        const { inputs } = this.state;

        const changedInput = inputs.find(({ name }) => name === event.target.id);
        const indexOfChangedInput = inputs.indexOf(changedInput);

        inputs[indexOfChangedInput].value = event.target.value;
        this.setState({
            inputs
        });
    }

    submitForm() {
        jsonSender({
            text: this.state.inputs
        });
    }

    render() {
        const { title, textInputs, buttonText } = this.props.config;

        return (
            <Accordion head={title} >
                <div>
                    {
                        textInputs && (textInputs.map(({ type, id, placeholder }) => (
                                <TextInput
                                    className="input"
                                    type={type}
                                    id={id}
                                    placeholder={placeholder}
                                    onChange={this.handleChange}
                                />
                            )))
                    }
                </div>
                <div className="center">
                    <Button onClick={this.submitForm} >
                        {buttonText}
                    </Button>
                </div>
            </Accordion>
        );
    }
}

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
