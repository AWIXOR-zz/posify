import initialState from "./initialState";
import * as actions from "../actions/actionTypes";
import produce from "immer";

const productsReducer = (state = initialState.product, { type, payload }) => {
  switch (type) {
    case actions.ADD_PRODUCT_START:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case actions.ADD_PRODUCT_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = false;
      });
    case actions.ADD_PRODUCT_FAIL:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload;
      });
    case actions.DELETE_PRODUCT_START:
      return produce(state, (draft) => {
        draft.deleteProduct.loading = true;
      });
    case actions.DELETE_PRODUCT_SUCCESS:
      return produce(state, (draft) => {
        draft.deleteProduct.loading = false;
        draft.deleteProduct.error = false;
      });
    case actions.DELETE_PRODUCT_FAIL:
      return produce(state, (draft) => {
        draft.deleteProduct.loading = false;
        draft.deleteProduct.error = payload;
      });
    default:
      return state;
  }
};
export default productsReducer;
