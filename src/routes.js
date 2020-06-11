import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout, SimpleLayout } from "./layouts";

// Route Views
import SignIn from "./views/SignIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import Logout from "./views/Logout/Logout";
import Sales from "./views/Dashboard/Sales";
import Items from "./views/Dashboard/Items";
import AllItems from "./components/AllItems/AllItems";
import AllCategories from "./components/AllCategories/AllCategories";
import EditItem from "./components/EditItem/EditItem";

export default {
  LoggedIn: [
    {
      path: "/",
      exact: true,
      layout: DefaultLayout,
      component: () => <Redirect to="/sales" />,
    },
    {
      path: "/sales",
      layout: DefaultLayout,
      component: Sales,
    },
    {
      path: "/items",
      exact: true,
      layout: DefaultLayout,
      component: Items,
    },
    {
      path: "/items/items",
      exact: true,
      layout: DefaultLayout,
      component: AllItems,
    },
    {
      path: "/items/items",
      layout: DefaultLayout,
      component: EditItem,
    },
    {
      path: "/items/categories",
      exact: true,
      layout: DefaultLayout,
      component: AllCategories,
    },
    {
      path: "/items/categories",
      layout: DefaultLayout,
      component: EditItem,
    },
    {
      path: "/logout",
      layout: SimpleLayout,
      component: Logout,
    },
  ],
  NotLoggedIn: [
    {
      path: "/sign-in",
      layout: SimpleLayout,
      component: SignIn,
    },
    {
      path: "/sign-up",
      layout: SimpleLayout,
      component: SignUp,
    },
  ],
};
