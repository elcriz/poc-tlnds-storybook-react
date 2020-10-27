import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Rating.scss';

export const Rating = ({
    className,
    value,
}) => (
    <aside
        className={classnames(className, 'rating')}
        title={`${value} van 5 sterren`}
    >
        {Array.apply(null, Array(5)).map((slot, index) => (
            <span
                key={index}
                className={classnames('rating__star', {
                    'rating__star--ticked': index < value
                })}
            />
        ))}
    </aside>
);

Rating.propTypes = {
    /**
     * Specify an optional id attribute to be added to the rating
     */
    id: PropTypes.string,
    /**
     * Specify an optional (CSS) classname to be added to the rating
     */
    className: PropTypes.string,
    /**
     * Optionally specify the rating's value (0...5)
     */
    value: PropTypes.oneOf([0, 1, 2, 3, 4, 5])
};

Rating.defaultProps = {
    className: undefined,
    value: 0,
};

export default Rating;
