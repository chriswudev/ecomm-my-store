import { Product } from '../../types/products';

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS';
export const UPDATE_SORT = 'UPDATE_SORT';
export const SORT_PRODUCTS = 'SORT_PRODUCTS';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const FILTER_PRODUCTS = 'FILTER_PRODUCTS';

export const loadProducts = (payload: Product[]) => ({
  type: LOAD_PRODUCTS,
  payload,
});

export const updateFilters = (name: string, value: string) => {
  return { type: UPDATE_FILTERS, payload: { name, value } };
};

export const filterProducts = () => ({ type: FILTER_PRODUCTS });

export const updateSort = (value: string) => {
  return { type: UPDATE_SORT, payload: value };
};

export const sortProducts = () => ({ type: SORT_PRODUCTS });
