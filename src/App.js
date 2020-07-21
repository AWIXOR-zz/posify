import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import "./App.css";
import * as productActions from "./redux/actions/productsActions";
import * as categoryActions from "./redux/actions/categoryActions";
import * as salesActions from "./redux/actions/salesActions";

import routes from "./routes";
function App() {
  const dispatch = useDispatch();
  const { uid, emailVerified } = useSelector((state) => state.firebase.auth);
  const loggedIn = uid ? true : null;
  const userId = useSelector((state) => state.firebase.auth.uid);
  const invetory = useSelector((state) => state.firestore.data.invetory);
  const requested = useSelector((state) => state.firestore.status.requested);
  const dataLoaded = Object.values(requested).some((a) => a === true);
  const { setProducts } = productActions;
  const { setCategories } = categoryActions;
  const { setSales } = salesActions;
  if (dataLoaded) {
    var A1 = invetory[userId].products;
    let customProducts = [];
    for (let i = 0; i < A1.length; i++) {
      const { name, id, price, soldBy, category, details } = A1[i];
      // let A2 = [...A1[i]];
      customProducts[i] = {
        id,
        name,
        price,
        Qte: 1,
        soldBy,
        category,
        details,
      };
    }

    // this.collectionPages.push(collectionPageDbModel);
    dispatch(setProducts(customProducts));
    dispatch(setCategories(invetory[userId].categories));
    dispatch(setSales(invetory[userId].sales));
  }
  useFirestoreConnect([
    {
      collection: "invetory",
      doc: userId,
    },
  ]);
  if (loggedIn && emailVerified) {
    return (
      <Switch>
        {routes.LoggedIn.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props) => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              }}
            />
          );
        })}
        <Redirect to="/" />
      </Switch>
    );
  } else if (loggedIn && !emailVerified) {
    return (
      <Switch>
        {routes.NotVerified.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props) => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              }}
            />
          );
        })}
        <Redirect to="/verify-email" />
      </Switch>
    );
  } else {
    return (
      <Switch>
        {routes.NotLoggedIn.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={(props) => {
                return (
                  <route.layout {...props}>
                    <route.component {...props} />
                  </route.layout>
                );
              }}
            />
          );
        })}
        <Redirect to="/sign-in" />
      </Switch>
    );
  }
}

export default App;
