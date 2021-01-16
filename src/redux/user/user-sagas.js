import userActionTypes from './user-types';
import { signInSuccess, signInFailed } from './user-actions';
import { takeLatest, put, all, call } from 'redux-saga/effects';
import { auth, createUserProfileDocument, googleProvider } from '../../firebase/firebase-util';

export function* getSnapshotFromUserAuth(userAuth) {
   try{
      const userRef = yield call(createUserProfileDocument, userAuth);
      const userSnapshot = yield userRef.get();
      yield put(signInSuccess({
         id: userSnapshot.id,
         ...userSnapshot.data()
      }));
   } catch(error) {
      yield put(signInFailed(error));
   }
}

export function* signInWithGoogle() {
   try {
      const { user } = yield auth.signInWithPopup(googleProvider);
      yield getSnapshotFromUserAuth(user);
   } catch(error) {
      yield put(signInFailed(error));
   }
}

export function* onGoogleSignInStart() {
   yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signInWithGoogle)
}

export function* signInWithEmail({payload: { email, password }}) {
   try {
      const { user } = yield auth.signInWithEmailAndPassword(email, password);
      yield getSnapshotFromUserAuth(user);
   } catch(error) {
      yield put(signInFailed(error));
   }
}

export function* onEmailSignInStart() {
   yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signInWithEmail);
}

export function* userSagas() {
   yield all([
      call(onGoogleSignInStart),
      call(onEmailSignInStart),
   ]);
}