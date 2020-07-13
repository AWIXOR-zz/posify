import initialState from "./initialState";
import * as actions from "../actions/actionTypes";
import produce from "immer";

const categoryReducer = (state = initialState.category, { type, payload }) => {
  switch (type) {
    case actions.ADD_CATEGORY_START:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case actions.ADD_CATEGORY_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = false;
      });
    case actions.ADD_CATEGORY_FAIL:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload;
      });
    case actions.DELETE_CATEGORY_START:
      return produce(state, (draft) => {
        draft.deleteCategory.loading = true;
      });
    case actions.DELETE_CATEGORY_SUCCESS:
      return produce(state, (draft) => {
        draft.deleteCategory.loading = false;
        draft.deleteCategory.error = false;
      });
    case actions.DELETE_CATEGORY_FAIL:
      return produce(state, (draft) => {
        draft.deleteCategory.loading = false;
        draft.deleteCategory.error = payload;
      });
    case actions.SET_CATEGORIES:
      return produce(state, (draft) => {
        draft.items = payload;
      });
    default:
      return state;
  }
};
export default categoryReducer;
