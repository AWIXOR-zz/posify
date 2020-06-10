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
import SalesItems from "../SalesItems/SalesItems";
import SearchIcon from "@material-ui/icons/Search";
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
          <Grid container spacing={2} alignItems="center">
            <Grid item>
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
              <TextField
                fullWidth
                placeholder="Search by product name"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput,
                }}
              />
            </Grid>
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <SalesItems />
    </Paper>
  );
}

export default SalesTable;
