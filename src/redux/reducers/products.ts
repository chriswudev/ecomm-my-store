import { produce } from 'immer';

import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_SUCCESS,
} from '../actions/products';

import { Product, ProductsState } from '../../types/products';

const initialState: ProductsState = {
  products_loading: false,
  products_error: false,
  products: [],
  popular_products: [],
};

interface ProductsAction {
  type: 'GET_PRODUCTS_REQUEST' | 'GET_PRODUCTS_SUCCESS' | 'GET_PRODUCTS_ERROR';
  payload: Product[];
}

const productsReducer = (state = initialState, action: ProductsAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case GET_PRODUCTS_REQUEST:
        draft.products_loading = true;
        break;

      case GET_PRODUCTS_SUCCESS:
        const popular_products = action.payload.filter(
          (product: Product) => product.rating.rate >= 4.5
        );
        draft.products_loading = false;
        draft.products = action.payload;
        draft.popular_products = popular_products;
        break;

      case GET_PRODUCTS_ERROR:
        draft.products_error = true;
        draft.products_loading = false;
        break;

      default:
        return draft;
    }
  });

export default productsReducer;
