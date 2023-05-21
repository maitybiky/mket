import React from "react";
import { Navigate, Outlet } from "react-router";
import { useAccType } from "../../zustand/store";

const PublicRoute = () => {
  const { loginStatus } = useAccType();
  if (loginStatus) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

export default PublicRoute;
