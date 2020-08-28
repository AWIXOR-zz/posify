import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from "redux-firestore";

import authReducer from "./authReducer";
import productsReducer from "./productsReducer";
import categoryReducer from "./categoryReducer";
import salesReducer from "./salesReducer.js";
import cartReducer from "./cartReducer";
import databaseReducer from "./databaseReducer";
const rootReducer = combineReducers({
  auth: authReducer,
  database: databaseReducer,
  product: productsReducer,
  category: categoryReducer,
  sales: salesReducer,
  cart: cartReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

export default rootReducer;
