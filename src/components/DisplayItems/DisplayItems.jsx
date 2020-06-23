import React from "react";
import { withRouter } from "react-router-dom";
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
import DisplayItemsContent from "./DisplayItemsContent";
import { useStyles } from "../../components/assits/styles";
import AddProduct from "../AddProduct/AddProduct";
function DisplayItems({ history, items, category }) {
  const [open, setOpen] = React.useState(false);
  const userId = useSelector((state) => state.firebase.auth.uid);
  const products = useSelector((state) => state.firestore.data.products);
  const requesting = useSelector((state) => state.firestore.status.requesting);
  const requested = useSelector((state) => state.firestore.status.requested);
  // useFirestoreConnect([
  //   {
  //     collection: "products",
  //     doc: userId,
  //   },
  // ]);

  console.log(products);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      <Grid item>
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
            <DisplayItemsContent />
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
