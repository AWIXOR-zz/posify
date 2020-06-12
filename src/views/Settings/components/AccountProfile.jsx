import React from "react";
import clsx from "clsx";
import * as actions from "../../../redux/actions/authActions";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Message from "../../../components/UI/Message/Message";

import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  CircularProgress,
  Typography,
  Divider,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  details: {
    display: "flex",
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  nameColor: {
    color: "#34495e",
  },
}));

const AccountProfile = ({ profile }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const { deleteUser } = actions;
  const { loading, error } = useSelector((state) => state.auth.deleteUser);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const { fullName, businessName } = profile;

  return (
    <Card className={clsx(classes.root)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h4" className={classes.nameColor}>
              {fullName}
            </Typography>
            <Typography gutterBottom color="textSecondary" variant="body1">
              LC. {businessName}
            </Typography>
          </div>
          <Avatar className={classes.avatar} />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button
          color="secondary"
          variant="text"
          onClick={() => handleClickOpen()}
        >
          Delete Account
        </Button>
      </CardActions>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you wanna delete this account?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            After confirming, you will no longer have access to this account and
            all of your data will be deleted!
          </DialogContentText>

          <Message error show={error}>
            {error}
          </Message>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" disabled={loading}>
            Cencel
          </Button>
          {!loading ? (
            <Button
              onClick={() => dispatch(deleteUser())}
              color="primary"
              autoFocus
            >
              Confirm
            </Button>
          ) : (
            <CircularProgress />
          )}
        </DialogActions>
      </Dialog>
    </Card>
  );
};

export default AccountProfile;
