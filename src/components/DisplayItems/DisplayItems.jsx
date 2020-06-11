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

function DisplayItems({ history, items, category }) {
  const classes = useStyles();
  return (
    <Grid>
      <Grid item>
        <Paper className={classes.salesPaper}>
          <div className={classes.contentWrapper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>
                {items.map((item) => (
                  <TableRow
                    key={item.name}
                    hover={true}
                    onClick={() =>
                      history.push(
                        `/items/categories/${item.name.toLowerCase()}`
                      )
                    }
                    style={{ cursor: "pointer" }}
                  >
                    <TableCell>
                      <Icon color="secondary">{item.icon}</Icon>
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    {!category ? (
                      <TableCell align="right" className={classes.inStock}>
                        {(Math.round(item.price * 100) / 100).toFixed(2)}
                      </TableCell>
                    ) : (
                      <TableCell align="right" className={classes.inStock}>
                        {item.totaleItems}
                      </TableCell>
                    )}

                    <TableCell align="right">
                      <Icon color="secondary">delete</Icon>
                    </TableCell>
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

export default withRouter(DisplayItems);
