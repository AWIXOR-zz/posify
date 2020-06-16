import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../../redux/actions/authActions";

import Input from "../../components/UI/Input/Input";
import Message from "../../components/UI/Message/Message";
import {
  Grid,
  Button,
  CircularProgress,
  Typography,
  Card,
  CardContent,
  CardHeader,
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

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const { signIn, clean } = actions;

  const [password, showPassword] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    showPassword({ showPassword: !password.showPassword });
  };

  React.useEffect(() => {
    return () => {
      dispatch(clean);
    };
  }, [dispatch, clean]);
  return (
    <Grid
      className={classes.paddingTop6}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Grid item lg={4} md={6} xl={4} xs={6}>
        <Card>
          <CardHeader
            subheader="Please enter you email and password"
            title="Sign in"
            titleTypographyProps={{ variant: "h2" }}
            color="primary"
            align="center"
            component={Typography}
          />
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting }) => {
              await dispatch(signIn(values));
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, isValid, errors }) => (
              <Form className={classes.form}>
                <CardContent>
                  <Grid container spacing={3}>
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
                        required
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
                          Sign In
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
                        Don’t have an account?{" "}
                        <a href="/sign-up">Create it here</a>
                      </Typography>
                      <Typography
                        variant="body2"
                        component="h2"
                        color="textSecondary"
                      >
                        Forgot passoword?{" "}
                        <a href="/recover">Click here to recover</a>
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

export default SignIn;
