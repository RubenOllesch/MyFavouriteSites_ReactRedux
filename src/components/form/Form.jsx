import React from 'react';
import PropTypes from 'prop-types';

import { Accordion, Button } from 'chayns-components';
import TextInput from './textInput/TextInput';

import './center.scss';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: []
        };
        const { textInputs } = this.props.config;
    }

    render() {
        const { title, textInputs, buttonText } = this.props.config;

        return (
            <Accordion head={title} >
                <div>
                    {
                        textInputs && (textInputs.map(({ type, placeholder }) => {
                            return (
                                <TextInput
                                    type={type}
                                    placeholder={placeholder}
                                />
                            );
                        }))
                    }
                </div>
                <div className="center">
                    <Button >
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
