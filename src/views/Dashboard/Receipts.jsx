import React from "react";
import { useSelector } from "react-redux";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import { useStyles } from "../../components/assits/styles";

import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "@material-ui/core/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { dailySalesChart, monthlySalesChart } from "../../variables/charts.js";
import { Typography } from "@material-ui/core";

function Receipts() {
  const classes = useStyles();

  const sales = useSelector((state) => state.sales.items);
  let dailyLabels = [];
  let dailySereis = [];
  let monthLabels = [];
  let monthSereis = [];
  sales.forEach((item) => {
    dailyLabels.push(item.date.substring(0, 2));
    dailySereis.push(item.totalSales);
    monthLabels.push(item.date.trim().split(" ")[2]);
    // console.log(item.date.trim().split(" ")[2]);
  });
  const calculateSum = (items) => {
    return items.reduce((acc, item) => acc + item.totalSales, 0);
  };
  const dailyData = {
    labels: dailyLabels,
    series: [dailySereis],
  };
  return (
    <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
        <Card>
          <CardHeader>
            <Typography variant="h4">Daily Sales</Typography>
          </CardHeader>
          <CardContent>
            <ChartistGraph
              className="ct-chart"
              data={dailyData}
              type="Line"
              options={dailySalesChart.options}
              listener={dailySalesChart.animation}
            />
          </CardContent>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <Card className={classes.marginTop}>
          <CardHeader>
            <Typography variant="h4">Monthly Sales</Typography>
          </CardHeader>
          <CardContent>
            <ChartistGraph
              className="ct-chart"
              data={monthlySalesChart.data}
              type="Bar"
              options={monthlySalesChart.options}
              responsiveOptions={monthlySalesChart.responsiveOptions}
              listener={monthlySalesChart.animation}
            />
          </CardContent>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default Receipts;
