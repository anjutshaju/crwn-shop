import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';
<<<<<<< HEAD
import rootSaga from "./root-saga";
=======
import rootSaga from './root-saga';
>>>>>>> bdc0992253a35bbcfb18c4077c88978d8584e734

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
<<<<<<< HEAD
    middlewares.push(logger);
=======
  middlewares.push(logger);
>>>>>>> bdc0992253a35bbcfb18c4077c88978d8584e734
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

<<<<<<< HEAD
export default { store, persistStore };
=======
export default { store, persistStore };
>>>>>>> bdc0992253a35bbcfb18c4077c88978d8584e734
