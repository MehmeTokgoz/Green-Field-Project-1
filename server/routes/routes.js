import express from "express";
import productRoutes from "./productRoutes.js";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";
import checkAuth from "../utils/checkAuth.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/products", checkAuth, productRoutes);
router.use("/users", checkAuth, userRoutes);

export default router;