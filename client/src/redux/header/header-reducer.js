import headerActionTypes from './header-types';

const INITIAL_STATE = {
   headerFixed: false,
   headerHidden: false
}

const headerReducer = (state = INITIAL_STATE, action) => {
   switch(action.type) {
      case headerActionTypes.TOGGLE_HEADER_FIXED:
         return {
            ...state,
            headerFixed: !state.headerFixed
         }
      case headerActionTypes.SET_HEADER_HIDDEN:
         return {
            ...state,
            headerHidden: true
         }
      case headerActionTypes.SET_HEADER_SHOW:
         return {
            ...state,
            headerHidden: false
         }
      default:
         return state;
   }
}

export default headerReducer;