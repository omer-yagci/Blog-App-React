import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import DashBoard from "../pages/Dashboard";
import Navbar from "../components/Navbar";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";
import UpdateBlog from "../pages/UpdateBlog";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="about" element={<About />} />
        <Route path="newblog" element={<NewBlog />} />
        <Route path="updateblog" element={<UpdateBlog />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;
