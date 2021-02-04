import { categoryActionTypes } from "./category.types";

const INITITIAL_STATE = {
  currentCategory: null,
  filter: {
    category: null,
    subCategory: null,
    color: null,
    priceMin: null,
    priceMax: null,
    brand: null,
  },
};

const categoryReducer = (state = INITITIAL_STATE, action) => {
  switch (action.type) {
    case categoryActionTypes.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
