import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import categoryReducer from "./categoryReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productsReducer,
  category: categoryReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
