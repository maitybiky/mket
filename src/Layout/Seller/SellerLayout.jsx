import React from "react";
import { Navigate, Outlet } from "react-router";
import "./seller.css";
import { useAccType } from "../../zustand/store";

const SellerLayout = () => {
  const { loginStatus, type } = useAccType((state) => state);
  return (
    <>{loginStatus && type === "seller" ? <Outlet /> : <Navigate to={"/"} />}</>
  );
};

export default SellerLayout;
