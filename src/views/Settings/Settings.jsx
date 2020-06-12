import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { useSelector } from "react-redux";
import AccountProfile from "./components/AccountProfile";
import AccountDetails from "./components/AccountDetails";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

function Settings() {
  const classes = useStyles();
  const { firebase } = useSelector((state) => state);
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item lg={4} md={6} xl={4} xs={12}>
          <AccountProfile profile={firebase.profile} />
        </Grid>
        <Grid item lg={8} md={6} xl={8} xs={12}>
          <AccountDetails />
        </Grid>
      </Grid>
    </div>
  );
}

export default Settings;
