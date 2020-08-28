import initialState from "./initialState";
import * as actions from "../actions/actionTypes";
import produce from "immer";

const databaseReducer = (state = initialState.database, { type, payload }) => {
  switch (type) {
    case actions.INITIALISE_DATABASE_START:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case actions.INITIALISE_DATABASE_SUCCESS:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = false;
      });
    case actions.INITIALISE_DATABASE_FAIL:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = payload;
      });

    default:
      return state;
  }
};
export default databaseReducer;
