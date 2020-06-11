import React from "react";
import { useSelector } from "react-redux";

import { CssBaseline } from "@material-ui/core";
import { useStyles } from "../components/assits/styles";

import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Navigation/Sidebar";
const DefaultLayout = ({ children }) => {
  const { uid } = useSelector((state) => state.firebase.auth);
  const loggedIn = uid ? true : null;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <div className={classes.containerAll}>
      <CssBaseline />
      <Navbar
        handleDrawerOpen={handleDrawerOpen}
        open={open}
        loggedIn={loggedIn}
      />
      <Sidebar handleDrawerClose={handleDrawerClose} open={open} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};

export default DefaultLayout;
