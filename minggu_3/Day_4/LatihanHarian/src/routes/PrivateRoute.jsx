import React from "react";
import { Navigate, Outlet } from "react-router-dom";


const isAuthenticated = () => {
  return sessionStorage.getItem("authToken") === "my_secret_token";
};

export default function PrivateRoute() {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
}
