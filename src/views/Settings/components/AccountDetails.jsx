import React from "react";
import { Formik, Form, Field } from "formik";
import { useSelector } from "react-redux";
import Input from "../../../components/UI/Input/Input";
import * as Yup from "yup";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
} from "@material-ui/core";

const AccountDetails = () => {
  const { firebase } = useSelector((state) => state);

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
  console.log(firebase.profile.fullName);

  return (
    <Card>
      <CardHeader subheader="The information can be edited" title="Profile" />
      <Divider />

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
          // await editProfile(values);
          // setSubmitting(false);
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
              <CardActions>
                <Button
                  color="primary"
                  variant="contained"
                  disabled={!isValid || isSubmitting}
                >
                  Save changes
                </Button>
              </CardActions>
            </CardContent>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default AccountDetails;
