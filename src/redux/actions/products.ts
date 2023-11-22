import { Dispatch } from 'redux';
import { Product } from '../../types/products';

export const GET_PRODUCTS_REQUEST = 'GET_PRODUCTS_REQUEST';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';

const getProductsRequest = () => ({ type: GET_PRODUCTS_REQUEST });

const getProductsSuccess = (products: Product[]) => ({
  type: GET_PRODUCTS_SUCCESS,
  payload: products,
});

const getProductsError = () => ({ type: GET_PRODUCTS_ERROR });

export const fetchProducts = () => {
  return async (dispatch: Dispatch) => {
    dispatch(getProductsRequest());
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      dispatch(getProductsSuccess(products));
    } catch (error) {
      dispatch(getProductsError());
    }
  };
};
