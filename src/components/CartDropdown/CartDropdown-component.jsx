import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { clickInElement } from './CartDropdown-util';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import CartItem from '../CartItem/CartItem-component';
import './CartDropdown-style.scss';


const CartDropdown = ({ cartItems, toggleCartHidden, history }) => {

   useEffect(() => {
      // Hooks useEffect to close the cartDropdown if clicked outside of the dropdown
      const closeDropdown = event => {
         const selectIcon = document.querySelector('.cart-icon');
         const selectDropdown = document.querySelector('.cart-dropdown');
         if(!clickInElement(selectDropdown, event) && !clickInElement(selectIcon, event)) {
            toggleCartHidden();
         }
      }
      document.addEventListener('mousedown', closeDropdown);

      return (() => document.removeEventListener('mousedown', closeDropdown));
   }, [toggleCartHidden]);

   return (
   <div className="cart-dropdown">
      <div className="cart-items">
         {
            cartItems.length 
            ? cartItems.map(item => (
               <CartItem key={item.id} item={item} />
            ))
            : (
               <span className='empty-message'>Your cart is empty</span>
            )
         }
      </div>
      <CustomBtn onClick={() => {
            history.push('/checkout');
            toggleCartHidden();
         }}>
         GO TO CHECKOUT
      </CustomBtn>
   </div>
)};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));