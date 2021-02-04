import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../redux/cart/cart-selectors';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { clickOutsideComponent } from './CartDropdown-util';
import { CartDropdownContainer, 
         CartItemsContainer, 
         EmptyMessageContainer } from './CartDropdown-styled';
import CustomBtn from '../CustomBtn/CustomBtn-component';
import CartItem from '../CartItem/CartItem-component';


const CartDropdown = ({ cartItems, toggleCartHidden, history, iconRef }) => {
   //  Practice using ref, this works because CartDropdownContainer is basically a <div>
   const dropdownRef = React.createRef();

   useEffect(() => {
      // Hooks useEffect to close the cartDropdown if clicked outside of the dropdown
      const closeDropdown = event => {
         if(clickOutsideComponent(dropdownRef, event) && clickOutsideComponent(iconRef, event)) {
            toggleCartHidden();
         }
      }
      document.addEventListener('mousedown', closeDropdown);

      return () => document.removeEventListener('mousedown', closeDropdown);
   }, [toggleCartHidden, dropdownRef, iconRef]);

   return (
   <CartDropdownContainer ref={dropdownRef} >
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