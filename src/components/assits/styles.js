import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  form: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  formWrapper: {
    height: "100%",
  },
  formInput: {
    flexGrow: 0,
    margin: theme.spacing(1),
  },
  formButton: {
    margin: theme.spacing(2),
    fontWeight: 300,
  },
}));
