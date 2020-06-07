import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";

import "./App.css";

function App() {
  const currentUser = useSelector((state) => state.user);

  useEffect(() => {}, []);
  return (
    <Switch>
      <Route exact path="/" component={SignIn} />
      <Route exact path="/register" component={SignUp} />
    </Switch>
  );
}

export default App;
