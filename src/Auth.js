import React, { useState, useEffect } from "react";
import firebase from "./firebase/firebase.utils";

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(setCurrentUser);
  }, []);
  return <div></div>;
};

export default AuthProvider;
