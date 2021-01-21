import React from 'react';
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


export default CollectionItem;