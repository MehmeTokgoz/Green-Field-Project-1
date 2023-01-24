import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoutes = () => {
    const { auth } = useAuth();
    if (auth === undefined) return "loading";
//If user is logged in render the home page otherwise return to authentication page
    return auth == true ? <Outlet /> : <Navigate to="/auth" />;
};

export default PrivateRoutes;
