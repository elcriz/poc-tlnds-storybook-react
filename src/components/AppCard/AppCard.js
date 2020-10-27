import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Rating from '../Rating/Rating';
import './AppCard.scss';

export const AppCard = ({
    id,
    className,
    heading,
    information,
    ratingValue,
    iconImageUrl,
}) => (
    <div
        id={id}
        className={classnames(className, 'app-card')}
    >
        <a
            className="app-card__inner"
            href="/"
            title={heading}
        >
            <div className="app-card__description">
                <h1 className="app-card__heading">{heading}</h1>
                <div className="app-card__information">
                    {information}
                </div>
                {ratingValue !== undefined && (
                    <Rating
                        className="app-card__rating"
                        value={ratingValue}
                    />
                )}
            </div>
            {iconImageUrl && (
                <div className="app-card__icon-container">
                    <img
                        className="app-card__icon"
                        src={iconImageUrl}
                        alt={heading}
                    />
                </div>
            )}
        </a>
    </div>
);

AppCard.propTypes = {
    /**
     * Specify an optional id attribute to be added to the app card
     */
    id: PropTypes.string,
    /**
     * Specify an optional (CSS) classname to be added to the app card
     */
    className: PropTypes.string,
    /**
     * Specify a heading for the app card (the featured app's title)
     */
    heading: PropTypes.string.isRequired,
    /**
     * Specify any addtional information regarding the featured app (eg. its publisher etc.)
     */
    information: PropTypes.string,
    /**
     * Optionally specify the featured app's rating value (0...5)
     */
    ratingValue: PropTypes.oneOf([undefined, 0, 1, 2, 3, 4, 5]),
    /**
     * Specify the url of the featured app's icon image
     */
    iconImageUrl: PropTypes.string,
};

AppCard.defaultProps = {
    ratingValue: undefined,
    iconImageUrl: undefined,
};

export default AppCard;
