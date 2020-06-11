import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions/authActions";

const { signOut } = actions;

const Logout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(signOut());
  });
  return null;
};

export default Logout;
