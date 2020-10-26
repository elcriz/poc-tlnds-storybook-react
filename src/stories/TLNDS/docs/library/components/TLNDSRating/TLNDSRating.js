import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './TLNDSRating.scss';

export const TLNDSRating = ({
    className,
    value,
}) => (
    <aside
        className={classnames(className, 'tlnds-rating')}
        title={`${value} van 5 sterren`}
    >
        {Array.apply(null, Array(5)).map((slot, index) => (
            <span
                key={index}
                className={classnames('tlnds-rating__star', {
                    'tlnds-rating__star--ticked': index < value
                })}
            />
        ))}
    </aside>
);

TLNDSRating.propTypes = {
    /**
     * Initial class name
     */
    className: PropTypes.string,
    /**
     * The rating value (0...5)
     */
    value: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
};

TLNDSRating.defaultProps = {
    className: undefined,
    value: 0,
};

export default TLNDSRating;
