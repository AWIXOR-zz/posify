import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions/authActions";
import { useStyles } from "../../components/assits/styles";
import {
  Grid,
  Button,
  Link,
  Typography,
  Paper,
  Icon,
  CircularProgress,
} from "@material-ui/core";
import Message from "../../components/UI/Message/Message";

function VerifyEmail() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth.verifyEmail);
  const { verifyEmail, clean } = actions;

  React.useEffect(() => {
    return () => {
      dispatch(clean);
    };
  });
  return (
    <Grid
      className={classes.padding8rem}
      container
      direction="column"
      justify="center"
      alignItems="center"
    >
      <Paper className={classes.paper}>
        <Grid className={classes.maxWidth25rem}>
          <Grid item className={classes.textCenter}>
            <Icon color="primary" fontSize="large">
              drafts
            </Icon>
          </Grid>
          <Grid item>
            <Typography variant="h4" color="primary" align="center">
              Verify email
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="overline" color="textPrimary" align="center">
              Please go to your email inbox, and verify your email.
            </Typography>
          </Grid>

          {!loading ? (
            <Grid item className={classes.textCenter}>
              <Button
                variant="contained"
                color="primary"
                className={classes.menuButton}
                onClick={() => dispatch(verifyEmail())}
              >
                Verify now
              </Button>
              <Button
                component={Link}
                variant="contained"
                color="secondary"
                href="/logout"
                underline="none"
                className={classes.removeLinkStyles}
              >
                Logout
              </Button>
            </Grid>
          ) : (
            <Grid item className={classes.textCenter}>
              <CircularProgress />
            </Grid>
          )}
          <Grid item>
            <Message error show={error}>
              {error}
            </Message>
          </Grid>
          <Grid item>
            <Message success show={error === false}>
              Message sent successfully!
            </Message>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
}

export default VerifyEmail;
