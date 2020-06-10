import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/layout/Layout";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import Logout from "./views/Logout/Logout";
import Test from "./views/test/Test";
import Sales from "./views/Dashboard/Sales";
import Dashboard from "./views/Dashboard/Dashboard";
import "./App.css";

function App() {
  const { uid } = useSelector((state) => state.firebase.auth);
  const loggedIn = uid ? true : null;
  let routes;
  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/sales" component={Sales} />
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Redirect to="/login" />
      </Switch>
    );
  }
  return <Layout>{routes}</Layout>;
}

export default App;
