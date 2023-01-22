import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { toast } from "react-hot-toast";

const ProductsList = () => {
    const [list, setList] = useState([]);
    const [addingNewProduct, setAddingNewProduct] = useState(false);
    const [newProductName, setNewProductName] = useState("");
    const [newProductQuantity, setNewProductQuantity] = useState("");

    const addNewProduct = async (e) => {
        e.preventDefault();
        if (newProductName.length === 0 || newProductQuantity.length === 0) {
            toast.error("Name and quantity are required");
            return;
        };
        try {
            const {data} = await axios.post("/api/products", {
                name: newProductName,
                quantity: newProductQuantity
            });
            toast.success("New Task Created!");
            setList([{...data},...list]);
            setNewProductName("");
            setNewProductQuantity("");
            setAddingNewProduct(false);
        } catch (error) {
            console.log(error);
        };
    };

    const showForm = () => {
        setAddingNewProduct(!addingNewProduct);
    };

    const getProducts = async () => {
        try {
            const { data } = await axios.get("/api/products");
            const sortedArray = data.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            );
            setList(sortedArray);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);

    const removeProduct = async (id) => {
        try {
            await axios.delete(`/api/products/${id}`);
            toast.success("Task Deleted");
            setList(list.filter((product) => product._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="list-container">
            <button type="button" className="addProduct" onClick={showForm}>
                Add Product
            </button>

            {addingNewProduct && (
                <form className="product-form" onSubmit={addNewProduct}>
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
                        onChange={(e) => setNewProductQuantity(e.target.value)}
                    />
                    <button className="product-form-button" type="submit">Add</button>
                </form>
            )}

            {list.length > 0 ? (
                <table className="list-table">
                    {/* <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                        </tr>
                    </thead> */}
                    <tbody>
                        {list.map((product) => (
                            <Product
                                product={product}
                                key={product._id}
                                removeProduct={removeProduct}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <h1>No products found.</h1>
            )}
        </div>
    );
};

export default ProductsList;
