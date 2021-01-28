import cartActionTypes from './cart-types';

export const toggleCartHidden = () => ({
   type: cartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItemToCart = item => ({
   type: cartActionTypes.ADD_ITEM,
   payload: item
});

export const removeItemFromCart = item => ({
   type: cartActionTypes.REMOVE_ITEM,
   payload: item
});

export const clearItemFromCart = item => ({
   type: cartActionTypes.CLEAR_ITEM_FROM_CART,
   payload: item
});

export const updateCartStart = (cartItems, item) => ({
   type: cartActionTypes.UPDATE_CART_START,
   payload: { cartItems, item }
});

export const updateCartSuccess = cartItems => ({
   type: cartActionTypes.UPDATE_CART_SUCCESS,
   payload: cartItems
});

export const updateCartFailed = error => ({
   type: cartActionTypes.UPDATE_CART_FAILED,
   payload: error
});

export const updateCartSignInStart = () => ({
   type: cartActionTypes.UPDATE_CART_ON_SIGN_IN_START
});

export const clearCart = () => ({
   type: cartActionTypes.CLEAR_CART
});

export const clearDBCartStart = () => ({
   type: cartActionTypes.CLEAR_CART_REMOTE_START
});

export const clearDBCartSuccess = () => ({
   type: cartActionTypes.CLEAR_CART_REMOTE_SUCCESS
});

export const clearDBCartFailed = error => ({
   type: cartActionTypes.CLEAR_CART_REMOTE_FAILED,
   payload: error
});