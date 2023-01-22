import express from "express";
import {signUp, signIn, signOut, status} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.get("/signOut", signOut);
router.get("/status", status);

export default router;