import "./UpdateProduct.css";
import React, { useState } from "react";
import axios from "axios";

function UpdateProduct(props) {
    const [productName, setProductName] = useState(props.product.name);
    const [productQuantity, setProductQuantity] = useState(props.product.quantity);

    const updateProduct = () => {
        //If input values are empty, close the window and return
        if (productName.trim() === "" || productQuantity.trim() === "") {
            props.togglePopUp();
        } else {
            //Update the product
            axios
                .put(`/api/products/${props.product._id}`, {
                    _id: props.product._id,
                    name: productName,
                    quantity: productQuantity,
                })
                .then((res) => {
                    props.togglePopUp();
                    props.updateProduct(res.data);
                })
                .catch((error) => console.log(error));
        }
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <input
                    type="text"
                    placeholder="Name . . ."
                    value={productName}
                    onChange={(event) => setProductName(event.target.value)}
                />
                <input
                    type="text"
                    placeholder="Quantity . . ."
                    value={productQuantity}
                    onChange={(event) => setProductQuantity(event.target.value)}
                />
                <button onClick={() => updateProduct()}>Update</button>
            </div>
        </div>
    );
}

export default UpdateProduct;
