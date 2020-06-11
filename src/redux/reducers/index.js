import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import categoryReducer from "./categoryReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  product: productsReducer,
  category: categoryReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
