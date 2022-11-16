import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../pages/Dashboard";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        {/* <Route path="turkeyprovinces" element={<TurkeyProvinces />} /> */}
        {/* <Route path="/weather:cityName" element={<Weather />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
