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

import CustomModal from "../../components/CustomModal/CustomModal";
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
  const [open, setOpen] = React.useState(false);

  const totalToPay = useSelector((state) => state.cart.totalToPay);
  const products = useSelector((state) => state.product.items);

  let data = [];
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  products.forEach((element) => {
    const { id, name, Qte, price } = element;

    let item = {
      id: id,
      name: name,
      price: price,
      invetory: price !== 0 ? "In stock" : "Out of stock",
      Qte: Qte,
      details: 19,
    };
    data.push(item);
  });

  const columns = [
    { title: "Name", field: "name" },
    { title: "Price", field: "price", type: "currency" },

    {
      title: "Invetory",
      field: "invetory",
      editable: "never",
      cellStyle: (rowData) => ({
        color: rowData === 0 ? "red" : "green",
      }),
    },
    {
      field: "Qte",
      title: "Qte",
      editable: "never",
      type: "numeric",
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
              disabled={totalToPay === 0}
              onClick={handleOpen}
            >
              Charge
            </Button>
          </CardContent>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <CustomMaterialTable columns={columns} data={data} haveCart isSales />
      </GridItem>
      <CustomModal handleClose={handleClose} open={open} />
    </GridContainer>
  );
}

export default Sales;
