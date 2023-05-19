import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import CustomerLayout from "./Layout/Customer/CustomerLayout"
import SellerLayout from "./Layout/Seller/SellerLayout";
import Home from "./Layout/Seller/Pages/Home";
import Shop from "./Layout/Seller/Pages/Shop";
import PhotoUpload from "./Component/ProductUpload";
import ShopDetails from "./Layout/Customer/Page/ShopDetails";
import { useAccType } from "./zustand/store";
import SignIn from "./Layout/Auth/Login";
function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route element={<SignIn />} path="/" />
          <Route element={<SellerLayout />}>
            <Route element={<Shop />} path="/shop" />
            <Route element={<PhotoUpload />} path="/upload-product" />
          </Route>
          <Route element={<CustomerLayout />}>
            <Route element={<Home />} path="/home" />
            <Route element={<ShopDetails />} path="/shop/:id" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
