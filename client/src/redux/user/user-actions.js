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

export const actionFailed = error => ({
   type: userActionTypes.ACTION_FAILED,
   payload: error
});

export const signOutStart = () => ({
   type: userActionTypes.SIGNOUT_START
});

export const signOutSuccess = () => ({
   type: userActionTypes.SIGNOUT_SUCCESS
});

// signUpCredential requires { displayName, email, password }
export const signUpStart = (signUpCredential) => ({
   type: userActionTypes.SIGNUP_START,
   payload: signUpCredential
});

export const signUpSuccess = (user, additionalData) => ({
   type: userActionTypes.SIGNUP_SUCCESS,
   payload: {user, additionalData}
});

export const checkUserSession = () => ({
   type: userActionTypes.CHECK_USER_SESSION
});