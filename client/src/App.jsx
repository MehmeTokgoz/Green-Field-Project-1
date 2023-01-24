import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import PrivateRoutes from "./components/PrivateRoutes";

const App = () => {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: { fontSize: "1.8rem" },
        }}
      ></Toaster>

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/auth" element={<Auth />}></Route>
      </Routes>
    </>
  );
};

export default App;
