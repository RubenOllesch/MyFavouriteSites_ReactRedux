import React from 'react';
import PropTypes from 'prop-types';

import { Accordion, Input, TextArea, Button } from 'chayns-components';

import './center.scss';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: []
        };
        const { textInputs } = this.props.config;
        const { inputs } = this.state;

        this.setState({
            inputs: [...inputs, ...textInputs]
        });
    }


    render() {
        const { title, textInputs, buttonText } = this.props.config;

        return (
            <Accordion head={title} >
                <div>
                    {
                        textInputs && (textInputs.map(({ type, placeholder }) => {
                            switch (type) {
                                case 'input':
                                    return <Input placeholder={placeholder} />;
                                case 'textArea':
                                    return <TextArea placeholder={placeholder} autogrow />;
                                default:
                                    return null;
                            }
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
