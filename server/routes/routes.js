import express from "express";
import productRoutes from "./productRoutes.js";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";
import checkAuth from "../utils/checkAuth.js";

//Defining routes seperately
const router = express.Router();

router.use("/auth", authRoutes);
//Check the authentication before go inside of productROutes and userRoutes
router.use("/products", checkAuth, productRoutes);
router.use("/users", checkAuth, userRoutes);

export default router;