import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Input from "../../components/UI/Input/Input";
import Message from "../../components/UI/Message/Message";
import {
  Grid,
  Button,
  CircularProgress,
  Typography,
  Paper,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import { useStyles } from "../../components/assits/styles";

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
  const [password, showPassword] = React.useState({
    showPassword: false,
  });
  console.log("sgsdgdsg");

  const handleClickShowPassword = () => {
    showPassword({ showPassword: !password.showPassword });
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
        <Form className={classes.form}>
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
                  component={Input}
                  className={classes.textField}
                  label="Email"
                  variant="outlined"
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Email"
                  required
                />
              </Grid>
              <Grid item sm className={classes.formInput}>
                <Field
                  component={Input}
                  label="Password"
                  variant="outlined"
                  id="password"
                  name="password"
                  type={password.showPassword ? "text" : "password"}
                  placeholder="Password"
                  required
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {password.showPassword ? (
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
                {!loading ? (
                  <Button
                    disabled={!isValid || isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.formButton}
                    endIcon={<i className="material-icons">arrow_forward</i>}
                  >
                    Sign In
                  </Button>
                ) : (
                  <CircularProgress />
                )}
              </Grid>
              <Grid item>
                <Message error show={error}>
                  {error}
                </Message>
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
        </Form>
      )}
    </Formik>
  );
};

export default SignIn;
