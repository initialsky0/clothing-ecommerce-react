import React from 'react';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import './CartDropdown-style.scss';


const CartDropdown = () => (
   <div className="cart-dropdown">
      <div className="cart-items"></div>
      <CustomBtn>GO TO CHECKOUT</CustomBtn>
   </div>
);

export default CartDropdown;