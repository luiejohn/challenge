import { cartActionTypes } from "./cart.types";

const INITITIAL_STATE = {
  totalItemCount: 0,
  totalCartPrice: 0,
  items: [],
};

const cartReducer = (state = INITITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.SET_ITEM_COUNT:
      return {
        ...state,
        totalItemCount: action.payload,
      };
    case cartActionTypes.SET_TOTAL_PRICE:
      return {
        ...state,
        totalCartPrice: action.payload,
      };
    case cartActionTypes.ADD_CART_ITEM:
      return {
        ...state,
        items: action.payload,
      };
    case cartActionTypes.REMOVE_CART_ITEM:
      return {
        ...state,
        items: action.payload,
      };
    case cartActionTypes.UPDATE_CART_ITEM:
      return {
        ...state,
        totalItemCount: action.payload.length,
        items: action.payload,
      };

    default:
      return state;
  }
};

export default cartReducer;
