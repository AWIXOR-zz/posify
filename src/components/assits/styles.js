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
    width: "100%",
    maxWidth: "40rem",
    margin: "0 auto",
    borderRadius: "0.7rem",
    padding: "10rem 8rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    padding: `${theme.spacing(2)}px ${theme.spacing(5)}px`,
  },
  formInput: {
    flexGrow: 0,
    marginBottom: theme.spacing(1),
  },
  textField: {
    width: `100%`,
  },
  formButton: {
    margin: theme.spacing(2),
    fontWeight: 300,
  },
}));
