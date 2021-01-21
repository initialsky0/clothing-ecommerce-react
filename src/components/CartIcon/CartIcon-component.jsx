import React from 'react';

import { CartIconContainer, 
         ShoppingIconContainer,
         ItemCountContainer } from './CartIcon-styled';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
   <CartIconContainer id='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
   </CartIconContainer>
)

export default CartIcon;