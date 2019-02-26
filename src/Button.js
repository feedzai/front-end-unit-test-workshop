import React, { PureComponent } from 'react';
import PropTypes from "prop-types";

export default class Button extends PureComponent {
    propTypes = {
        text: PropTypes.string.isRequired,
        onClick: PropTypes.function
    };

    render() {
        const {text, capitalize, onClick} = this.props;
        let label = text;

        if (capitalize) {
            label = text.slice(0, 2).toUpperCase() + text.slice(2);
        }

        return (
            <button onClick={onClick} type="button">{label}</button>
        );
    }
}
