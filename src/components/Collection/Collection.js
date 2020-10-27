import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CollectionItem from './CollectionItem';
import './Collection.scss';

/**
 * `Collection` is a component for rendering a grouped collection of related components and/or elements.
 */
export const Collection = ({
    id,
    className,
    variant,
    children,
}) => {
    const filteredChildren = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return child;
        }
    });

    return (
        <div
            id={id}
            className={classnames(className, 'collection', {
                'collection--one-fourth': variant === 'oneFourth',
                'collection--one-third': variant === 'oneThird',
                'collection--one-half': variant === 'oneHalf',
            })}
        >
            {filteredChildren.map((child, childIndex) => (
                <CollectionItem key={childIndex}>
                    {React.cloneElement(child, {})}
                </CollectionItem>
            ))}
        </div>
    );
        };

Collection.propTypes = {
    /**
     * Specify an optional id attribute to be added to the collection
     */
    id: PropTypes.string,
    /**
     * Specify an optional (CSS) classname to be added to the collection
     */
    className: PropTypes.string,
    /**
     * Specify the variant of the collection (the number of child items in a row). Please note that the collection is styled responsive and scaling goes fully automatic.
     */
    variant: PropTypes.oneOf([
        'oneFourth',
        'oneThird',
        'oneHalf'
    ]),
    /**
     * Any child components and/or elements
     */
    children: PropTypes.node.isRequired,
};

export default Collection;
