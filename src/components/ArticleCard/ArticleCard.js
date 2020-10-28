import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './ArticleCard.scss';

export const ArticleCard = ({
    id,
    className,
    heading,
    description,
    url,
    imageUrl,
    isInverted,
    hasBorder,
    hasStretchBackground,
    hasShortenedDescription,
}) => {
    const containerStyle = hasStretchBackground && imageUrl
        ? { backgroundImage: `url('${imageUrl}')` }
        : undefined;

    return (
        <div
            id={id}
            className={classnames(className, 'article-card', {
                'article-card--inverted': isInverted,
                'article-card--with-border': hasBorder,
                'article-card--stretch-background': hasStretchBackground
            })}
            style={containerStyle}
            data-test="01"
        >
            <a
                className="article-card__inner"
                href={url}
            >
                <h1 className="article-card__heading">{heading}</h1>
                <div
                    className={classnames('article-card__description', {
                        'article-card__description--shortened-single-line': hasShortenedDescription
                    })}
                >
                    {description}
                </div>
                {!hasStretchBackground && imageUrl && (
                    <img
                        className="article-card__image"
                        src={imageUrl}
                        alt={heading}
                    />
                )}
            </a>
        </div>
    );
};

ArticleCard.propTypes = {
    /**
     * Specify an optional id attribute to be added to the article card
     */
    id: PropTypes.string,
    /**
     * Specify an optional (CSS) classname to be added to the article card
     */
    className: PropTypes.string,
    /**
     * Specify a heading for the article card
     */
    heading: PropTypes.string.isRequired,
    /**
     * Specify a description text for the article card
     */
    description: PropTypes.string,
    /**
     * Specify a url for the article card to route to (e.g. the article page)
     */
    url: PropTypes.string,
    /**
     * Specify a url for an image
     */
    imageUrl: PropTypes.string,
    /**
     * Specify if the article card should be displayed with all coulours inverted
     */
    isInverted: PropTypes.bool,
    /**
     * Specify if the article card has a border
     */
    hasBorder: PropTypes.bool,
    /**
     * Specify if the article card has a stretch background
     */
    hasStretchBackground: PropTypes.bool,
    /**
     * Specify if the article card's description text (if available) should be truncated
     */
    hasShortenedDescription: PropTypes.bool,
};

ArticleCard.defaultProps = {
    url: '#',
    imageUrl: undefined,
    isInverted: false,
    hasBorder: false,
    hasStretchBackground: false,
    hasShortenedDescription: false,
};

export default ArticleCard;
