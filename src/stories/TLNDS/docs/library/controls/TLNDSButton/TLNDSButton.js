import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TLNDSButton.scss';

/**
 * Primary UI component for confirming user actions.
 */
export const TLNDSButton = ({
    label,
    variant,
    isDisabled,
    isOutlined,
    onClick,
}) => (
    <button
        className={classnames('tlnds-button', {
            'tlnds-button--primary': variant === 'primary',
            'tlnds-button--secondary': variant === 'secondary',
            'tlnds-button--tertiary': variant === 'tertiary',
            'tlnds-button--outlined': isOutlined,
        })}
        type="button"
        disabled={isDisabled}
        onClick={onClick}
    >
        {label}
    </button>
);

TLNDSButton.propTypes = {
    /**
     * What label should this button have?
     */
    label: PropTypes.string.isRequired,
    /**
     * What variant should this button have?
     */
    variant: PropTypes.oneOf([
        'primary',
        'secondary',
        'tertiary',
    ]),
    /**
     * Is this button disabled?
     */
    isDisabled: PropTypes.bool,
    /**
     * Is this button styled as outlined?
     */
    isOutlined: PropTypes.bool,
    /**
     * Optional click handler function
     */
    onClick: PropTypes.func,
};

TLNDSButton.defaultProps = {
    isDisabled: false,
    isOutlined: false,
    onClick: undefined,
};

export default TLNDSButton;

