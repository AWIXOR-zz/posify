import React from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import * as actions from "../../redux/actions/cartActions";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  fontWeight: {
    fontWeight: 200,
    color: "#E2E2E2",
  },
}));

const CartItem = () => {
  const { removeFromCart } = actions;
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const classes = useStyles();
  return (
    <div>
      {cartItems.length === 0 ? (
        <Typography align="center" className={classes.fontWeight}>
          no items yet
        </Typography>
      ) : (
        <List component="nav" aria-label="main mailbox folders">
          {cartItems.map((item, idx) => (
            <ListItem key={idx}>
              <ListItemIcon color="inherit">
                <Typography variant="h6" className={classes.fontWeight}>
                  {item.Qte} x
                </Typography>
              </ListItemIcon>
              <ListItemText primary={item.name} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <Icon style={{ color: "#fff", fontWeight: 100 }}>clear</Icon>
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
};

export default CartItem;
