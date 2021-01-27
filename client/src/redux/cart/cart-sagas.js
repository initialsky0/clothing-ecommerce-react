import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { selectCartItems } from './cart-selectors';
import { updateCartItem,
         removeCartItem, 
         clearCartItem } from './cart-util';
import cartActionTypes from './cart-types' ;
import userActionTypes from '../user/user-types';
import { firestore,
         getCurrentUser } from '../../firebase/firebase-util';
import { clearCart,
         updateCartStart,
         updateCartSuccess,
         updateCartFailed } from './cart-actions';

export function* updateCartItemsToDB({ payload : { cartItems, item } }) {
   try {
      // getting user auth for access, create userRef, and take snapshot
      const userAuth =  yield getCurrentUser();
      const userRef = yield firestore.doc(`users/${userAuth.uid}/cartItems/${item.id}`);
      const snapshot = yield userRef.get();
      // Create item in DB if doesn't exist
      if(!snapshot.exists)  yield userRef.set({  ...item });
      // getting item quantity for update
      const quantityUpdate = yield cartItems.reduce((acc, cartItem) => 
         (cartItem.id === item.id ? acc + cartItem.quantity : acc),
         0
      );
      // Update quantity, if 0 delete the item from DB
      if(quantityUpdate > 0) {
         yield userRef.update({ quantity: quantityUpdate });
      } else {
         yield userRef.delete();
      }
      // Update success
      yield put(updateCartSuccess(cartItems));
   } catch (error) {
      yield put(updateCartFailed(error));
   }
}

export function* onUpdateCartItemsStart() {
   yield takeLatest(cartActionTypes.UPDATE_CART_START, updateCartItemsToDB);
}

export function* addItemToCart({ payload }) {
   const cartItems = yield select(selectCartItems);
   const newCartItems = yield updateCartItem(cartItems, payload);
   yield put(updateCartStart(newCartItems, payload));
}

export function* onAddItem() {
   yield takeLatest(cartActionTypes.ADD_ITEM, addItemToCart);
}

export function* removeItemToCart({ payload }) {
   const cartItems = yield select(selectCartItems);
   const newCartItems = yield removeCartItem(cartItems, payload);
   yield put(updateCartStart(newCartItems, payload));
}

export function* onRemoveItem() {
   yield takeLatest(cartActionTypes.REMOVE_ITEM, removeItemToCart);
}

export function* clearItemToCart({ payload }) {
   const cartItems = yield select(selectCartItems);
   const newCartItems = yield clearCartItem(cartItems, payload);
   yield put(updateCartStart(newCartItems, payload));
}

export function* onClearItem() {
   yield takeLatest(cartActionTypes.CLEAR_ITEM_FROM_CART, clearItemToCart);
}

export function* clearCartOnSignOut() {
   yield put(clearCart());
};

export function* onSignOutSuccess() {
   yield takeLatest(userActionTypes.SIGNOUT_SUCCESS, clearCartOnSignOut);
};

export function* cartSagas() {
   yield all([
      call(onUpdateCartItemsStart),
      call(onAddItem),
      call(onRemoveItem),
      call(onClearItem),
      call(onSignOutSuccess)
   ]);
};