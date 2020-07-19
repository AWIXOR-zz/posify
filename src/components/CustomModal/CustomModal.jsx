import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";

import {
  CircularProgress,
  Typography,
  Divider,
  Button,
  Dialog,
  DialogContent,
  Grid,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  dialog: {
    overflow: "hidden",
  },
}));
function CustomModal({ open, handleClose }) {
  const classes = useStyles();
  const totalToPay = useSelector((state) => state.cart.totalToPay);

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        className={classes.dialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Typography
          className={classes.root}
          variant="h4"
          color="primary"
          align="center"
        >
          Checkout
        </Typography>
        <Divider />
        <DialogContent className={classes.dialog}>
          <Grid container spacing={3}>
            <Grid item md={12} xs={12}>
              <Typography
                variant="h4"
                align="center"
                style={{ fontWeight: 200, marginBottom: "20px" }}
              >
                {(Math.round(totalToPay * 100) / 100).toFixed(2)}{" "}
                <small> MAD</small>
              </Typography>
            </Grid>
            <Grid item md={12} xs={12} container justify="space-between">
              <Button
                onClick={handleClose}
                variant="outlined"
                color="secondary"
                // disabled={loading}
              >
                Cencel
              </Button>

              <Button color="primary" variant="outlined" type="submit">
                Confirm
              </Button>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default CustomModal;
