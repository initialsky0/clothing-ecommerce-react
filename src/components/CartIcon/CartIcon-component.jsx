import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { createStructuredSelector } from 'reselect'
import { selectCartItemsCount } from '../../redux/cart/cart-selectors';

import { CartIconContainer, 
         ShoppingIconContainer,
         ItemCountContainer } from './CartIcon-styled';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
   <CartIconContainer id='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIconContainer />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
   </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
   toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
   itemCount: selectCartItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);