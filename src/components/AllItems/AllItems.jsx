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

function AllItems({ history }) {
  const classes = useStyles();
  function createData(icon, name, price) {
    return { icon, name, price };
  }
  const rows = [
    createData("list", "Product1", 15.9),
    createData("category", "Product2", 7.0),
    createData("loyalty", "Product3", 10.0),
    createData("loyalty", "Product4", 20.0),
    createData("loyalty", "Product5", 50.0),
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
                  onClick={() =>
                    history.push(`/items/items/${row.name.toLowerCase()}`)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>
                    <Icon color="secondary">{row.icon}</Icon>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right" className={classes.inStock}>
                    {row.price}
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

export default withRouter(AllItems);
