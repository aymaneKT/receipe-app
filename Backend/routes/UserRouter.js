import express from "express";
import { signIn, registerUser } from "../controllers/UserController.js";

export const router = express.Router();

router.post("/register", registerUser);
router.post("/signin", signIn);
