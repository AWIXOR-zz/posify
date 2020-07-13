import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  Paper,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Icon,
} from "@material-ui/core";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";

import { useStyles } from "../../components/assits/styles";
import PageTitle from "../../components/common/PageTitle";
function Items({ history }) {
  const products = useSelector((state) => state.product.items);
  const categories = useSelector((state) => state.category.items);
  const classes = useStyles();
  function createData(icon, name, link, numberOfItems) {
    return { icon, name, link, numberOfItems };
  }
  const rows = [
    createData("list", "All Items", "items", products.length),
    createData("category", "All Categories", "categories", categories.length),
    createData("loyalty", "Discounts", "discounts", 0),
  ];

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={2}>
        <PageTitle
          title="Items"
          subtitle="DASHBOARD"
          className="text-sm-left"
        />
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
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
      </GridItem>
    </GridContainer>
  );
}

export default withRouter(Items);
