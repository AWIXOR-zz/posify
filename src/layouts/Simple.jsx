import React from "react";
import { useStyles } from "../components/assits/styles";

const SimpleLayout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.containerAll}>
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default SimpleLayout;
