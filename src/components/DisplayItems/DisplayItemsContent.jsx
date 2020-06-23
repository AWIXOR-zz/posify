import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../UI/Loader/Loader";
import { useStyles } from "../../components/assits/styles";
import { useFirestoreConnect } from "react-redux-firebase";

import {
  Typography,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Icon,
} from "@material-ui/core";

const DisplayItemsContent = ({ history }) => {
  const classes = useStyles();

  const userId = useSelector((state) => state.firebase.auth.uid);
  const products = useSelector((state) => state.firestore.data.products);
  const requesting = useSelector((state) => state.firestore.status.requesting);
  const requested = useSelector((state) => state.firestore.status.requested);
  console.log(products);
  useFirestoreConnect([
    {
      collection: "products",
      doc: userId,
    },
  ]);

  return (
    <div className={classes.contentWrapper}>
      {products ? (
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            {products[userId].product
              .slice(0)
              .reverse()
              .map((item) => (
                <TableRow
                  key={item.product.name}
                  hover={true}
                  onClick={() =>
                    history.push(`/items/categories/${item.name.toLowerCase()}`)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <TableCell>
                    <Icon color="secondary">{item.icon}</Icon>
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {item.product.name}
                  </TableCell>
                  {item.product.price ? (
                    <TableCell align="right" className={classes.inStock}>
                      {(Math.round(item.product.price * 100) / 100).toFixed(2)}
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
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default withRouter(DisplayItemsContent);
