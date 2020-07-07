import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";

import GridItem from "../../components/Grid/GridItem";
import GridContainer from "../../components/Grid/GridContainer";
import Card from "@material-ui/core/Card";
import CardHeader from "../../components/Card/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import {
  dailySalesChart,
  monthlySalesChart,
  completedTasksChart,
} from "../../variables/charts.js";
import { Typography } from "@material-ui/core";
function Receipts() {
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
              data={dailySalesChart.data}
              type="Line"
              options={dailySalesChart.options}
              listener={dailySalesChart.animation}
            />
          </CardContent>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={8}>
        <Card>
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
