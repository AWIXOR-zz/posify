import React from "react";
import { Grid } from "@material-ui/core";

// import { useSelector } from "react-redux";
import PageTitle from "../common/PageTitle";
function AllCategories() {
  // const categories = useSelector((state) => state.category);

  return (
    <Grid>
      <Grid item>
        <PageTitle title="All Categories" subtitle="DASHBOARD" />
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default AllCategories;
