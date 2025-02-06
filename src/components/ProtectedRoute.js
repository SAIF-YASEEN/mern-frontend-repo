// components/ProtectedRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("jwtToken");

  if (!token) {
    return <Redirect to="/login" />;
  }

  try {
    jwt_decode(token); // Decoding the JWT to check if it's valid
    return <Route {...rest} component={Component} />;
  } catch (error) {
    return <Redirect to="/login" />;
  }
};

export default ProtectedRoute;
