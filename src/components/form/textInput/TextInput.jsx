import React from 'react';

export default ({ type, id, placeholder, onChange }) => {
    switch (type) {
        case 'input':
            return (
                <input
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                />
            );
        case 'textarea':
            return (
                <textarea
                    id={id}
                    placeholder={placeholder}
                    onChange={onChange}
                    autogrow
                />
                );
        default:
            return null;
    }
};
