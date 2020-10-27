import React from 'react';
import PropTypes from 'prop-types';
import './Collection.scss';

export const TLNDSCollectionItem = ({
    children
}) => (
    <div className="collection__item">
        {children}
    </div>
);

TLNDSCollectionItem.propTypes = {
    /**
     * Specify the content of the collection item
     */
    children: PropTypes.node.isRequired,
};

export default TLNDSCollectionItem;
