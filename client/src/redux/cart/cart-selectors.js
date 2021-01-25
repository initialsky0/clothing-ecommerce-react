// Memoized selectors, does not render if the selector is the same value
import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
   [selectCart], 
   cart => cart.cartItem
);

export const selectCartHidden = createSelector(
   [selectCart],
   cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
   [selectCartItems],
   cartItem => cartItem.reduce((acc, item) => acc + item.quantity, 0)
)

export  const selectCartTotal = createSelector(
   [selectCartItems],
   cartItem => cartItem.reduce((acc, item) => (acc + (item.quantity * item.price)), 0)
)