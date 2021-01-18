import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootSaga from './root-saga';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// Only run during development
if(process.env.NODE_ENV === 'development') {
   middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
