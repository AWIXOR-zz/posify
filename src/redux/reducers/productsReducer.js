import initialState from "./initialState";
import * as actions from "../actions/actionTypes";
import produce from "immer";

const productsReducer = (state = initialState.auth, { type, payload }) => {
  switch (type) {
    case actions.ADD_PRODUCT:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case actions.REMOVE_PRODUCT:
      return produce(state, (draft) => {
        draft.loading = false;
      });
    case actions.EDIT_PRODUCT:
      return produce(state, (draft) => {
        draft.error = payload;
      });
    default:
      return state;
  }
};
export default productsReducer;
