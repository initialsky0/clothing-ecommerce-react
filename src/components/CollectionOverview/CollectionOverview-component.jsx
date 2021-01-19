import React, {useContext} from 'react';
import CollectionPreview from '../CollectionPreview/CollectionPreview-component';
import CollectionContexts from '../../contexts/collections/collections-context';
import { CollectionOverviewContainer } from './CollectionOverview-styled';

const CollectionOverview = () => {
   const collections = Object.values(useContext(CollectionContexts));
   return (
      <CollectionOverviewContainer>
         {
            collections.map(({ id, ...otherCollectionProps }) => 
               (<CollectionPreview key={id} {...otherCollectionProps} />))
         }
      </CollectionOverviewContainer>
   );
};

export default CollectionOverview;