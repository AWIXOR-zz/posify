import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Layout from "./components/layout/Layout";
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import Logout from "./views/Logout/Logout";
// import Test from "./views/test/Test";
import Sales from "./views/Dashboard/Sales";
import Items from "./views/Dashboard/Items";
import AllItems from "./components/AllItems/AllItems";
import AllCategories from "./components/AllCategories/AllCategories";
import EditItem from "./components/EditItem/EditItem";
import "./App.css";
// import DisplayItems from "./components/DisplayItems/DisplayItems";

function App() {
  const { uid } = useSelector((state) => state.firebase.auth);
  const loggedIn = uid ? true : null;
  let routes;
  if (loggedIn) {
    routes = (
      <Switch>
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/items/items" component={AllItems} />
        <Route exact path="/items/categories" component={AllCategories} />
        <Route path="/items/items" component={EditItem} />
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
