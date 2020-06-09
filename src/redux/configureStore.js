import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import firebase from "../firebase/firebase.utils";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";

// import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import rootReducer from "./reducers";

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true, // attaches auth is ready promise to store
};

export default function configureStore(initialState) {
  const composeEnhancers =
    process.env.NODE_ENV === "development"
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
      : compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      reactReduxFirebase(firebase, rrfConfig),
      reduxFirestore(firebase),
      applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
    )
  );
}
