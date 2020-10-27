import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Button.scss';

export const Button = ({
    id,
    className,
    type,
    tabIndex,
    children,
    variant,
    isDisabled,
    isOutlined,
    isLoading,
    isSkeleton,
    onClick,
}) => (
    <button
        id={id}
        className={classnames(className, 'button', {
            'button--secondary': variant === 'secondary',
            'button--tertiary': variant === 'tertiary',
            'button--outlined': isOutlined,
            'button--skeleton': isSkeleton,
            'button--loading': isLoading && !isSkeleton,
        })}
        type={type}
        tabIndex={tabIndex}
        disabled={isDisabled}
        onClick={(!isLoading && !isSkeleton) ? undefined : onClick}
    >
        {children}
    </button>
);

Button.propTypes = {
    /**
     * Specify an optional id attribute to be added to the button
     */
    id: PropTypes.string,
    /**
     * Specify an optional (CSS) classname to be added to the button
     */
    className: PropTypes.string,
    /**
     * Optional prop to specify the type of the button
     */
    type: PropTypes.oneOf([
        'button',
        'reset',
        'submit'
    ]),
    /**
     * Optional prop to specify the tabindex of the button
     */
    tabIndex: PropTypes.number,
    /**
     * Specify the content of the button (its label)
     */
    children: PropTypes.node.isRequired,
    /**
     * Specify the variant of the button
     */
    variant: PropTypes.oneOf([
        'secondary',
        'tertiary',
    ]),
    /**
     * Specify if the button is currently disabled
     */
    isDisabled: PropTypes.bool,
    /**
     * Specify if the button is styled as outlined
     */
    isOutlined: PropTypes.bool,
    /**
     * Specify if the button is currently styled as loading
     */
    isLoading: PropTypes.bool,
    /**
     * Specify if the button is currently styled as skeleton
     */
    isSkeleton: PropTypes.bool,
    /**
     * Specify the callback function for when the button is clicked or tapped
     */
    onClick: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.func
    ]),
};

Button.defaultProps = {
    type: 'button',
    tabIndex: 0,
    isDisabled: false,
    isOutlined: false,
    isLoading: false,
    isSkeleton: false,
    onClick: undefined,
};

export default Button;
