import userActionTypes from './user-types';

export const googleSignInStart = () => ({
   type: userActionTypes.GOOGLE_SIGNIN_START,
});

export const emailSignInStart = credential => ({
   type: userActionTypes.EMAIL_SIGNIN_START,
   payload: credential
});

export const signInSuccess = user => ({
   type: userActionTypes.SIGNIN_SUCCESS,
   payload: user
});

export const signInFailed = error => ({
   type: userActionTypes.SIGNIN_FAILED,
   payload: error
});