import { all, call, takeLatest, put, select } from 'redux-saga/effects';
import { selectCartItems } from './cart-selectors';
import { updateCartItem,
         removeCartItem, 
         clearCartItem,
         updateItemToDB, 
         handleRemoteLocalCartItems } from './cart-util';
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
      // getting user auth for access, create userCartItemsRef
      const userAuth =  yield getCurrentUser();
      if(userAuth) {
         const cartItemsRef = yield firestore.doc(`users/${userAuth.uid}/cartItems/${item.id}`);
         // update item to DB
         yield call(updateItemToDB, cartItemsRef, cartItems, item);
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

export function* updateCartOnSignIn() {
   try {
      // Local cartItems
      const localCartItems = yield select(selectCartItems);
      // Remote cartItems
      const userAuth =  yield getCurrentUser();
      const cartRef = yield firestore.collection(`users/${userAuth.uid}/cartItems`);
      // Handle remote and local cartItems to update
      const cartItems = yield call(handleRemoteLocalCartItems, cartRef, localCartItems);
      // console.log(remoteCartItems.size);
      yield put(updateCartSuccess(cartItems));
   } catch (error) {
      yield put(updateCartFailed(error));
   }
}

export function* onSignInSuccess() {
   yield takeLatest(cartActionTypes.UPDATE_CART_ON_SIGN_IN_START, updateCartOnSignIn);
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
      call(onSignInSuccess),
      call(onSignOutSuccess)
   ]);
};