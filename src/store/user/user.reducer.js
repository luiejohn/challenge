import { userActionTypes } from "./user.types";

const INITITIAL_STATE = {
  currentUser: null,
  wishList: [],
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

    default:
      return state;
  }
};

export default userReducer;
