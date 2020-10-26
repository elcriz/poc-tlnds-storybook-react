import React from 'react';
import PropTypes from 'prop-types';
import './TLNDSCollection.scss';

export const TLNDSCollectionItem = ({
    children
}) => (
    <div className="tlnds-collection__item">
        {children}
    </div>
);

TLNDSCollectionItem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TLNDSCollectionItem;
