import {
  ADD_CART_ITEM,
  REMOVE_CART_ITEM,
  UPDATE_CART_ITEM
} from '../actions/ActionConstants';

const INTIAL_STATE = {
  cartItem: null,
  isCartDataLoading: true
};

export default function cart(state = INTIAL_STATE, action) {
  console.log('reducer', action);
  switch (action.type) {
    case UPDATE_CART_ITEM: {
      return {
        ...state,
        isStarterLoading: true
      };
    }
    case ADD_CART_ITEM:
      return {
        ...state,
        cartItem: action.data,
        isStarterLoading: false
      };
    case REMOVE_CART_ITEM: {
      return {
        ...state,
        cartItem: action.data,
        isStarterLoading: false
      };
    }
    default:
      return INTIAL_STATE;
  }
}
