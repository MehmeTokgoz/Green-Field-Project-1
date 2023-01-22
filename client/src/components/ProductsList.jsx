import React, { useState, useEffect } from "react";
import axios from "axios";
import Product from "./Product";
import { toast } from "react-hot-toast";

const ProductsList = (props) => {
// console.log(props);
    return (
        <div className="list-container">
            {props.productList.length > 0 ? (
                <table className="list-table">
                    <tbody>
                        {props.productList.map((product) => (
                            <Product
                                product={product}
                                key={product._id}
                                removeProduct={props.removeProduct}
                                togglePopUp={props.togglePopUp}
                                productToUpdate={props.productToUpdate}
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
