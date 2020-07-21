import initialState from "./initialState";
import * as actions from "../actions/actionTypes";
import produce from "immer";

const salesReducer = (state = initialState.sales, { type, payload }) => {
  switch (type) {
    case actions.ADD_SALES_START:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case actions.ADD_SALES_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = false;
      });
    case actions.ADD_SALES_FAIL:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload;
      });
    default:
      return state;
  }
};
export default salesReducer;
