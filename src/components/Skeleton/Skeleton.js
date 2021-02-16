import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Skeleton.scss';

export const Skeleton = ({
    id,
    className,
    variant,
    isFullWidth,
    isFullHeight
}) => (
    <span
        id={id}
        className={classnames(className, 'skeleton', {
            'skeleton--text': variant === 'text',
            'skeleton--figure': variant === 'figure',
            'skeleton--full-width': isFullWidth,
            'skeleton--full-height': isFullHeight
        })}
    />
);

Skeleton.propTypes = {
    /**
     * Specify an optional id attribute to be added to the skeleton
     */
    id: PropTypes.string,
    /**
     * Specify an optional (CSS) classname to be added to the skeleton
     */
    className: PropTypes.string,
    /**
     * Specify the variant of the skeleton
     */
    variant: PropTypes.oneOf([
        'text',
        'figure'
    ]),
    /**
     * Specify if the skeleton should be rendered in full width (occupying all the available horizontal space)
     */
    isFullWidth: PropTypes.bool,
    /**
     * Specify if the skeleton should be rendered in full height (occupying all the available vertical space)
     */
    isFullHeight: PropTypes.bool,
};

Skeleton.defaultProps = {
    variant: 'text',
    isFullWidth: false,
    isFullHeight: false,
};

export default Skeleton;
