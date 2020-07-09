import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import PageTitle from "../common/PageTitle";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import CustomMaterialTable from "../CustomMaterialTable/CustomMaterialTable";
function AllItems({ history }) {
  const products = useSelector((state) => state.firestore.data.products);
  const userId = useSelector((state) => state.firebase.auth.uid);
  const requested = useSelector((state) => state.firestore.status.requested);
  const dataLoaded = Object.values(requested).some((a) => a === true);

  let data = [];
  if (dataLoaded) {
    products[userId].products.forEach((element) => {
      const { name, price, soldBy, details } = element;

      let item = {
        id: element.id,
        name: name,
        price: price,
        soldBy: soldBy,
        invetory: price !== 0 ? "In stock" : "Out of stock",
        details: details,
      };
      data.push(item);
    });
  }
  const columns = [
    { title: "Name", field: "name" },
    { title: "Price", field: "price", type: "currency" },
    {
      title: "Sold By",
      field: "soldBy",
      lookup: { each: "Each", weight: "Weight" },
    },

    {
      title: "Invetory",
      field: "invetory",
      editable: "never",
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
        <CustomMaterialTable data={data} columns={columns} />
      </GridItem>
    </GridContainer>
  );
}

export default withRouter(AllItems);
