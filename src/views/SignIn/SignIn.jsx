import React, { useState } from "react";
import { TextField, Grid, Button, Typography } from "@material-ui/core";

import { useStyles } from "../../components/assits/styles";

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
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.formButton}
            endIcon={<i className="material-icons">arrow_forward</i>}
          >
            Submit
          </Button>
        </Grid>
        <Grid item>
          <Typography variant="body2" component="h2" color="textSecondary">
            Don’t have an account? <a href="/register">Create it here</a>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
}

export default SignIn;
