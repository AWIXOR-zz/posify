import React from "react";
import { useSelector } from "react-redux";
import PageTitle from "../common/PageTitle";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import CustomMaterialTable from "../CustomMaterialTable/CustomMaterialTable";
function AllItems({ history }) {
  const invetory = useSelector((state) => state.firestore.data.invetory);
  const userId = useSelector((state) => state.firebase.auth.uid);
  const requested = useSelector((state) => state.firestore.status.requested);
  const dataLoaded = Object.values(requested).some((a) => a === true);

  let data = [];
  const categoriesList = {};

  if (dataLoaded) {
    invetory[userId].products.forEach((element) => {
      const { id, name, price, soldBy, category, details } = element;

      let item = {
        id: id,
        name: name,
        price: price,
        soldBy: soldBy,
        category: category,
        invetory: price !== 0 ? "In stock" : "Out of stock",
        details: details,
      };
      data.push(item);
    });
    invetory[userId].categories.forEach((category) => {
      const catName = category.name;
      categoriesList[`${catName}`] = catName;
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
    { title: "Category", field: "category", lookup: categoriesList },

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

export default AllItems;
