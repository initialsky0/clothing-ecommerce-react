import userActionTypes from './user-types';
import { signInSuccess, 
         signOutSuccess, 
         signUpSuccess, 
         actionFailed } from './user-actions';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { updateCartSignInStart } from '../cart/cart-actions';
import { auth, 
         createUserProfileDocument, 
         googleProvider,
         getCurrentUser } from '../../firebase/firebase-util';

export function* getSnapshotFromUserAuth(userAuth, manual = false, additionalData) {
   try{
      const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
      const userSnapshot = yield userRef.get();
      yield put(signInSuccess({
         id: userSnapshot.id,
         ...userSnapshot.data()
      }));
      // If user sign in manually, sync the cart with DB
      if(manual) yield put(updateCartSignInStart());
   } catch(error) {
      yield put(actionFailed(error));
   }
};

export function* signInWithGoogle() {
   try {
      const { user } = yield auth.signInWithPopup(googleProvider);
      yield getSnapshotFromUserAuth(user, true);
   } catch(error) {
      yield put(actionFailed(error));
      yield alert('Login unsuccessful, please check your login credential and try again.');
   }
};

export function* onGoogleSignInStart() {
   yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle);
}

export function* signInWithEmail({payload: { email, password }}) {
   try {
      const { user } = yield auth.signInWithEmailAndPassword(email, password);
      yield getSnapshotFromUserAuth(user, true);
   } catch(error) {
      yield put(actionFailed(error));
      yield alert('Login unsuccessful, please check your login credential and try again.');
   }
};

export function* onEmailSignInStart() {
   yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
};

export function*  authenticateUser() {
   try {
      const userAuth =  yield getCurrentUser();
      if(!userAuth) return;
      yield getSnapshotFromUserAuth(userAuth);
   } catch (error) {
      yield put(actionFailed(error));
   }
};

export function* onCheckUserSession() {
   yield takeLatest(userActionTypes.CHECK_USER_SESSION, authenticateUser);
}

export function* signOutUser() {
   try {
      yield auth.signOut();
      yield put(signOutSuccess());
   } catch (error) {
      yield put(actionFailed(error));
   }
};

export function* onSignOutStart() {
   yield takeLatest(userActionTypes.SIGNOUT_START, signOutUser);
}

export function* signUpUser({payload: {displayName, email, password}}) {
   try {
      const { user } = yield auth.createUserWithEmailAndPassword(email, password);
      yield put(signUpSuccess(user, {displayName}));
   } catch (error) {
      yield put(actionFailed(error));
   }
}

export function* onSignUpStart() {
   yield takeLatest(userActionTypes.SIGNUP_START, signUpUser);
}

export function* signInAfterSignUp({payload: {user, additionalData}}) {
   try {
      yield call(getSnapshotFromUserAuth, user, true, additionalData );
   } catch (error) {
      yield put(actionFailed(error));
   }
}

export function* onSignUpSuccess() {
   yield takeLatest(userActionTypes.SIGNUP_SUCCESS, signInAfterSignUp);
}


export function* userSagas() {
   yield all([
      call(onGoogleSignInStart),
      call(onEmailSignInStart),
      call(onCheckUserSession),
      call(onSignOutStart),
      call(onSignUpStart), 
      call(onSignUpSuccess)
   ]);
};