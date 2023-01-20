import express from "express";
import {signUp, signIn, signOut, status} from "../controllers/authControllers.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);
router.get("/status", status);

export default router;