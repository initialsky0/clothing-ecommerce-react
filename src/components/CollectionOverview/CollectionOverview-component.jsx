import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview-component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsPreview } from '../../redux/shop/shop-selectors';
import { CollectionOverviewContainer } from './CollectionOverview-styled';

const CollectionOverview = ({collections}) => (
   <CollectionOverviewContainer>
      {
         collections.map(({ id, ...otherCollectionProps }) => 
            (<CollectionPreview key={id} {...otherCollectionProps} />))
      }
   </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
   collections: selectCollectionsPreview
})

export default connect(mapStateToProps)(CollectionOverview);