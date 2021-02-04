import { cartActionTypes } from "./cart.types";

export const setTotalItemCount = (number) => ({
  type: cartActionTypes.SET_ITEM_COUNT,
  payload: number,
});

export const setTotalPrice = (number) => ({
  type: cartActionTypes.SET_TOTAL_PRICE,
  payload: number,
});

export const addCartItem = (items) => ({
  type: cartActionTypes.ADD_CART_ITEM,
  payload: items,
});

export const removeCartItem = (items) => {
  return {
    type: cartActionTypes.REMOVE_CART_ITEM,
    payload: items,
  };
};

export const updateCartItem = (items) => ({
  type: cartActionTypes.UPDATE_CART_ITEM,
  payload: items,
});
