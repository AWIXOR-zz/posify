import React from "react";
import {
  TableHead,
  Box,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import ImageIcon from "@material-ui/icons/Image";
import { useStyles } from "../assits/styles";

function SalesItems() {
  const classes = useStyles();
  function createData(name, invetory, detials) {
    return { name, invetory, detials };
  }
  const rows = [
    createData("Frozen yoghurt", 159),
    createData("Ice cream sandwich", 237),
    createData("Eclair", 0),
    createData("Cupcake", 305),
    createData("Gingerbread", 0),
  ];
  return (
    <div className={classes.contentWrapper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Invetory</TableCell>
            <TableCell align="right">Details&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              hover={true}
              onClick={() => console.log("helloo") /*dispatch an action*/}
              style={{ cursor: "pointer" }}
            >
              <TableCell>
                <Box className={classes.productImage}>
                  <ImageIcon color="secondary" />
                </Box>
              </TableCell>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                className={
                  row.invetory > 0 ? classes.inStock : classes.outStock
                }
              >
                {row.invetory > 0 ? "In stock" : "Out of stock"}
              </TableCell>
              <TableCell align="right">{row.invetory}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default SalesItems;
