import React from "react";
import { useSelector } from "react-redux";
import { Icon, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "@material-ui/core/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardIcon from "../../components/Card/CardIcon";
import TextField from "@material-ui/core/TextField";

import CustomMaterialTable from "../../components/CustomMaterialTable/CustomMaterialTable";
import CartItem from "../../components/CartItem/CartItem";
const styles = {
  cardTitle: {
    color: "#FFF",
    marginTop: "0px",
    minHeight: "50px",
    textAlign: "center",
    fontWeight: "300",
    fontSize: "24px",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
};

const useStyles = makeStyles(styles);

function Sales() {
  const [qte, setQte] = React.useState(1);

  const totalToPay = useSelector((state) => state.cart.totalToPay);
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
        Qte: parseInt(qte),
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
  ];
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="primary" className={classes.stats} icon>
            <CardIcon>
              <CartItem />
              <h3 className={classes.cardTitle}>TOTAL TO PAY</h3>
            </CardIcon>
          </CardHeader>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h4"
              align="center"
              style={{ fontWeight: 200, marginBottom: "20px" }}
            >
              {(Math.round(totalToPay * 100) / 100).toFixed(2)}{" "}
              <small>MAD</small>
            </Typography>
            <Button
              variant="contained"
              size="large"
              style={{ backgroundColor: "#FFA623", color: "white" }}
              className={classes.button}
              endIcon={<Icon>send</Icon>}
            >
              Charge
            </Button>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <CustomMaterialTable columns={columns} data={data} haveCart />
      </GridItem>
    </GridContainer>
  );
}

export default Sales;
