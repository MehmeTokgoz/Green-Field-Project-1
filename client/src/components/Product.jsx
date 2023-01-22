import React from "react";

const Product = ({ product, removeProduct }) => {
    
    return (
        <tr>
            <td>{product.name}</td>
            <td className="product-details">
                <div className="product-quantity">
                    <button className="minus">-</button>
                    {product.quantity}
                    <button className="plus">+</button>
                </div>
                <button className="update-product">Update</button>
                <button className="remove-product" onClick={() => removeProduct(product._id)}>Remove</button>
            </td>
        </tr>
    );
};

export default Product;
