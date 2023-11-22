import { produce } from 'immer';

import {
  UPDATE_FILTERS,
  UPDATE_SORT,
  FILTER_PRODUCTS,
  SORT_PRODUCTS,
  LOAD_PRODUCTS,
} from '../actions/filter';

import { FilterState, Sort } from '../../types/filter';
import { Product } from '../../types/products';

const initialState: FilterState = {
  filtered_products: [],
  all_products: [],
  sort: 'price-lowest',
  filters: {
    category: 'all',
  },
};

interface ProductAction {
  type: 'LOAD_PRODUCTS' | 'SORT_PRODUCTS' | 'FILTER_PRODUCTS';
  payload: Product[];
}

interface SortAction {
  type: 'UPDATE_SORT';
  payload: Sort;
}

interface FilterAction {
  type: 'UPDATE_FILTERS';
  payload: {
    name: 'category';
    value: keyof FilterState['filters'];
  };
}

type FiltersAction = ProductAction | SortAction | FilterAction;

const filterReducer = (
  state: FilterState = initialState,
  action: FiltersAction
) =>
  produce(state, (draft) => {
    let tempProducts;

    switch (action.type) {
      case LOAD_PRODUCTS:
        draft.all_products = action.payload;
        draft.filtered_products = action.payload;
        break;

      case UPDATE_SORT:
        draft.sort = action.payload;
        break;

      case SORT_PRODUCTS:
        const { sort } = draft;
        tempProducts = [...draft.filtered_products];
        if (sort === 'price-lowest') {
          tempProducts = tempProducts.sort((a, b) => a.price - b.price);
        }
        if (sort === 'price-highest') {
          tempProducts = tempProducts.sort((a, b) => b.price - a.price);
        }
        if (sort === 'name-a') {
          tempProducts = tempProducts.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
        }
        if (sort === 'name-z') {
          tempProducts = tempProducts.sort((a, b) =>
            b.title.localeCompare(a.title)
          );
        }
        draft.filtered_products = tempProducts;
        break;

      case UPDATE_FILTERS:
        draft.filters.category = action.payload.value;
        break;

      case FILTER_PRODUCTS:
        const { category } = draft.filters;
        tempProducts = [...draft.all_products];

        if (category !== 'all') {
          tempProducts = tempProducts.filter(
            (product) => product.category === category
          );
        }

        draft.filtered_products = tempProducts;
        break;

      default:
        break;
    }
  });

export default filterReducer;
