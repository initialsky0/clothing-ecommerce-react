import React from 'react';
import { default as CollectionItem } from '../CollectionItem/CollectionItem-container';
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