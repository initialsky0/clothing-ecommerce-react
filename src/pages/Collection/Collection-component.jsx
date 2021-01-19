import React, {useContext} from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem-component';
import CollectionContexts from '../../contexts/collections/collections-context';
import { CollectionPageContainer, 
         CollectionTitleContainer, 
         CollectionItemsContainer } from './Collection-styled';

// useContext method

const CollectionPage = ({ match }) => {
   const collections = useContext(CollectionContexts);
   const collection = collections[match.params.collectionId]
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

// Traditional context component method

// const CollectionPage = ({ match }) => {
//    return (
//       <CollectionContexts.Consumer>
//          { 
//             collections => {
//                const collection = collections[match.params.collectionId];
//                const {title, items} = collection;
//                return (
//                   <CollectionPageContainer>
//                      <CollectionTitleContainer>{ title }</CollectionTitleContainer>
//                      <CollectionItemsContainer>
//                         {
//                            items.map(item => (<CollectionItem key={item.id} item={item} />))
//                         }
//                      </CollectionItemsContainer>
//                   </CollectionPageContainer>
//                );
//          }}
//       </CollectionContexts.Consumer>
// );}

export default CollectionPage;