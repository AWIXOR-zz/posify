import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/authActions";

const { logout } = actions;

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [logout]);
  return null;
};

export default Logout;
