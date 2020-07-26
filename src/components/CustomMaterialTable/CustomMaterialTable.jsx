import React from "react";
import { useDispatch } from "react-redux";
import MaterialTable from "material-table";
import Check from "@material-ui/icons/Check";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Clear from "@material-ui/icons/Clear";

import * as cartActions from "../../redux/actions/cartActions";
import * as productActions from "../../redux/actions/productsActions";
import * as categoryActions from "../../redux/actions/categoryActions";
import AddProduct from "../AddProduct/AddProduct";
import { render } from "@testing-library/react";

export default function CustomMaterialTable({
  data,
  columns,
  haveCart,
  isSales,
  isCategory,
}) {
  const { addProduct, editProduct, deleteProduct } = productActions;
  const { addCategory, editCategory, deleteCategory } = categoryActions;
  const { addToCart } = cartActions;

  const dispatch = useDispatch();

  return (
    <MaterialTable
      columns={columns}
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
        onRowAdd: !isSales
          ? (newData) =>
              new Promise((resolve) => {
                setTimeout(() => {
                  resolve();
                  render(AddProduct);
                  dispatch(
                    isCategory ? addCategory(newData) : addProduct(newData)
                  );
                }, 600);
              })
          : null,
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                dispatch(
                  isCategory ? editCategory(newData) : editProduct(newData)
                );
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              dispatch(
                isCategory
                  ? deleteCategory(oldData.id)
                  : deleteProduct(oldData.id)
              );
            }, 600);
          }),
      }}
    />
  );
}
