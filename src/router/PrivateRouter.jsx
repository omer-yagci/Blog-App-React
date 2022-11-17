import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { displayName } = useSelector((state) => state.auth.user);
  // console.log(displayName);
  return displayName ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
