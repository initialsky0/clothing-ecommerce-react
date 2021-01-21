import React from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview-component';
import { CollectionOverviewContainer } from './CollectionOverview-styled';

const CollectionOverview = ({collections}) => (
   <CollectionOverviewContainer>
      {
         collections.map(({ id, ...otherCollectionProps }) => 
            (<CollectionPreview key={id} {...otherCollectionProps} />))
      }
   </CollectionOverviewContainer>
);


export default CollectionOverview;