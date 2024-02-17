import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import ProtectedRoute from "../routers/ProtectedRoute";
import Favourites from "../pages/Favourites";
import Thankyou from "../pages/Thankyou";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="check-out"
        element={
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        }
      />
      <Route path="favourites" element={<Favourites />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="thankyou" element={<Thankyou />} />
    </Routes>
  );
};

export default Routers;
