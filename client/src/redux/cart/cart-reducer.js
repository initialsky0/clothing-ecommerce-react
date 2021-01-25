import cartActionTypes from './cart-types';
import { updateCartItem, removeCartItem } from './cart-util';

const INITIAL_STATE = {
   hidden: true,
   cartItem: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case cartActionTypes.TOGGLE_CART_HIDDEN:
         return {
            ...state,
            hidden: !state.hidden
         }
      case cartActionTypes.ADD_ITEM:
         return {
            ...state,
            cartItem: updateCartItem(state.cartItem, action.payload)
         }
      case cartActionTypes.REMOVE_ITEM:
         return {
            ...state,
            cartItem: removeCartItem(state.cartItem, action.payload)
         }
      case cartActionTypes.CLEAR_ITEM_FROM_CART:
         return {
            ...state,
            cartItem: state.cartItem.filter(item => item.id !== action.payload.id)
         }
      case cartActionTypes.CLEAR_CART:
         return {
            ...state,
            cartItem: []
         }
      default:
         return state
   }
};


export default cartReducer;