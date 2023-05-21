import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomerLayout from "./Layout/Customer/CustomerLayout";
import SellerLayout from "./Layout/Seller/SellerLayout";
import Home from "./Layout/Seller/Pages/Home";
import Shop from "./Layout/Seller/Pages/Shop";
import PhotoUpload from "./Component/ProductUpload";
import ShopDetails from "./Layout/Customer/Page/ShopDetails";
import { useAccType } from "./zustand/store";
import SignIn from "./Layout/Auth/Login";
import PublicRoute from "./Layout/Auth/PublicRoute";
import SignUp from "./Layout/Auth/SignUp";
import Main from "./Layout/Main/Main";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Main />} path="*" />
          <Route element={<Main />} path="/" />
          <Route element={<Home />} path="/market" />
          <Route element={<PublicRoute />}>
            <Route element={<SignIn />} path="/sign-in" />
            <Route element={<SignUp />} path="/sign-up" />
          </Route>
          <Route element={<SellerLayout />}>
            <Route element={<Shop />} path="/shop" />
            <Route element={<PhotoUpload />} path="/upload-product" />
          </Route>
          <Route element={<CustomerLayout />}>
           
            <Route element={<ShopDetails />} path="/shop/:id" />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
