import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { useSelector, Provider as ReduxProvider } from "react-redux";
import { ReactReduxFirebaseProvider, isLoaded } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import styled from "styled-components";
import firebase from "./firebase/firebase.utils";
import configureStore from "./redux/configureStore";
import Loader from "./components/UI/Loader/Loader";
import App from "./App";
import "./index.css";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const store = configureStore();

// react-redux-firebase config
const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  attachAuthIsReady: true, // attaches auth is ready promise to store
};
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
  if (!isLoaded(auth))
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  return children;
}

const root = document.getElementById("root");
console.log(store.getState());

ReactDOM.render(
  <Wrapper>
    <ReduxProvider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <BrowserRouter>
          <AuthIsLoaded>
            <App />
          </AuthIsLoaded>
        </BrowserRouter>
      </ReactReduxFirebaseProvider>
    </ReduxProvider>
  </Wrapper>,
  root
);
