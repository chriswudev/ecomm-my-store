import { applyMiddleware, legacy_createStore as createStore } from 'redux';

import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'fake-store-cart',
  storage,
  blacklist: ['productsState', 'filterState'],
  whitelist: ['cartState'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, applyMiddleware(thunk));
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
