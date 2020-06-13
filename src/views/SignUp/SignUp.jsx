import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";

import * as Yup from "yup";

import Message from "../../components/UI/Message/Message";
import Input from "../../components/UI/Input/Input";
import * as actions from "../../redux/actions/authActions";
import {
  Grid,
  Card,
  CardHeader,
  Button,
  Typography,
  CircularProgress,
  CardContent,
  InputAdornment,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useStyles } from "../../components/assits/styles";

const SignUpSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Your fullname is required.")
    .min(6, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The passoword is required.")
    .min(8, "The password is too short."),
  businessName: Yup.string()
    .required("Your business name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
});

const SignUp = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const { signUp, clean } = actions;
  const [password, showPassword] = useState({
    showPassword: false,
  });

  useEffect(() => {
    return () => {
      dispatch(clean);
    };
  }, [dispatch, clean]);

  const handleClickShowPassword = () => {
    showPassword({ showPassword: !password.showPassword });
  };

  return (
    <Grid
      className={classes.paddingTop5}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item lg={4} md={6} xl={4} xs={6}>
        <Card>
          <CardHeader
            subheader="Please fill in your details"
            title="Sign up"
            titleTypographyProps={{ variant: "h2" }}
            color="primary"
            align="center"
            component={Typography}
          />

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
            {({ isSubmitting, isValid, errors }) => (
              <Form className={classes.form}>
                <CardContent>
                  <Grid
                    // className={classes.formWrapper}
                    container
                    spacing={3}
                  >
                    <Grid item md={12} xs={12}>
                      <Field
                        fullWidth
                        component={Input}
                        error={errors.fullName ? true : false}
                        helperText={errors.fullName}
                        label="Full name"
                        variant="outlined"
                        id="fullName"
                        name="fullName"
                        type="text"
                        placeholder="fullName"
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <Field
                        fullWidth
                        component={Input}
                        error={errors.email ? true : false}
                        helperText={errors.email}
                        label="Email"
                        variant="outlined"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                      />
                    </Grid>
                    <Grid item md={12} xs={12}>
                      <Field
                        fullWidth
                        component={Input}
                        error={errors.password ? true : false}
                        helperText={errors.password}
                        label="Password"
                        variant="outlined"
                        id="password"
                        name="password"
                        type={password.showPassword ? "text" : "password"}
                        placeholder="Password"
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
                    <Grid item md={12} xs={12}>
                      <Field
                        fullWidth
                        component={Input}
                        error={errors.businessName ? true : false}
                        helperText={errors.businessName}
                        label="Business Name"
                        variant="outlined"
                        id="businessName"
                        name="businessName"
                        type="text"
                        placeholder="Business Name"
                      />
                    </Grid>

                    <Grid item md={12} xs={12}>
                      {!loading ? (
                        <Button
                          disabled={!isValid || isSubmitting}
                          type="submit"
                          variant="contained"
                          color="primary"
                          size="large"
                          endIcon={
                            <i className="material-icons">arrow_forward</i>
                          }
                        >
                          Sign up
                        </Button>
                      ) : (
                        <CircularProgress />
                      )}
                      <Message error show={error}>
                        {error}
                      </Message>
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <Typography
                        variant="body2"
                        component="h2"
                        color="textSecondary"
                      >
                        By signing up you agree to Posify's{" "}
                        <a href="/terms-of-use">Terms of Use</a> and the{" "}
                        <a href="/privacy-policy">Privacy Policy</a>
                      </Typography>
                      <Typography
                        variant="body2"
                        component="h2"
                        color="textSecondary"
                      >
                        Already have an account? <a href="/">Login</a>
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Form>
            )}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  );
};

export default SignUp;
