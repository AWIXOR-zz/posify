import React from "react";
import { withRouter } from "react-router-dom";
import DisplayItems from "../DisplayItems/DisplayItems";
import { useSelector } from "react-redux";
import PageTitle from "../common/PageTitle";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import CustomMaterialTable from "../CustomMaterialTable/CustomMaterialTable";
function AllItems({ history }) {
  const products = useSelector((state) => state.firestore.data.products);

  const userId = useSelector((state) => state.firebase.auth.uid);

  let data = [];
  if (products) {
    products[userId].product.forEach((element) => {
      const { name, price } = element.product;

      let item = {
        id: element.id,
        name: name,
        price: price,
        invetory: price !== 0 ? "In stock" : "Out of stock",
        details: 19,
      };
      data.push(item);
    });
  }
  const columns = [
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
      field: "details",
      title: "Details",
      type: "numeric",
    },
  ];
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={2}>
        <PageTitle title="All Products" subtitle="DASHBOARD" />
      </GridItem>
      <GridItem xs={12} sm={12} md={10}>
        {/*<DisplayItems items={products} />*/}
        <CustomMaterialTable data={data} columns={columns} />
      </GridItem>
    </GridContainer>
  );
}

export default withRouter(AllItems);
