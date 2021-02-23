import { categoryActionTypes } from "./category.types";

export const setCurrentCategory = (category) => ({
  type: categoryActionTypes.SET_CURRENT_CATEGORY,
  payload: category,
});

export const setShopItems = (items) => ({
  type: categoryActionTypes.SET_SHOP_ITEMS,
  payload: items,
});

export const setSubCategories = (cat) => ({
  type: categoryActionTypes.SET_SUB_CATEGORIES,
  payload: cat,
});

export const setSubCatFilter = (cat) => ({
  type: categoryActionTypes.SET_SUBCAT_FILTER,
  payload: cat,
});

export const setSizePriceFilter = (cat) => ({
  type: categoryActionTypes.SET_PRIZESIZE_FILTER,
  payload: cat,
});

export const setCurrentItem = (item) => ({
  type: categoryActionTypes.SET_CURRENT_ITEM,
  payload: item,
});
