import React from 'react';
import PropTypes from 'prop-types';

import { Input } from 'chayns-components';

import './delayedInput.scss';

export default class DelayedInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastTimeout: 0
        };
    }

    handleEvent(value) {
        const { callback, delay } = this.props;
        clearTimeout(this.state.lastTimeout);
        const newTimeout = setTimeout(() => {
            callback(value);
        }, delay);
        this.setState({
            lastTimeout: newTimeout
        });
    }

    render() {
        const { placeholder } = this.props;
        return (
            <Input
                placeholder={placeholder}
                onChange={(value) => {
                    this.handleEvent(value);
                }}
            />
        );
    }
}

DelayedInput.propTypes = {
    placeholder: PropTypes.string.isRequired,
    delay: PropTypes.number.isRequired,
    callback: PropTypes.func.isRequired
};
