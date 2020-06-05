import React from "react";
import {
  TextField,
  Grid,
  Button,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import { useStyles } from "../../components/assits/styles";

function SignUp() {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    businessName: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

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
        <Paper className={classes.paper}>
          <Grid item>
            <Typography variant="h2" color="primary" gutterBottom>
              Sign Up
            </Typography>
          </Grid>
          <Grid item sm className={classes.formInput}>
            <TextField
              className={classes.textField}
              label="Email"
              variant="outlined"
              id="email"
              name="email"
              type="text"
              value={values.email}
              placeholder="Email"
              onChange={handleChange("email")}
              required
            />
          </Grid>
          <Grid item sm className={classes.formInput}>
            <TextField
              className={classes.textField}
              label="Password"
              variant="outlined"
              id="password"
              name="password"
              type={values.showPassword ? "text" : "password"}
              placeholder="Password"
              value={values.password}
              onChange={handleChange("password")}
              required
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item sm className={classes.formInput}>
            <TextField
              className={classes.textField}
              label="Business Name"
              variant="outlined"
              id="businessName"
              name="businessName"
              type="text"
              placeholder="Business Name"
              value={values.businessName}
              onChange={handleChange("businessName")}
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
        </Paper>
      </Grid>
    </form>
  );
}

export default SignUp;
