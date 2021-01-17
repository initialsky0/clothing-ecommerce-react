import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { clickInElement } from './CartDropdown-util';
import { CartDropdownContainer, 
         CartItemsContainer, 
         EmptyMessageContainer } from './CartDropdown-styled';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import CartItem from '../CartItem/CartItem-component';


const CartDropdown = ({ cartItems, toggleCartHidden, history }) => {

   useEffect(() => {
      // Hooks useEffect to close the cartDropdown if clicked outside of the dropdown
      const closeDropdown = event => {
         const selectIcon = document.getElementById('cart-icon');
         const selectDropdown = document.getElementById('cart-dropdown');
         if(!clickInElement(selectDropdown, event) && !clickInElement(selectIcon, event)) {
            toggleCartHidden();
         }
      }
      document.addEventListener('mousedown', closeDropdown);

      return () => document.removeEventListener('mousedown', closeDropdown);
   }, [toggleCartHidden]);

   return (
   <CartDropdownContainer id='cart-dropdown'>
      <CartItemsContainer>
         {
            cartItems.length 
            ? cartItems.map(item => (
               <CartItem key={item.id} item={item} />
            ))
            : (
               <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )
         }
      </CartItemsContainer>
      <CustomBtn onClick={() => {
            history.push('/checkout');
            toggleCartHidden();
         }}>
         GO TO CHECKOUT
      </CustomBtn>
   </CartDropdownContainer>
)};

const mapStateToProps = createStructuredSelector({
   cartItems: selectCartItems
});

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));