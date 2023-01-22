import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";
import "./Home.css";

const Home = () => {
  return (
    <Layout>
      <div className="home-container">
        <Navbar />
        <ProductsList />
      </div>
    </Layout>
  );
};

export default Home;
