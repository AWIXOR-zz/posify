import { makeStyles } from "@material-ui/core/styles";
const drawerWidth = 240;
// const theme = useTheme();

export const useStyles = makeStyles((theme) => ({
  containerAll: {
    display: "flex",
  },

  paddingTop5: {
    paddingTop: theme.spacing(5),
  },
  paddingTop6: {
    paddingTop: theme.spacing(15),
  },
  form: {
    textAlign: "center",
  },

  justifyContent: {
    justifyContent: "center",
    marginTop: theme.spacing(2),
  },
  marginTop: {
    marginTop: theme.spacing(2),
  },
  formWrapper: {
    maxWidth: "40rem",
    margin: "0 auto",
    padding: "3em 8rem",
  },
  maxWidth25rem: {
    maxWidth: "25rem",
  },
  padding8rem: {
    padding: "8rem 8rem",
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
  menuButton: {
    marginRight: theme.spacing(2),
  },
  removeLinkStyles: {
    textDecoration: "none",
    "&:hover": {
      color: "white",
    },
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  navbarWraper: {
    justifyContent: "space-between",
  },
  userAcionsBtn: {
    minWidth: theme.spacing(4),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  sidebarFooter: {
    height: "35px",
  },
  sidebarHeaderP: {
    margin: "auto",
  },
  sidebarFooterP: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    // padding: theme.spacing(1),
  },
  salesPaper: {
    maxWidth: 936,
    margin: "auto",
    overflow: "hidden",
  },
  formControl: { width: "100%" },
  searchBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
  },
  allItems: { flexGrow: 1 },
  contentWrapper: {
    margin: "40px 16px",
  },
  cardPadding: {
    padding: theme.spacing(2),
  },
  buttonMargin: {
    margin: theme.spacing(1),
  },
  productImage: {
    display: "flex",
    backgroundColor: `rgb(28, 32, 37)`,
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    width: "68px",
    height: "68px",
  },
  inStock: {
    color: "#4caf50",
  },
  outStock: {
    color: "#f44336",
  },
  textCenter: { textAlign: "center" },
}));
