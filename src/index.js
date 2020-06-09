import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/configureStore";
import "./index.css";
import App from "./App";
const store = configureStore();

console.log(store.getState());

ReactDOM.render(
  // <React.StrictMode>
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
