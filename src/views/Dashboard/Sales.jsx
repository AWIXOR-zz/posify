import React from "react";
import { Grid, Box, Icon, Button } from "@material-ui/core";
import SalesTable from "../../components/SalesTable/SalesTable";
function Sales() {
  return (
    <Grid>
      <Box justifyContent="center" display="flex">
        <Button
          variant="contained"
          color="primary"
          size="large"
          // className={classes.salesButton}
          endIcon={<Icon>payment</Icon>}
        >
          Charge
        </Button>
      </Box>
      <Box>
        <SalesTable />
      </Box>
    </Grid>
  );
}

export default Sales;
