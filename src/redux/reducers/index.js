import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";

const rootReducer = combineReducers({
  authReducer,
  firebaseReducer,
});

export default rootReducer;
