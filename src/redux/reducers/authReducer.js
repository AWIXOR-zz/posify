import initialState from "./initialState";
import * as actions from "../actions/actionTypes";
import produce from "immer";

const authReducer = (state = initialState.auth, { type, payload }) => {
  switch (type) {
    //Authentication
    case actions.AUTH_START:
      return produce(state, (draft) => {
        draft.loading = true;
      });
    case actions.AUTH_END:
      return produce(state, (draft) => {
        draft.loading = false;
      });
    case actions.AUTH_FAIL:
      return produce(state, (draft) => {
        draft.error = payload;
      });
    case actions.AUTH_SUCCESS:
      return produce(state, (draft) => {
        draft.error = false;
      });

    //Clean error and loading
    case actions.CLEAN_UP:
      return produce(state, (draft) => {
        draft.error = false;
        draft.loading = false;
      });

    //Verify email
    case actions.VERIFY_START:
      return produce(state, (draft) => {
        draft.verifyEmail.loading = true;
      });
    case actions.VERIFY_SUCCESS:
      return produce(state, (draft) => {
        draft.verifyEmail.loading = false;
        draft.verifyEmail.error = false;
      });
    case actions.VERIFY_FAIL:
      return produce(state, (draft) => {
        draft.verifyEmail.loading = false;
        draft.verifyEmail.error = payload;
      });

    //Recover password
    case actions.RECOVERY_START:
      return produce(state, (draft) => {
        draft.recoverPassword.loading = true;
      });
    case actions.RECOVERY_SUCCESS:
      return produce(state, (draft) => {
        draft.recoverPassword.loading = false;
        draft.recoverPassword.error = false;
      });
    case actions.RECOVERY_FAIL:
      return produce(state, (draft) => {
        draft.recoverPassword.loading = false;
        draft.recoverPassword.error = payload;
      });

    //Profile Edit
    case actions.PROFILE_EDIT_START:
      return produce(state, (draft) => {
        draft.profileEdit.loading = true;
      });
    case actions.PROFILE_EDIT_SUCCESS:
      return produce(state, (draft) => {
        draft.profileEdit.loading = false;
        draft.profileEdit.error = false;
      });
    case actions.PROFILE_EDIT_FAIL:
      return produce(state, (draft) => {
        draft.profileEdit.loading = false;
        draft.profileEdit.error = payload;
      });

    //Default
    default:
      return state;
  }
};
export default authReducer;
