import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Message from "../../components/UI/Message/Message";
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

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The passoword is required.")
    .min(8, "Too short."),
});

const SignIn = ({ login, loading, error, cleanUp }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        console.log("thjings");
      }}
    >
      {({ isSubmitting, isValid }) => (
        <form className={classes.form}>
          {console.log(isSubmitting, isValid)}
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
                  Sign In
                </Typography>
              </Grid>
              <Grid item sm className={classes.formInput}>
                <Field
                  as={TextField}
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
                <Field
                  as={TextField}
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
                          {values.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item>
                <Button
                  disabled={!isValid || isSubmitting}
                  // loading={loading ? "Logging in..." : null}
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.formButton}
                  endIcon={<i className="material-icons">arrow_forward</i>}
                >
                  Sign in
                </Button>
              </Grid>
              <Grid item>
                <MessageWrapper>
                  <Message error show={error}>
                    {error}
                  </Message>
                </MessageWrapper>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  component="h2"
                  color="textSecondary"
                >
                  Don’t have an account? <a href="/register">Create it here</a>
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default SignIn;
