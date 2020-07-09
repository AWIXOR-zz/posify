import React from "react";
import { useSelector } from "react-redux";
import PageTitle from "../common/PageTitle";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import CustomMaterialTable from "../CustomMaterialTable/CustomMaterialTable";

function AllCategories() {
  const categories = useSelector((state) => state.firestore.data.products);
  const userId = useSelector((state) => state.firebase.auth.uid);
  const requested = useSelector((state) => state.firestore.status.requested);
  const dataLoaded = Object.values(requested).some((a) => a === true);
  let data = [];
  if (dataLoaded) {
    categories[userId].products.forEach((element) => {
      const { id, name, totalItems } = element;

      let item = {
        id: id,
        name,
        totalItems,
      };
      data.push(item);
    });
  }
  const columns = [
    { title: "Name", field: "name" },
    { title: "Total Items", field: "totalItems", type: "numeric" },
  ];
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={2}>
        <PageTitle title="All categories" subtitle="DASHBOARD" />
      </GridItem>
      <GridItem xs={12} sm={12} md={10}>
        <CustomMaterialTable data={data} columns={columns} isCategory />
      </GridItem>
    </GridContainer>
  );
}

export default AllCategories;
