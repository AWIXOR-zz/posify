import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
const PageTitle = ({ title, subtitle, className, ...attrs }) => {
  return (
    <div>
      <Typography variant="body2" component="p" color="textSecondary">
        {subtitle}
      </Typography>
      <Typography variant="h5" component="h5" color="primary">
        {title}
      </Typography>
    </div>
  );
};

PageTitle.propTypes = {
  /**
   * The page title.
   */
  title: PropTypes.string,
  /**
   * The page subtitle.
   */
  subtitle: PropTypes.string,
};

export default PageTitle;
