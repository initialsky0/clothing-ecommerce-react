import cartActionTypes from './cart-types';

const INITIAL_STATE = {
   hidden: true,
   cartItems: [],
   error: null
};

const cartReducer = (state = INITIAL_STATE, action) => {
   switch (action.type) {
      case cartActionTypes.TOGGLE_CART_HIDDEN:
         return {
            ...state,
            hidden: !state.hidden
         }
      case cartActionTypes.UPDATE_CART_SUCCESS:
         return {
            ...state,
            cartItems: action.payload
         }
      case cartActionTypes.CLEAR_CART:
         return {
            ...state,
            cartItems: []
         }
      case cartActionTypes.UPDATE_CART_FAILED:
      case cartActionTypes.CLEAR_CART_REMOTE_FAILED:
         return {
            ...state,
            error: action.payload
         }
      default:
         return state
   }
};


export default cartReducer;