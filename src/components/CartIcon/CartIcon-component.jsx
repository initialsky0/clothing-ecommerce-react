import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/cart-provider';

import { CartIconContainer, 
         ShoppingIconContainer,
         ItemCountContainer } from './CartIcon-styled';


const CartIcon = () => {
   const { toggleCartHidden, cartItemsCount } = useContext(CartContext);
   return (
      <CartIconContainer id='cart-icon' onClick={toggleCartHidden}>
         <ShoppingIconContainer />
         <ItemCountContainer>{cartItemsCount}</ItemCountContainer>
      </CartIconContainer>
   );
}

export default CartIcon;