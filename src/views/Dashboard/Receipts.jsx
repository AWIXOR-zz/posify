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
  const { labels, series } = dailySalesChart.data;
  const MonthLables = monthlySalesChart.data.labels;
  const MonthSeries = monthlySalesChart.data.series;
  // const { labels ,series } = monthlySalesChart.data;
  const sales = useSelector((state) => state.sales.items);

  sales.forEach((item) => {
    for (let i = 0; i < labels.length; i++) {
      if (labels[i] === item.date.substring(0, 2)) {
        series[i] = item.totalSales;
      }
    }
  });

  for (let i = 0; i < MonthLables.length; i++) {
    let total = 0;
    sales.forEach((item) => {
      if (MonthLables[i] === item.date.trim().split(" ")[2]) {
        total += item.totalSales;
      }
      MonthSeries[i] = total;
    });
  }

  const dailyData = {
    labels: labels,
    series: [series],
  };
  const monthlyData = {
    labels: MonthLables,
    series: [MonthSeries],
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
              data={monthlyData}
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
