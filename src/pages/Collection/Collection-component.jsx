import React from 'react';
import { default as CollectionItem } from '../../components/CollectionItem/CollectionItem-container';
import { CollectionPageContainer, 
         CollectionTitleContainer, 
         CollectionItemsContainer } from './Collection-styled';

const CollectionPage = ({ collection }) => {
   const {title, items} = collection;

   return (
   <CollectionPageContainer>
      <CollectionTitleContainer>{ title }</CollectionTitleContainer>
      <CollectionItemsContainer>
         {
            items.map(item => (<CollectionItem key={item.id} item={item} />))
         }
      </CollectionItemsContainer>
   </CollectionPageContainer>
);}


export default CollectionPage;