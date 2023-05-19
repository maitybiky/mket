import React from "react";
import { Navigate, Outlet } from "react-router";
import BottomNavigationComp from "../../Component/BottomNavigation";
import { useAccType } from "../../zustand/store";

const CustomerLayout = () => {
  const { loginStatus, type } = useAccType((state) => state);
  return (
    <>
      {loginStatus && type === "user" ? (
        <>
          <Outlet />
          <BottomNavigationComp />
        </>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default CustomerLayout;
