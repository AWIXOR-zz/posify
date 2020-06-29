import React from "react";
import { useSelector, useDispatch } from "react-redux";
import MaterialTable from "material-table";
import Check from "@material-ui/icons/Check";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Clear from "@material-ui/icons/Clear";
import TextField from "@material-ui/core/TextField";

import * as actions from "../../redux/actions/cartActions";

export default function CustomMaterialTable() {
  const { addToCart } = actions;
  const dispatch = useDispatch();
  const [qte, setQte] = React.useState(1);
  const products = useSelector((state) => state.firestore.data.products);
  const userId = useSelector((state) => state.firebase.auth.uid);
  const requesting = useSelector((state) => state.firestore.status.requesting);
  const requested = useSelector((state) => state.firestore.status.requested);

  let data = [];
  if (products) {
    products[userId].product.forEach((element) => {
      const { name, price } = element.product;

      let item = {
        name: name,
        price: (Math.round(price * 100) / 100).toFixed(2),
        invetory: price !== 0 ? "In stock" : "Out of stock",
        Qte: qte,
        details: 19,
      };
      data.push(item);
    });
  }

  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Price", field: "price", type: "numeric" },

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
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
