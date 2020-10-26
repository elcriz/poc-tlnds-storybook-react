import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import TLNDSCollectionItem from './TLNDSCollectionItem';
import './TLNDSCollection.scss';

/**
 * `TLNDSCollection` is a component for rendering a grouped collection of related components and/or elements.
 */
export const TLNDSCollection = ({
    variant,
    isList,
    children,
}) => {
    const filteredChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return child;
        }
    });

    return (
        <div
            className={classnames('tlnds-collection', {
                'tlnds-collection--list': isList,
                'tlnds-collection--one-fourth': variant === 'oneFourth',
                'tlnds-collection--one-third': variant === 'oneThird',
                'tlnds-collection--one-half': variant === 'oneHalf',
            })}
        >
            {filteredChildren.map((child, childIndex) => (
                <TLNDSCollectionItem key={childIndex}>
                    {React.cloneElement(child, {})}
                </TLNDSCollectionItem>
            ))}
        </div>
    );
        };

TLNDSCollection.propTypes = {
    /**
     * What variant should this collection have?
     */
    variant: PropTypes.oneOf([
        'oneFourth',
        'oneThird',
        'oneHalf'
    ]),
    /**
     * Should the collection be styled as a list?
     */
    isList: PropTypes.bool,
    /**
     * Any child components and/or elements
     */
    children: PropTypes.node.isRequired,
};

TLNDSCollection.defaultProps = {
    isList: false,
};

export default TLNDSCollection;
