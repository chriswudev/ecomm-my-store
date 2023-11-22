import { combineReducers } from 'redux';

import productsReducer from './products';
import filterReducer from './filter';
import cartReducer from './cart';

const rootReducer = combineReducers({
  productsState: productsReducer,
  filterState: filterReducer,
  cartState: cartReducer,
});

export default rootReducer;
