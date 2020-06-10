import React from "react";
import { withRouter } from "react-router-dom";
import {
  Grid,
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Icon,
} from "@material-ui/core";
import { useStyles } from "../../components/assits/styles";
import PageTitle from "../../components/common/PageTitle";
function Items({ history }) {
  const classes = useStyles();
  function createData(icon, name, link, numberOfItems) {
    return { icon, name, link, numberOfItems };
  }
  const rows = [
    createData("list", "All Items", "items", 159),
    createData("category", "All Categories", "categories", 7),
    createData("loyalty", "Discounts", "discounts", 0),
  ];

  return (
    <Grid>
      <Grid item>
        <PageTitle
          title="Items"
          subtitle="DASHBOARD"
          className="text-sm-left"
        />
      </Grid>
      <Grid item>
        <Paper className={classes.salesPaper}>
          <div className={classes.contentWrapper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    hover={true}
                    onClick={() => history.push(`/items/${row.link}`)}
                    style={{ cursor: "pointer" }}
                  >
                    <TableCell>
                      <Icon color="secondary">{row.icon}</Icon>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell
                      align="right"
                      className={
                        row.numberOfItems > 0
                          ? classes.inStock
                          : classes.outStock
                      }
                    >
                      {row.numberOfItems}
                    </TableCell>
                    <TableCell align="right">{row.invetory}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Paper>
      </Grid>
    </Grid>
  );
}

export default withRouter(Items);
