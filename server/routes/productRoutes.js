import express from "express";
import {createProduct, getAllProducts, updateProduct, removeProduct} from "../controllers/productControllers.js";

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.put("/:id", updateProduct);
router.delete("/:id", removeProduct);

export default router;