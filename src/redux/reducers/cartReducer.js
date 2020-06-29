import initialState from "./initialState";
import * as actions from "../actions/actionTypes";
import produce from "immer";

const cartReducer = (state = initialState.cart, { type, payload, id }) => {
  switch (type) {
    case actions.ADD_TO_CART:
      return produce(state, (draft) => {
        draft.items.push(payload);
      });
    case actions.REMOVES_FROM_CART:
      return produce(state, (draft) => {
        delete draft.items[id - 1];
      });

    default:
      return state;
  }
};
export default cartReducer;
