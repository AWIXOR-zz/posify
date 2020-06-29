import * as actions from "./actionTypes";

export const addToCart = (item) => ({
  type: actions.ADD_TO_CART,
  payload: item,
});
export const removeFromCart = (id) => ({
  type: actions.REMOVES_FROM_CART,
  id: id,
});
