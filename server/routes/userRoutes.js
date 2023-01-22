import express from "express";
import { getUserInfo } from "../controllers/userControllers.js";

const router = express.Router();

router.get("/user", getUserInfo);

export default router;
