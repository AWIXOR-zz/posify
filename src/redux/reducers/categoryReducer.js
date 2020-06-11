import initialState from "./initialState";
import * as actions from "../actions/actionTypes";
import produce from "immer";

const categoryReducer = (
  state = initialState.categories,
  { type, payload }
) => {
  switch (type) {
    case actions.ADD_CATEGORY:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case actions.REMOVE_CATEGORY:
      return produce(state, (draft) => {
        draft.loading = false;
      });
    case actions.EDIT_CATEGORY:
      return produce(state, (draft) => {
        draft.error = payload;
      });
    default:
      return state;
  }
};
export default categoryReducer;
