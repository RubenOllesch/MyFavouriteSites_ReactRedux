import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ position, text, onClick }) => (
        <div className="button" style={{ textAlign: position }} >
            <a href="#" onClick={onClick} >{text}</a>
        </div>
    );

Button.propTypes = {
    position: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Button;
