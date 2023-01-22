import React from "react";

const Product = (props) => {
    return (
        <tr>
            <td>{props.product.name}</td>
            <td className="product-details">
                <div className="product-quantity">
                    <button
                        className="minus"
                        onClick={(e) => props.decreaseQuantity(props.product._id)}
                    >
                        -
                    </button>
                    {props.product.quantity}
                    <button
                        className="plus"
                        onClick={(e) => props.increaseQuantity(props.product._id)}
                    >
                        +
                    </button>
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
