import React from "react";
import {
  AppBar,
  Grid,
  TextField,
  Toolbar,
  Paper,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

import SalesItems from "../SalesItems/SalesItems";
import { useStyles } from "../assits/styles";

function SalesTable() {
  const classes = useStyles();
  const [product, setProduct] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setProduct(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Paper className={classes.salesPaper}>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={2}>
            <Grid item className={classes.allItems}>
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
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>All items</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs>
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                freeSolo
                getOptionLabel={(option) => option.title}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Search here"
                    variant="outlined"
                  />
                )}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <SalesItems />
    </Paper>
  );
}
const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
];
export default SalesTable;
