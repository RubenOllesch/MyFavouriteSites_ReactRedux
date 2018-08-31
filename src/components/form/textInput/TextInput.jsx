import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ type, id, placeholder, onChange }) => {
    switch (type) {
        case 'input':
            return (
                <input
                    className="input"
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            );
        case 'textarea':
            return (
                <textarea
                    className="input"
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
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
