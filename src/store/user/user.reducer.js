import { userActionTypes } from "./user.types";

const INITITIAL_STATE = {
  currentUser: null,
  wishList: [],
  isSignInModal: false,
  isSignUpModal: false,
};

const userReducer = (state = INITITIAL_STATE, action) => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case userActionTypes.GET_WISHLIST:
      return {
        ...state,
        wishList: action.payload,
      };

    case userActionTypes.SET_SIGNIN_MODAL:
      return {
        ...state,
        isSignInModal: action.payload,
      };
    case userActionTypes.SET_SIGNUP_MODAL:
      return {
        ...state,
        isSignUpModal: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
