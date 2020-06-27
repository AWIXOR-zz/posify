import React from "react";
import { Grid, Icon, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SalesTable from "../../components/SalesTable/SalesTable";
// import PageTitle from "../../components/common/PageTitle";
import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "@material-ui/core/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardIcon from "../../components/Card/CardIcon";
import Table from "../../components/Table/Table";
import SalesItems from "../../components/SalesItems/SalesItems";
import CustomMaterialTable from "../../components/CustomMaterialTable/CustomMaterialTable";

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
  const classes = useStyles();

  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={4}>
        <Card>
          <CardHeader color="primary" className={classes.stats} icon>
            <CardIcon>
              <h3 className={classes.cardTitle}>TOTAL TO PAY</h3>
            </CardIcon>
          </CardHeader>
          <CardContent className={classes.cardContent}>
            <Typography
              variant="h4"
              align="center"
              style={{ fontWeight: 200, marginBottom: "20px" }}
            >
              {(Math.round(1240 * 100) / 100).toFixed(2)} <small>MAD</small>
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
        <CustomMaterialTable />
      </GridItem>
    </GridContainer>
  );
}

export default Sales;
