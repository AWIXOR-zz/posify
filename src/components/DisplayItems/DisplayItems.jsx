import React from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { useSelector } from "react-redux";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Icon,
  Avatar,
  CardHeader,
} from "@material-ui/core";
import { useStyles } from "../../components/assits/styles";
import AddProduct from "../AddProduct/AddProduct";
function DisplayItems({ history, items, category }) {
  const [open, setOpen] = React.useState(false);
  const userId = useSelector((state) => state.firebase.auth.uid);
  // console.log(userId);
  // const test = useFirestoreConnect("products");
  // console.log(test);

  // useFirestoreConnect([`products/${userId}`]);
  const test = useFirestoreConnect(["products"]);
  console.log(test);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <Grid
      // xs={8}
      // lg={6}
      // md={6}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item lg={8} md={8} xl={9} xs={10}>
        <Card>
          <CardHeader
            title={
              <Avatar
                className={classes.avatar}
                onClick={handleClickOpen}
                style={{ cursor: "pointer" }}
              >
                <Icon>add</Icon>
              </Avatar>
            }
            className={classes.justifyContent}
            align="center"
          />
          <CardContent>
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
          </CardContent>
          <CardActions className={classes.actions}>
            {/*  <TablePagination
              // component="div"
              // count={users.length}
              // onChangePage={handlePageChange}
              // onChangeRowsPerPage={handleRowsPerPageChange}
              // page={page}
              // rowsPerPage={rowsPerPage}
              rowsPerPageOptions={[5, 10, 25]}
          />*/}
          </CardActions>
        </Card>
        <AddProduct open={open} handleClose={handleClose} />
      </Grid>
    </Grid>
  );
}
// export default compose(
//   firestoreConnect((props) => [`products/${props.userId}`])
// )(DisplayItems);
export default withRouter(DisplayItems);
