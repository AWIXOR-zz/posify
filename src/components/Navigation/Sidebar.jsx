import React from "react";
import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import { useStyles } from "../../components/assits/styles";
import navbarItems from "../../data/side-nav-items";
import SidebarItem from "./SidebarItem";
import {
  Divider,
  Drawer,
  List,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FavoriteIcon from "@material-ui/icons/Favorite";

function Sidebar({ handleDrawerClose, open }) {
  const classes = useStyles();
  const theme = useTheme();
  const items = navbarItems();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <Typography
          variant="h6"
          component="h6"
          color="primary"
          className={classes.sidebarHeaderP}
        >
          Posify
        </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <Box
        display="flex"
        justifyContent="space-between"
        flexDirection="column"
        height="100%"
      >
        <List>
          {items.map((item, idx) => (
            <SidebarItem key={idx} item={item} />
          ))}
        </List>
        {open ? (
          <div className={classes.sidebarFooter}>
            <Typography
              className={classes.sidebarFooterP}
              component="p"
              color="textSecondary"
            >
              Made with <FavoriteIcon fontSize="small" color="disabled" />
              by Awixor
            </Typography>
          </div>
        ) : null}
      </Box>
    </Drawer>
  );
}

export default Sidebar;
