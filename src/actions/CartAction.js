import { ADD_CART_ITEM, REMOVE_CART_ITEM } from './ActionConstants';

export const addCartItem = item => {
  return {
    type: ADD_CART_ITEM,
    data: item
  };
};

export const removeCartItem = item => {
  return {
    type: REMOVE_CART_ITEM,
    data: item
  };
};
