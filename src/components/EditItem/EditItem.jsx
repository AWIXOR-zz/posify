import React from "react";
import {
  Grid,
  TextField,
  Paper,
  Button,
  Card,
  CardContent,
  FormControl,
  Select,
  MenuItem,
  FormLabel,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

import { useStyles } from "../../components/assits/styles";
import PageTitle from "../common/PageTitle";

function EditItem() {
  const classes = useStyles();
  const [product, setProduct] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [price, setPrice] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [value, setRadio] = React.useState("Each");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleRadioChange = (event) => {
    setRadio(event.target.value);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <Grid>
      <Grid item>
        <PageTitle
          title="Edit Product"
          subtitle="DASHBOARD"
          className="text-sm-left"
        />
      </Grid>
      <Grid item>
        <Paper>
          <Card>
            <CardContent>
              <Grid
                container
                className={classes.root}
                spacing={3}
                alignItems="center"
                justify="center"
              >
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    id="outlined-error-helper-text"
                    label="name"
                    defaultValue="Hello World"
                    variant="outlined"
                    onChange={(e) => setProduct(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={8}>
                  <FormControl className={classes.formControl}>
                    <Select
                      displayEmpty={true}
                      labelId="demo-controlled-open-select-label"
                      id="demo-controlled-open-select"
                      variant="outlined"
                      open={open}
                      onClose={handleClose}
                      onOpen={handleOpen}
                      value={product}
                      onChange={handleCategoryChange}
                    >
                      <MenuItem value="">
                        <em>Category</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={8}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">Sold by</FormLabel>
                    <RadioGroup
                      aria-label="Sold by"
                      name="Soldby"
                      value={value}
                      onChange={handleRadioChange}
                    >
                      <FormControlLabel
                        value="Each"
                        control={<Radio />}
                        label="Each"
                      />
                      <FormControlLabel
                        value="Weight"
                        control={<Radio />}
                        label="Weight"
                      />
                    </RadioGroup>
                  </FormControl>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="Price"
                    type="number"
                    defaultValue="Hello World"
                    variant="outlined"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </Grid>
                <Grid item xs={8} className={classes.textCenter}>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.button}
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default EditItem;
