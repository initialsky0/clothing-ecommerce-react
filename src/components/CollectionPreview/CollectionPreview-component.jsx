import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem-component';
import { CollectionPreviewContainer, 
         CollectPrevTitleContainer, 
         CollectPrevItemsContainer } from './CollectionPreview-styled';

const CollectionPreview = ({ title, items }) => (
   <CollectionPreviewContainer>
      <CollectPrevTitleContainer>{title.toUpperCase()}</CollectPrevTitleContainer>
      <CollectPrevItemsContainer>
         {
            items
               .filter((item, i) => i < 4)
                  .map(item => (
                     <CollectionItem key={item.id} item={item} />
               ))
         }
      </CollectPrevItemsContainer>
   </CollectionPreviewContainer>
);


export default CollectionPreview;