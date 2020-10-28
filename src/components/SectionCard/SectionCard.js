import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './SectionCard.scss';

export const SectionCard = ({
    id,
    className,
    heading,
    description,
    url,
    imageUrl,
}) => (
    <div
        id={id}
        className={classnames(className, 'section-card')}
    >
        <a
            className="section-card__inner"
            href={url}
        >
            <div className="section-card__content">
                <h1 className="section-card__heading">{heading}</h1>
                <div className="section-card__description">{description}</div>
            </div>
            {imageUrl && (
                <img
                    className="section-card__image"
                    src={imageUrl}
                    alt={heading}
                />
            )}
        </a>
    </div>
);

SectionCard.propTypes = {
    /**
     * Specify an optional id attribute to be added to the section card
     */
    id: PropTypes.string,
    /**
     * Specify an optional (CSS) classname to be added to the section card
     */
    className: PropTypes.string,
    /**
     * Specify a heading for the section card
     */
    heading: PropTypes.string.isRequired,
    /**
     * Specify a description text for the section card
     */
    description: PropTypes.string,
    /**
     * Specify a url for the section card to route to (e.g. the section page)
     */
    url: PropTypes.string,
    /**
     * Specify a url for an image
     */
    imageUrl: PropTypes.string,
};

SectionCard.defaultProps = {
    url: '#',
    imageUrl: undefined,
};

export default SectionCard;
