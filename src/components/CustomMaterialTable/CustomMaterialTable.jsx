import React from "react";
import { useDispatch } from "react-redux";
import MaterialTable from "material-table";
import Check from "@material-ui/icons/Check";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Clear from "@material-ui/icons/Clear";

import * as cartActions from "../../redux/actions/cartActions";
import * as productActions from "../../redux/actions/productsActions";

export default function CustomMaterialTable({ data, columns, haveCart }) {
  const { addProduct, editProduct, deleteProduct } = productActions;
  const { addToCart } = cartActions;

  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    columns: columns,
  });

  return (
    <MaterialTable
      columns={state.columns}
      // isLoading={data.length === 0}
      data={data ? data : []}
      icons={{
        Check: () => <Check style={{ color: "green" }} />,
        Edit: () => <Edit color="primary" />,
        Delete: () => <Delete color="secondary" />,
        Clear: () => <Clear color="secondary" />,
      }}
      actions={
        haveCart
          ? [
              {
                icon: "add_shopping_cart",
                tooltip: "Add to cart",
                onClick: (event, rowData) => {
                  dispatch(addToCart(rowData));
                },
              },
            ]
          : null
      }
      options={{
        showTitle: false,
        actionsColumnIndex: -1,
      }}
      editable={{
        isEditHidden: (rowData) => rowData.Invetory === "x",
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              dispatch(addProduct(newData));
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            console.log(newData);

            setTimeout(() => {
              resolve();
              if (oldData) {
                dispatch(editProduct(newData));
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
