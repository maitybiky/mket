import React from "react";
import { useAccType } from "../../zustand/store";
import { Navigate } from "react-router";

const Main = () => {
  const { loginStatus, type } = useAccType();
  if (!loginStatus) {
    return <Navigate to="/sign-in" />;
  } else if (type === "seller") {
    return <Navigate to="/shop" />;
  } else if (type === "seller") {
    return <Navigate to="/home" />;
  }
};

export default Main;
