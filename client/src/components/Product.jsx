import React from "react";

const Product = (props) => {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td className="product-details">
                <div className="product-quantity">
                    <button className="minus">-</button>
                    {props.product.quantity}
                    <button className="plus">+</button>
                </div>
                <button
                    className="update-product"
                    onClick={() => {
                        props.productToUpdate(props.product);
                        props.togglePopUp();
                    }}
                >
                    Update
                </button>
                <button
                    className="remove-product"
                    onClick={() => props.removeProduct(props.product._id)}
                >
                    Remove
                </button>
            </td>
        </tr>
    );
};

export default Product;
