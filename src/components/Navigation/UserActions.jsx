import React from "react";
import {
  Menu,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useStyles } from "../../components/assits/styles";

function UserActions() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const classes = useStyles();
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
      >
        <List>
          <ListItem button disabled>
            <ListItemIcon className={classes.userAcionsBtn}>
              <DeleteIcon color="secondary" />
            </ListItemIcon>
            <ListItemText secondary="Clear ticket" />
          </ListItem>
        </List>
      </Menu>
    </div>
  );
}

export default UserActions;
