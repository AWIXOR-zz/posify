import React from "react";
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
import DisplayItems from "../DisplayItems/DisplayItems";
import { useSelector } from "react-redux";
import PageTitle from "../common/PageTitle";
function AllItems({ history }) {
  const products = useSelector((state) => state.product.items);

  return (
    <Grid>
      <Grid item>
        <PageTitle title="All Products" subtitle="DASHBOARD" />
      </Grid>
      <Grid item>
        <DisplayItems items={products} />
      </Grid>
    </Grid>
  );
}

export default withRouter(AllItems);
