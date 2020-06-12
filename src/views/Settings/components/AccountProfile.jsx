import React from "react";
import clsx from "clsx";
// import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {},
  details: {
    display: "flex",
  },
  avatar: {
    marginLeft: "auto",
    height: 110,
    width: 100,
    flexShrink: 0,
    flexGrow: 0,
  },
  nameColor: {
    color: "#34495e",
  },
}));

const AccountProfile = ({ profile }) => {
  const classes = useStyles();
  const { fullName, businessName } = profile;

  return (
    <Card className={clsx(classes.root)}>
      <CardContent>
        <div className={classes.details}>
          <div>
            <Typography gutterBottom variant="h4" className={classes.nameColor}>
              {fullName}
            </Typography>
            <Typography gutterBottom color="textSecondary" variant="body1">
              LC. {businessName}
            </Typography>
          </div>
          <Avatar className={classes.avatar} />
        </div>
      </CardContent>
      <Divider />
      <CardActions>
        <Button color="secondary" variant="text">
          Delete Profile
        </Button>
      </CardActions>
    </Card>
  );
};

export default AccountProfile;
