import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import ProductsList from "../components/ProductsList";
import UpdateProduct from "../components/UpdateProduct";
import "./Home.css";

const Home = () => {
    const [productList, setProductList] = useState([]);
    const [newProductName, setNewProductName] = useState("");
    const [newProductQuantity, setNewProductQuantity] = useState("");
    const [productToUpdate, setProductToUpdate] = useState({});
    const [addingNewProduct, setAddingNewProduct] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        getAllProducts();
    }, []);

    const getAllProducts = async () => {
        try {
            const { data } = await axios.get("/api/products");
            const sortedArray = data.reverse();
            setProductList(sortedArray);
        } catch (error) {
            console.log(error);
        }
    };

    const showForm = () => {
        setAddingNewProduct(!addingNewProduct);
    };

    const addProduct = async (e) => {
        e.preventDefault();
        if (newProductName.length === 0 || newProductQuantity.length === 0) {
            toast.error("Name and quantity are required");
            return;
        }
        try {
            const { data } = await axios.post("/api/products", {
                name: newProductName,
                quantity: newProductQuantity,
            });
            toast.success("New Product Created!");
            setProductList([{ ...data }, ...productList]);
            setNewProductName("");
            setNewProductQuantity("");
            setAddingNewProduct(false);
        } catch (error) {
            console.log(error);
        }
    };

    const togglePopUp = () => {
        setShowPopUp(!showPopUp);
    };

    const updateProduct = (product) => {
        const newList = [...productList];
        newList.forEach((item) => {
            if (item._id === product._id) {
                item.name = product.name;
                item.quantity = product.quantity;
            }
        });
        toast.success("Product Updated Successfully!");
        setProductList(newList);
    };

    const updateQuantity = async (e, id) => {
        try {
            const product = productList.find((product) => id === product._id);
            const newQuantity =
                e.target.className === "minus"
                    ? (Number(product.quantity) - 1).toString()
                    : (Number(product.quantity) + 1).toString();
            if (newQuantity < 0) {
                toast.error("Quantity cannot be a negative number!");
                return;
            }
            await axios.put(`/api/products/quantity/${id}`, {
                quantity: newQuantity,
            });
            const newList = [...productList];
            newList.forEach((item) => {
                if (item._id === id) {
                    item.quantity = newQuantity;
                }
            });
            setProductList(newList);
        } catch (error) {
            console.log(error);
        }
    };

    const removeProduct = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`);
            toast.success("Product Deleted!");
            setProductList(productList.filter((product) => product._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Layout>
            <div className="home-container">
                <Navbar />
                <button type="button" className="addProduct" onClick={showForm}>
                    Add Product
                </button>
                {addingNewProduct && (
                    <form className="product-form" onSubmit={addProduct}>
                        <input
                            type="text"
                            value={newProductName}
                            placeholder="Product Name"
                            onChange={(e) => setNewProductName(e.target.value)}
                        />
                        <input
                            type="text"
                            value={newProductQuantity}
                            placeholder="Quantity"
                            onChange={(e) =>
                                setNewProductQuantity(e.target.value)
                            }
                        />
                        <button className="product-form-button" type="submit">
                            Add
                        </button>
                    </form>
                )}
                <ProductsList
                    productList={productList}
                    removeProduct={removeProduct}
                    productToUpdate={(product) => setProductToUpdate(product)}
                    updateQuantity={updateQuantity}
                    togglePopUp={togglePopUp}
                />
            </div>
            {showPopUp && (
                <UpdateProduct
                    product={productToUpdate}
                    updateProduct={updateProduct}
                    togglePopUp={togglePopUp}
                />
            )}
        </Layout>
    );
};

export default Home;
