import React from 'react';
import PropTypes from 'prop-types';
import { Input, TextArea } from 'chayns-components/lib';

const TextInput = ({ type, id, placeholder, onChange }) => {
    switch (type) {
        case 'input':
            return (
                <Input
                    id={id}
                    placeholder={placeholder}
                    onChange={(value) => { onChange(id, value); }}
                />
            );
        case 'textarea':
            return (
                <TextArea
                    id={id}
                    placeholder={placeholder}
                    onChange={(value) => { onChange(id, value); }}
                    autogrow="true"
                />
                );
        default:
            return null;
    }
};

TextInput.propTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default TextInput;
