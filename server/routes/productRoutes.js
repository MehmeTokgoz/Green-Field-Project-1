import express from "express";
import {createProduct, getAllProducts, getOneProduct, updateProduct, removeProduct} from "../controllers/productControllers.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.get("/:id", getOneProduct);
router.put("/:id", updateProduct);
router.delete("/:id", removeProduct);

export default router;