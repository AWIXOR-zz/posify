import { useSelector } from "react-redux";
import React from "react";
import MaterialTable from "material-table";
import Check from "@material-ui/icons/Check";
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Clear from "@material-ui/icons/Clear";
export default function CustomMaterialTable() {
  const products = useSelector((state) => state.firestore.data.products);
  const userId = useSelector((state) => state.firebase.auth.uid);
  const requesting = useSelector((state) => state.firestore.status.requesting);
  const requested = useSelector((state) => state.firestore.status.requested);

  // {
  //   products ? console.log(products[userId].product) : console.log("error");
  // }
  let data = [];
  if (products) {
    products[userId].product.forEach((element) => {
      const { name, price } = element.product;
      console.log(element);

      let item = {
        name: name,
        price: (Math.round(price * 100) / 100).toFixed(2),
        invetory: price !== 0 ? "In stock" : "Out of stock",
        details: 19,
      };
      data.push(item);
    });
    console.log(data);
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
      { title: "Details", field: "details", type: "numeric" },
    ],
    // data: [
    //   { name: "Poms", price: 12.0, invetory: "In stock", details: 19 },
    //   {
    //     name: "Coca Cola",
    //     price: 24.0,
    //     invetory: "In stock",
    //     details: 87,
    //   },
    // ],
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
