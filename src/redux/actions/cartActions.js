import * as actions from "./actionTypes";

export const addToCart = (item) => ({
  type: actions.ADD_TO_CART,
  payload: item,
});
export const removeFromCart = (item) => ({
  type: actions.REMOVES_FROM_CART,
  payload: item,
});
