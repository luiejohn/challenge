import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const getUserWishList = (items) => ({
  type: userActionTypes.GET_WISHLIST,
  payload: items,
});

export const setSignInModal = (val) => ({
  type: userActionTypes.SET_SIGNIN_MODAL,
  payload: val,
});

export const setSignUpModal = (val) => ({
  type: userActionTypes.SET_SIGNUP_MODAL,
  payload: val,
});
