import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview-component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop-selectors';
import './CollectionOverview-style.scss';

const CollectionOverview = ({collections}) => (
   <div className="collection-overview">
      {
         collections.map(({ id, ...otherCollectionProps }) => 
            (<CollectionPreview key={id} {...otherCollectionProps} />))
      }
   </div>
);

const mapStateToProps = createStructuredSelector({
   collections: selectCollections
})

export default connect(mapStateToProps)(CollectionOverview);