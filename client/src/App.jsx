import React from "react";
import { Toaster } from "react-hot-toast";
import { Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <>
            <Toaster
                position="top-right"
                toastOptions={{
                    style: { fontSize: "1.8rem" },
                }}
            ></Toaster>
        </>
    );
};

export default App;
