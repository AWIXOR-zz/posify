import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
// import { createStore } from "redux";
import rootReducer from "./redux/reducers";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import styled from "styled-components";
// import firebase from "firebase/app";
import firebase from "./firebase/firebase.utils";
// import configureStore from "./redux/configureStore";
import initialState from "./redux/reducers/initialState";
import Loader from "./components/UI/Loader/Loader";
import App from "./App";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import "./index.css";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true, // attaches auth is ready promise to store
};
// const store = configureStore();
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;
const store = createStore(
  rootReducer,
  // initialState,
  composeEnhancers(
    // reactReduxFirebase(firebase, rrfConfig),
    // reduxFirestore(firebase),
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
  )
);
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};
const root = document.getElementById("root");
ReactDOM.render(
  <Wrapper>
    <ReduxProvider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </ReduxProvider>
  </Wrapper>,
  root
);

console.log(store.getState().firebase.auth.isLoaded);

// ReactDOM.render(
//   <Wrapper>
//     {store.getState().firebase.auth.isLoaded ? (
//       <ReduxProvider store={store}>
//         <ReactReduxFirebaseProvider {...rrfProps}>
//           <BrowserRouter>
//             <App />
//           </BrowserRouter>
//         </ReactReduxFirebaseProvider>
//       </ReduxProvider>
//     ) : (
//       <Loader />
//     )}
//   </Wrapper>,
//   root
// );
