import React, { useEffect } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Message from "../../components/UI/Message/Message";
import Input from "../../components/UI/Input/Input";
import * as actions from "../../redux/actions/authActions";
import {
  Grid,
  Button,
  Typography,
  CircularProgress,
  Paper,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";

import { useStyles } from "../../components/assits/styles";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0;
`;
const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Your full name is required.")
    .min(6, "Too short.")
    .max(25, "Too long."),
  businessName: Yup.string()
    .required("Your business name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The passoword is required.")
    .min(8, "The password is too short."),
});

const SignUp = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.authReducer);
  console.log(loading);

  const { signUp, clean } = actions;
  const [password, showPassword] = React.useState({
    showPassword: false,
  });

  // useEffect(() => {
  //   return () => {
  //     dispatch(clean);
  //   };
  // }, [clean]);

  const handleClickShowPassword = () => {
    showPassword({ showPassword: !password.showPassword });
  };

  const classes = useStyles();
  return (
    <Formik
      initialValues={{
        fullName: "",
        email: "",
        password: "",
        businessName: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(signUp(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
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
                <Field
                  component={Input}
                  className={classes.textField}
                  label="Full name"
                  variant="outlined"
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="fullName"
                  required
                />
              </Grid>
              <Grid item sm className={classes.formInput}>
                <Field
                  component={Input}
                  className={classes.textField}
                  label="Email"
                  variant="outlined"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                />
              </Grid>
              <Grid item sm className={classes.formInput}>
                <Field
                  component={Input}
                  className={classes.textField}
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
              <Grid item sm className={classes.formInput}>
                <Field
                  component={Input}
                  className={classes.textField}
                  label="Business Name"
                  variant="outlined"
                  id="businessName"
                  name="businessName"
                  type="text"
                  placeholder="Business Name"
                  required
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
                    Sign up
                  </Button>
                ) : (
                  <CircularProgress />
                )}
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
                  By signing up you agree to Posify's{" "}
                  <a href="/terms-of-use">Terms of Use</a> and the{" "}
                  <a href="/privacy-policy">Privacy Policy</a>
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body2"
                  component="h2"
                  color="textSecondary"
                >
                  Already have an account? <a href="/">Login</a>
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
