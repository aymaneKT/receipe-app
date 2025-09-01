import express from "express";
import {
  createReceipe,
  fetchReceipes,
  fetchReceipeById,
  updateReceipe,
  deleteReceipe,
} from "../controllers/ReceipeController.js";

export const router = express.Router();

router.post("/", createReceipe);
router.get("/", fetchReceipes);
router.get("/:id", fetchReceipeById);
router.put("/:id", updateReceipe);
router.delete("/:id", deleteReceipe);
