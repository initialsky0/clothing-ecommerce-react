import React from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem-component';
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop-selectors';
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

const mapStateToProps = (state, ownProps) => ({
   collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);