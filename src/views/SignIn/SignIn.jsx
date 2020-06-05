import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  form: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  formWrapper: {
    height: "100%",
  },
  formInput: {
    flexGrow: 0,
    margin: theme.spacing(1),
  },
}));
function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();
  return (
    <form className={classes.form}>
      <Grid
        className={classes.formWrapper}
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h2" color="primary" gutterBottom>
            Sign In
          </Typography>
        </Grid>
        <Grid item sm className={classes.formInput}>
          <TextField
            label="Email"
            variant="outlined"
            id="email"
            name="email"
            type="text"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Grid>
        <Grid item sm className={classes.formInput}>
          <TextField
            label="Password"
            variant="outlined"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default SignIn;
