import React from "react";
import { Route } from "react-router-dom";
import useSecurity from "./useSecurity";
import Login from "./Login";

function SecureRoute(props) {
  const { loggedIn } = useSecurity();

  return <Route {...props}>{loggedIn ? props.children : <Login />}</Route>;
}

export default SecureRoute;
