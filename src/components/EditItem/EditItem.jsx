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
import DeleteIcon from "@material-ui/icons/Delete";
import GridItem from "../Grid/GridItem";
// import Table from "../../Table/Table";
import GridContainer from "../Grid/GridContainer";
import { useStyles } from "../../components/assits/styles";
import PageTitle from "../common/PageTitle";

function EditItem() {
  const classes = useStyles();
  const [product, setProduct] = React.useState("");
  const [setCategory] = React.useState("");
  const [setPrice] = React.useState(null);
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
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <PageTitle
          title="Edit Product"
          subtitle="DASHBOARD"
          className="text-sm-left"
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={4}>
        <Paper className={classes.salesPaper}>
          <Card className={classes.cardPadding}>
            <CardContent>
              <Grid
                container
                className={classes.root}
                spacing={3}
                alignItems="center"
                justify="center"
              >
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    fullWidth
                    id="outlined-error-helper-text"
                    label="name"
                    defaultValue="Hello World"
                    variant="outlined"
                    onChange={(e) => setProduct(e.target.value)}
                    required
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
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
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
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
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <TextField
                    fullWidth
                    label="Price"
                    type="number"
                    defaultValue="Hello World"
                    variant="outlined"
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </GridItem>
                <Grid item xs={8} className={classes.textCenter}>
                  <Button
                    margin="dense"
                    variant="contained"
                    color="secondary"
                    size="large"
                    className={classes.buttonMargin}
                    startIcon={<DeleteIcon />}
                  >
                    Save
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    className={classes.buttonMargin}
                    startIcon={<SaveIcon />}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </GridItem>
    </GridContainer>
  );
}

export default EditItem;
