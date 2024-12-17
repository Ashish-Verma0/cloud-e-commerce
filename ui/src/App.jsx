import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";
import AddToCartPage from "./components/addToCart/AddToCart";
import ProfilePage from "./pages/ProfilePage";
import ProductListing from "./pages/ProductListing";
import BillingPage from "./pages/BillingPage";
import ErrorPage from "./pages/ErrorPage";
import LoginPage from "./components/login/Login";
import EmailVerifyPage from "./components/emailVerify/EmailVerify";
import ForgetPassword from "./components/forgetPassword/ForgetPassword";
import Signup from "./components/signup/Signup";
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/product-detail/:id"
          element={<ProductDetailPage />}
        />
        <Route exact path="/add-to-cart" element={<AddToCartPage />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route
          exact
          path="/product/:sub-Category"
          element={<ProductListing />}
        />
        <Route exact path="/billing/:id" element={<BillingPage />} />
        <Route exact path="*" element={<ErrorPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forgot-password" element={<ForgetPassword />} />
        <Route exact path="/email-verify" element={<EmailVerifyPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
