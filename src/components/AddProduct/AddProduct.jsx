import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import * as actions from "../../redux/actions/productsActions";
import Input from "../UI/Input/Input";
import SelectField from "../common/SelectField/SelectField";
import Message from "../UI/Message/Message";
import {
  CircularProgress,
  Typography,
  Divider,
  Button,
  Dialog,
  DialogContent,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));
const AddProductSchema = Yup.object().shape({
  name: Yup.string()
    .required("The product name is required.")
    .min(3, "Too short"),
  category: Yup.string().required("The category is required."),
  soldBy: Yup.string().required("The sold by option is required."),
  price: Yup.number().required("The price is required."),
});
function AddProduct({ open, handleClose }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { addProduct } = actions;

  const { loading, error } = useSelector((state) => state.product);
  const categories = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const soldBy = [
    { value: "each", label: "Each" },
    { value: "weight", label: "Weight" },
  ];
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Typography
          className={classes.root}
          variant="h4"
          color="primary"
          align="center"
        >
          Add new product
        </Typography>
        <Divider />
        <DialogContent>
          <Formik
            initialValues={{
              name: "",
              category: "",
              soldBy: "",
              price: "",
            }}
            validationSchema={AddProductSchema}
            onSubmit={async (values, { setSubmitting }) => {
              const res = await dispatch(addProduct(values));
              if (res) {
                handleClose();
              }
              setSubmitting(false);
            }}
          >
            {({ isSubmitting, isValid, values, errors }) => (
              <Form className={classes.form}>
                <Grid container spacing={3}>
                  <Grid item md={12} xs={12}>
                    <Field
                      fullWidth
                      component={Input}
                      error={errors.name ? true : false}
                      helperText={errors.name}
                      label="Name"
                      variant="outlined"
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Name"
                      required
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <Field
                      fullWidth
                      component={Input}
                      error={errors.price ? true : false}
                      helperText={errors.price}
                      label="Price"
                      variant="outlined"
                      id="price"
                      name="price"
                      type="number"
                      placeholder="Price"
                      required
                    />
                  </Grid>
                  <Grid item md={12} xs={12}>
                    <Field
                      name="category"
                      component={SelectField}
                      helperText={errors.category}
                      options={categories}
                      textFieldProps={{
                        label: "Category",
                        fullWidth: true,
                        variant: "outlined",
                      }}
                    />
                  </Grid>

                  <Grid item md={12} xs={12}>
                    <Field
                      name="soldBy"
                      component={SelectField}
                      helperText={errors.soldBy}
                      options={soldBy}
                      textFieldProps={{
                        label: "Sold by",
                        fullWidth: true,
                        variant: "outlined",
                      }}
                    />
                  </Grid>
                  <Grid item md={12} xs={12} container justify="space-between">
                    <Button
                      onClick={handleClose}
                      variant="outlined"
                      color="secondary"
                      disabled={loading}
                    >
                      Cencel
                    </Button>

                    {!loading ? (
                      <Button color="primary" variant="outlined" type="submit">
                        Add
                      </Button>
                    ) : (
                      <CircularProgress />
                    )}
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
          <Message error show={error}>
            {error}
          </Message>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default AddProduct;
