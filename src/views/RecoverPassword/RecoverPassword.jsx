import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/authActions";
import { useStyles } from "../../components/assits/styles";
import Input from "../../components/UI/Input/Input";
import {
  Grid,
  Button,
  Link,
  Typography,
  Paper,
  Icon,
  CircularProgress,
} from "@material-ui/core";
import Message from "../../components/UI/Message/Message";

const RecoverSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
});
function RecoverPassword() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth.recoverPassword);
  const { recoverPassword, clean } = actions;

  React.useEffect(() => {
    return () => {
      dispatch(clean);
    };
  });
  return (
    <Formik
      initialValues={{
        email: "",
      }}
      validationSchema={RecoverSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await dispatch(recoverPassword(values));
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form className={classes.form}>
          <Grid
            className={classes.padding8rem}
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Paper className={classes.paper}>
              <Grid className={classes.maxWidth25rem}>
                <Grid item className={classes.textCenter}>
                  <Icon color="primary" fontSize="large">
                    lockopen
                  </Icon>
                </Grid>
                <Grid item>
                  <Typography variant="h4" color="primary" align="center">
                    Recover password
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="overline"
                    color="textPrimary"
                    align="center"
                  >
                    Please type in your e-mail to recover your password.
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
                    placeholder="Email"
                  />
                </Grid>
                {!loading ? (
                  <Grid item className={classes.textCenter}>
                    <Button
                      disabled={!isValid || isSubmitting}
                      variant="contained"
                      color="primary"
                      className={classes.menuButton}
                      type="submit"
                    >
                      Recover
                    </Button>
                    <Button
                      component={Link}
                      variant="contained"
                      color="secondary"
                      href="/"
                      underline="none"
                      className={classes.removeLinkStyles}
                    >
                      Go back
                    </Button>
                  </Grid>
                ) : (
                  <Grid item className={classes.textCenter}>
                    <CircularProgress />
                  </Grid>
                )}
                <Grid item>
                  <Message error show={error}>
                    {error}
                  </Message>
                </Grid>
                <Grid item>
                  <Message success show={error === false}>
                    Recover email sent successfully!
                  </Message>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Form>
      )}
    </Formik>
  );
}

export default RecoverPassword;
