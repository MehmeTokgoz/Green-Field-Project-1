import express from "express";
import { getUserInfo } from "../controllers/userControllers.js";


//Creating routes to get user info
const router = express.Router();

router.get("/user", getUserInfo);

export default router;
