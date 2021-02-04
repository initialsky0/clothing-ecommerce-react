import React from 'react';
import CollectionItem from '../../components/CollectionItem/CollectionItem-component';
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop-selectors';
import { selectHeaderFixed, selectHeaderHidden } from '../../redux/header/header-selectors';
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';
import { toggleHeaderFixed, setHeaderHidden, setHeaderShow } from '../../redux/header/header-actions';
import { CollectionPageContainer, 
         CollectionTitleContainer, 
         CollectionItemsContainer } from './Collection-styled';
import { useInitCollections } from './Collection-utils';
import { useScrollEffect } from '../../scroll-utils';

const CollectionPage = (
   { collection, toggleFixedHeader, headerHidden, 
      headerFixed, hideHeader, showHeader, itemCount }) => {
   const {title, items} = collection;

   useInitCollections(toggleFixedHeader, showHeader, headerFixed, headerHidden, itemCount);
   useScrollEffect(headerHidden, showHeader, hideHeader);

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
   collection: selectCollection(ownProps.match.params.collectionId)(state),
   headerHidden: selectHeaderHidden(state),
   headerFixed: selectHeaderFixed(state),
   itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = dispatch => ({
   toggleFixedHeader: () => dispatch(toggleHeaderFixed()),
   hideHeader: () => dispatch(setHeaderHidden()),
   showHeader: () => dispatch(setHeaderShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionPage);