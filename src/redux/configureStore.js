import { compose, createStore, applyMiddleware } from "redux";
import { reduxFirestore, getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import firebase from "../firebase/firebase.utils";
import { getFirebase } from "react-redux-firebase";
// import { reduxFirestoregetFirestore } from "redux-firestore";

import rootReducer from "./reducers";

export default function configureStore(initialState) {
  const composeEnhancers =
    process.env.NODE_ENV === "development"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
      reduxFirestore(firebase)
    )
  );
}
