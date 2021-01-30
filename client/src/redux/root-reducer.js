import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import directoryReducer from './directory/directory-reducer';
import shopReducer from './shop/shop-reducer';
import popupReducer from './popup/popup-reducer';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart']
}

// Originally export default combineReducers
const rootReducer = combineReducers({
   user: userReducer,
   cart: cartReducer,
   directory: directoryReducer,
   shop: shopReducer,
   popup: popupReducer
});

export default persistReducer(persistConfig, rootReducer);