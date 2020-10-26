import React from 'react';
import PropTypes from 'prop-types';
import TLNDSRating from '../TLNDSRating/TLNDSRating';
import './TLNDSAppCard.scss';

/**
 * A card to feature an app.
 */
export const TLNDSAppCard = ({
    heading,
    information,
    ratingValue,
    iconImageUrl,
}) => (
    <div className="tlnds-app-card">
        <a
            className="tlnds-app-card__inner"
            href="/"
            title={heading}
        >
            <div className="tlnds-app-card__description">
                <h1 className="tlnds-app-card__heading">{heading}</h1>
                <div className="tlnds-app-card__information">
                    {information}
                </div>
                <TLNDSRating
                    className="tlnds-app-card__rating"
                    value={ratingValue}
                />
            </div>
            {iconImageUrl && (
                <div className="tlnds-app-card__icon-container">
                    <img
                        className="tlnds-app-card__icon"
                        src={iconImageUrl}
                        alt={heading}
                    />
                </div>
            )}
        </a>
    </div>
);

TLNDSAppCard.propTypes = {
    /**
     * The title of the app
     */
    heading: PropTypes.string.isRequired,
    /**
     * Any addtional information regarding the app (eg. its publisher etc.)
     */
    information: PropTypes.string,
    /**
     * The app rating value (0...5)
     */
    ratingValue: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
    /**
     * The url of the icon image
     */
    iconImageUrl: PropTypes.string,
};

TLNDSAppCard.defaultProps = {
    ratingValue: 0,
    iconImageUrl: undefined,
};

export default TLNDSAppCard;
