import React from 'react';
import { CartItemContainer, ItemDetailsContainer } from './CartItem-styled';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
   <CartItemContainer>
      <img src={imageUrl} alt="item" />
      <ItemDetailsContainer>
         <span>{name}</span>
         <span>{quantity} × ${price}</span>
      </ItemDetailsContainer>
   </CartItemContainer>
);

export default CartItem;