import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const getUserWishList = (items) => ({
  type: userActionTypes.GET_WISHLIST,
  payload: items,
});
