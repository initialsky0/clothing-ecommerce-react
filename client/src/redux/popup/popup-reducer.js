import popupActionTypes from './popup-types';

const INITIAL_STATE = {
   emptyCartHidden: true
}

const popupReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      // Would specify hidden instead of toggle to ensure close button will only close
      case popupActionTypes.EMPTY_CART_POPUP_MOUNT:
         return {
            ...state,
            emptyCartHidden: false
         }
      case popupActionTypes.EMPTY_CART_POPUP_UNMOUNT:
         return {
            ...state,
            emptyCartHidden: true
         }
      default: 
      return state
   }
};

export default popupReducer;