import Product from "../models/Product.js";
import createError from "../utils/createError.js";

export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find({ user: req.user.id });
        return res.status(200).json(products)
    } catch (error) {
        return next(error);
    };
};

export const getOneProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id).exec();
        // console.log(product);
        return res.status(200).json(product);
    } catch (error) {
        return next(error);
    };
};

export const createProduct = async (req, res, next) => {
    try {
        const newProduct = new Product({
            name: req.body.name,
            quantity: req.body.quantity,
            user: req.user.id,
        });
        const savedProduct = await newProduct.save();
        return res.status(201).json(savedProduct);
    } catch (error) {
        return next(error);
    };
};

export const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id).exec();
        if (!product) return next(createError({status: 404, message: "No products found"}));
        if (product.user.toString() !== req.user.id) return next(createError({status: 401, message: "This is not your product."}));
        
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            name : req.body.name,
            quantity : req.body.quantity,
        }, {new: true});
        return res.status(200).json(updatedProduct);
    } catch (error) {
        return next(error);
    };
};

export const updateQuantity = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id).exec();
        if (!product) return next(createError({status: 404, message: "No products found"}));
        if (product.user.toString() !== req.user.id) return next(createError({status: 401, message: "This is not your product."}));
        
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            quantity : req.body.quantity,
        }, {new: true});
        return res.status(200).json(updatedProduct);
    } catch (error) {
        return next(error);
    };
};

export const removeProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id).exec();
        if (!product) return next(createError({status: 404, message: "No products found"}));
        if (product.user.toString() !== req.user.id) return next(createError({status: 401, message: "This is not your product."}));
        
        await Product.findByIdAndDelete(req.params.id);
        return res.status(200).json("Product Deleted.");
    } catch (error) {
        next(error);
    };
};