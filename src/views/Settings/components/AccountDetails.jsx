import React from "react";
import { Formik, Form, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Input from "../../../components/UI/Input/Input";
import Message from "../../../components/UI/Message/Message";
import Loader from "../../../components/UI/Loader/Loader";
import * as actions from "../../../redux/actions/authActions";

import * as Yup from "yup";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  CircularProgress,
} from "@material-ui/core";

const ProfileSchema = Yup.object().shape({
  fullName: Yup.string()
    .required("Your first name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  businessName: Yup.string()
    .required("Your last name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string().min(8, "The password is too short."),
});

const AccountDetails = () => {
  const dispatch = useDispatch();
  const { clean, editProfile } = actions;
  const { firebase, auth } = useSelector((state) => state);
  const { loading, error } = auth.profileEdit;
  React.useEffect(() => {
    return () => {
      dispatch(clean);
    };
  }, [dispatch, clean]);

  return (
    <Card>
      <CardHeader subheader="The information can be edited" title="Profile" />
      <Divider />
      {firebase.profile.isLoaded ? (
        <Formik
          initialValues={{
            fullName: firebase.profile.fullName,
            businessName: firebase.profile.businessName,
            email: firebase.auth.email,
            password: "",
          }}
          validationSchema={ProfileSchema}
          onSubmit={async (values, { setSubmitting }) => {
            // edit the profile here
            await dispatch(editProfile(values));
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, isValid, errors }) => (
            <Form>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid item md={6} xs={12}>
                    <Field
                      fullWidth
                      error={errors.fullName ? true : false}
                      component={Input}
                      helperText={errors.fullName}
                      label="Full Name"
                      margin="dense"
                      variant="outlined"
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Full Name"
                      required
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      fullWidth
                      error={errors.businessName ? true : false}
                      helperText={errors.businessName}
                      component={Input}
                      margin="dense"
                      label="Business Name"
                      variant="outlined"
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder="Business Name"
                      required
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      fullWidth
                      error={errors.email ? true : false}
                      helperText={errors.email}
                      component={Input}
                      margin="dense"
                      label="Email"
                      variant="outlined"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                    />
                  </Grid>
                  <Grid item md={6} xs={12}>
                    <Field
                      fullWidth
                      component={Input}
                      error={errors.password ? true : false}
                      helperText={errors.password}
                      margin="dense"
                      label="Password"
                      variant="outlined"
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Password"
                      required
                    />
                  </Grid>
                </Grid>
                <Divider />
                <Grid item md={6} xs={12}>
                  <CardActions>
                    {!loading ? (
                      <Button
                        disabled={!isValid || isSubmitting}
                        type="submit"
                        variant="contained"
                        color="primary"
                        size="large"
                        endIcon={<i className="material-icons">save</i>}
                      >
                        Save changes
                      </Button>
                    ) : (
                      <CircularProgress />
                    )}
                  </CardActions>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Message error show={error}>
                    {error}
                  </Message>
                  <Message success show={error === false}>
                    Profile was updated!
                  </Message>
                </Grid>
              </CardContent>
            </Form>
          )}
        </Formik>
      ) : (
        <Grid container direction="column" justify="center" alignItems="center">
          <CardContent>
            <Loader />
          </CardContent>
        </Grid>
      )}
    </Card>
  );
};

export default AccountDetails;
