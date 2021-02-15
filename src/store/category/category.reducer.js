import { categoryActionTypes } from "./category.types";

const INITITIAL_STATE = {
  currentCategory: null,
  subCategories: null,
  filter: {
    category: null,
    subCategory: null,
    color: null,
    priceMin: null,
    priceMax: null,
    brand: null,
  },
  items: [],
  currentItem: null,
};

const categoryReducer = (state = INITITIAL_STATE, action) => {
  switch (action.type) {
    case categoryActionTypes.SET_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.payload,
      };
    case categoryActionTypes.SET_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: action.payload,
      };
    case categoryActionTypes.SET_SHOP_ITEMS:
      return {
        ...state,
        items: [...action.payload],
      };
    case categoryActionTypes.SET_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    default:
      return state;
  }
};

export default categoryReducer;
