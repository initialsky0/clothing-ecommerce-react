import React, {useContext} from 'react';
import { CartContext } from '../../providers/cart/cart-provider'
import { 
   ItemImageContainer,
   ItemBtnContainer,
   CollectionItemContainer,
   CollectionFooterContainer,
   ItemNameContainer,
   ItemPriceContainer 
} from './CollectionItem-styled';

const CollectionItem = ({ item }) => {
   const { name, price, imageUrl } = item;
   const { addItem } = useContext(CartContext);
   
   return (
   <CollectionItemContainer>
      <ItemImageContainer imageUrl={imageUrl} />
      <CollectionFooterContainer>
         <ItemNameContainer>{name}</ItemNameContainer>
         <ItemPriceContainer>{price}</ItemPriceContainer>
      </CollectionFooterContainer>
      <ItemBtnContainer onClick={() => addItem(item)} inverted >
         Add to cart
      </ItemBtnContainer>
   </CollectionItemContainer>
);}

export default CollectionItem;