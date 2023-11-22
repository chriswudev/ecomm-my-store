import { produce } from 'immer';
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM,
  CLEAR_CART,
} from '../actions/cart';

import { CartState } from '../../types/cart';
import { Product } from '../../types/products';

const initialState: CartState = {
  cart: [],
  total_price: 0,
  total_items: 0,
};

interface AddCartAction {
  type: 'ADD_TO_CART';
  payload: {
    product: Product;
    amount: number;
  };
}

interface ToggleCartAction {
  type: 'TOGGLE_CART_ITEM';
  payload: {
    id: number;
    value: 'inc' | 'dec';
  };
}

interface RemoveCartAction {
  type: 'REMOVE_CART_ITEM';
  payload: number;
}

interface ClearCartAction {
  type: 'CLEAR_CART';
}

type CartAction =
  | AddCartAction
  | ToggleCartAction
  | RemoveCartAction
  | ClearCartAction;

const cartReducer = (state = initialState, action: CartAction) =>
  produce(state, (draft) => {
    switch (action.type) {
      case ADD_TO_CART:
        const { product, amount } = action.payload;
        const cartItemIndex = draft.cart.findIndex(
          (item) => item.id === product.id
        );
        if (cartItemIndex !== -1) {
          draft.cart[cartItemIndex].amount += amount;
        } else {
          const { id, title, image, price } = product;
          draft.cart.push({ id, title, price, image, amount });
        }
        break;

      case TOGGLE_CART_ITEM:
        const { id, value } = action.payload;
        const tempItem = draft.cart.find((item) => item.id === id);

        if (tempItem) {
          if (value === 'inc') {
            let newAmount = tempItem.amount + 1;
            tempItem.amount = newAmount;
          }
          if (value === 'dec') {
            let newAmount = tempItem.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            tempItem.amount = newAmount;
          }
        }
        break;

      case REMOVE_CART_ITEM:
        const index = draft.cart.findIndex(
          (item) => item.id === action.payload
        );
        if (index !== -1) {
          draft.cart.splice(index, 1);
        }
        break;

      case CLEAR_CART:
        draft.cart = [];
        break;

      default:
        break;
    }

    const { total_items, total_price } = draft.cart.reduce(
      (total, cartItem) => {
        const { amount, price } = cartItem;
        total.total_items += amount;
        total.total_price += price * amount;

        return total;
      },
      {
        total_price: 0,
        total_items: 0,
      }
    );
    draft.total_items = total_items;
    draft.total_price = total_price;
  });

export default cartReducer;
