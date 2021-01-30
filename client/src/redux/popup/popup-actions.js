import popupActionTypes from './popup-types';

export const mountEmptyCartPopup = () => ({
   type: popupActionTypes.EMPTY_CART_POPUP_MOUNT
});

export const unmountEmptyCartPopup = () => ({
   type: popupActionTypes.EMPTY_CART_POPUP_UNMOUNT
});