import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialTable from "material-table";
import Check from "@material-ui/icons/Check";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Clear from "@material-ui/icons/Clear";
import TextField from "@material-ui/core/TextField";

import * as cartActions from "../../redux/actions/cartActions";
import * as productActions from "../../redux/actions/productsActions";

export default function CustomMaterialTable() {
  const { addProduct, editProduct, deleteProduct } = productActions;
  const { addToCart } = cartActions;

  const dispatch = useDispatch();
  const [qte, setQte] = React.useState(1);
  const products = useSelector((state) => state.firestore.data.products);
  const userId = useSelector((state) => state.firebase.auth.uid);
  // const requesting = useSelector((state) => state.firestore.status.requesting);
  // const requested = useSelector((state) => state.firestore.status.requested);

  let data = [];
  if (products) {
    products[userId].product.forEach((element) => {
      const { name, price } = element.product;

      let item = {
        id: element.id,
        name: name,
        price: price,
        invetory: price !== 0 ? "In stock" : "Out of stock",
        Qte: parseInt(qte),
        details: 19,
      };
      data.push(item);
    });
  }

  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Price", field: "price", type: "currency" },

      {
        title: "Invetory",
        field: "invetory",
        cellStyle: (rowData) => ({
          color: rowData === 0 ? "red" : "green",
        }),
      },
      {
        field: "Qte",
        title: "Qte",
        type: "numeric",
        render: (rowData) => (
          <TextField
            type="number"
            defaultValue={1}
            inputProps={{ min: 1 }}
            onChange={(event) => setQte(event.target.value)}
          />
        ),
      },
    ],
  });

  return (
    <MaterialTable
      columns={state.columns}
      isLoading={data.length === 0}
      data={data ? data : []}
      icons={{
        Check: () => <Check style={{ color: "green" }} />,
        Edit: () => <Edit color="primary" />,
        Delete: () => <Delete color="secondary" />,
        Clear: () => <Clear color="secondary" />,
      }}
      actions={[
        {
          icon: "add_shopping_cart",
          tooltip: "Add to cart",
          onClick: (event, rowData) => {
            dispatch(addToCart(rowData));
          },
        },
      ]}
      options={{
        showTitle: false,
        actionsColumnIndex: -1,
      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              dispatch(addProduct(newData));
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                dispatch(editProduct(oldData.id, newData));
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              dispatch(deleteProduct(oldData.id));
            }, 600);
          }),
      }}
    />
  );
}
