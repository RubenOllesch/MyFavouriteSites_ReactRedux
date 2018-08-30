import React from 'react';
import { Input, TextArea } from 'chayns-components';

export default class TextInput {
    constructor({ type, name, placeholder, required }) {
        this.state = {
            value: ''
        };
    }

    render() {
        const { type, name, placeholder, required } = this.props;
        switch (type) {
            case 'input':
                return (
                    <Input
                        placeholder={placeholder}
                        onChange={(text) => {
                                this.setState({
                                    value: text
                                });
                        }}
                    />
                );
            case 'textArea':
                return (
                    <TextArea
                        placeholder={placeholder}
                        onChange={(text) => {
                            this.setState({
                                value: text
                            });
                        }}
                    />
                    );
            default:
                return null;
        }
    }
}
