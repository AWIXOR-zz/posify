import React, { useState } from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";

import { useStyles } from "../../components/assits/styles";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [businessName, setBusinessName] = useState("");

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
            Sign Up
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
        <Grid item sm className={classes.formInput}>
          <TextField
            label="Business Name"
            variant="outlined"
            id="businessName"
            name="businessName"
            type="text"
            placeholder="Business Name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
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
            By signing up you agree to Posify's{" "}
            <a href="/terms-of-use">Terms of Use</a> and the{" "}
            <a href="/privacy-policy">Privacy Policy</a>
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" component="h2" color="textSecondary">
            Already have an account? <a href="/">Login</a>
          </Typography>
        </Grid>
      </Grid>
    </form>
  );
}

export default SignUp;
