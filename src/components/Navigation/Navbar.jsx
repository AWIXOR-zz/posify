import React from "react";
import clsx from "clsx";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "../assits/styles";
import UserActions from "./UserActions";
const Navbar = ({ handleDrawerOpen, open }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar className={classes.navbarWraper}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: open,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Mini variant drawer
        </Typography>
        <UserActions />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
