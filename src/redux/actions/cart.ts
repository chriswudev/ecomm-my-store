import { Product } from '../../types/products';

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const TOGGLE_CART_ITEM = 'TOGGLE_CART_ITEM';
export const CLEAR_CART = 'CLEAR_CART';

export const addToCart = (product: Product, amount: number = 1) => ({
  type: ADD_TO_CART,
  payload: { product, amount },
});

export const toggleAmount = (id: number, value: string) => ({
  type: TOGGLE_CART_ITEM,
  payload: { id, value },
});

export const removeFromCart = (id: number) => ({
  type: REMOVE_CART_ITEM,
  payload: id,
});

export const clearCart = () => ({ type: CLEAR_CART });
