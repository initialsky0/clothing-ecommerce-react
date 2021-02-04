import headerActionTypes from './header-types';

export const toggleHeaderFixed = () => ({
   type: headerActionTypes.TOGGLE_HEADER_FIXED
});

export const setHeaderHidden = () => ({
   type: headerActionTypes.SET_HEADER_HIDDEN
});

export const setHeaderShow = () => ({
   type: headerActionTypes.SET_HEADER_SHOW
});