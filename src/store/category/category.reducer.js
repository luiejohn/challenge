import { categoryActionTypes } from "./category.types";

const INITITIAL_STATE = {
  currentCategory: null,
  subCategories: null,
  filter: {
    category: null,
    subCategory: null,
    size: "",
    color: null,
    price: [0, 100],
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
        filter: {
          ...state.filter,
          category: action.payload,
        },
      };
    case categoryActionTypes.SET_SUB_CATEGORIES:
      return {
        ...state,
        subCategories: action.payload,
      };
    case categoryActionTypes.SET_SUBCAT_FILTER:
      return {
        ...state,
        filter: {
          ...state.filter,
          subCategory: action.payload,
        },
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
