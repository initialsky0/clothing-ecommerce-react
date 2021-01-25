import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from '../../redux/cart/cart-actions';
import { 
   ItemImageContainer,
   ItemBtnContainer,
   CollectionItemContainer,
   CollectionFooterContainer,
   ItemNameContainer,
   ItemPriceContainer 
} from './CollectionItem-styled';

const CollectionItem = ({ item, addItemToCart }) => {
   const {name, price, imageUrl} = item;
   
   return (
   <CollectionItemContainer>
      <ItemImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
         <ItemNameContainer>{name}</ItemNameContainer>
         <ItemPriceContainer>{price}</ItemPriceContainer>
      </CollectionFooterContainer>
      <ItemBtnContainer onClick={() => addItemToCart(item)} inverted >
         Add to cart
      </ItemBtnContainer>
   </CollectionItemContainer>
);}

const mapDispatchToProps = dispatch => ({
   addItemToCart: item => dispatch(addItemToCart(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);