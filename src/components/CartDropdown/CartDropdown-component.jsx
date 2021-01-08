import React from 'react';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import CartItem from '../CartItem/CartItem-component';
import './CartDropdown-style.scss';


const CartDropdown = ({ cartItems }) => (
   <div className="cart-dropdown">
      <div className="cart-items">
         {
            cartItems.map(item => (
               <CartItem key={item.id} item={item} />
            ))
         }
      </div>
      <CustomBtn>GO TO CHECKOUT</CustomBtn>
   </div>
);

const mapStateToProps = state => ({
   cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);