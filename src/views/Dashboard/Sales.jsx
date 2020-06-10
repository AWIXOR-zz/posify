import React from "react";
import { Grid, Box, Icon, Button } from "@material-ui/core";
import SalesTable from "../../components/SalesTable/SalesTable";
import PageTitle from "../../components/common/PageTitle";
function Sales() {
  return (
    <Grid>
      <Grid item>
        <PageTitle
          title="Ticket"
          subtitle="DASHBOARD"
          className="text-sm-left"
        />
      </Grid>
      <Grid item>
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
    </Grid>
  );
}

export default Sales;
