import { categoryActionTypes } from "./category.types";

export const setCurrentCategory = (category) => ({
  type: categoryActionTypes.SET_CURRENT_CATEGORY,
  payload: category,
});
