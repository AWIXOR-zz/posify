import React from "react";
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

function Items() {
  const classes = useStyles();
  function createData(icon, name, numberOfItems) {
    return { icon, name, numberOfItems };
  }
  const rows = [
    createData("list", "Items", 159),
    createData("category", "Category", 7),
    createData("loyalty", "Discounts", 0),
  ];
  return (
    <Grid>
      <Paper className={classes.salesPaper}>
        <div className={classes.contentWrapper}>
          <Table className={classes.table} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  hover={true}
                  onClick={() => console.log("helloo") /*dispatch an action*/}
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
                      row.numberOfItems > 0 ? classes.inStock : classes.outStock
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
  );
}

export default Items;
