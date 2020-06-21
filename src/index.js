import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import styled from "styled-components";

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

const root = document.getElementById("root");
ReactDOM.render(
  <>
    <Wrapper>
      <Loader />
    </Wrapper>
  </>,
  root
);

console.log(store.getState());

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <ReduxProvider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>,
    root
  );
});
