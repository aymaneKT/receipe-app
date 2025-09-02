import express from "express";
import {
  createReceipe,
  fetchReceipes,
  fetchReceipeById,
  updateReceipe,
  deleteReceipe,
} from "../controllers/ReceipeController.js";
import { upload } from "../middleware/multer.js";
import { auth } from "../middleware/auth.js";
export const router = express.Router();

router.post("/", auth, upload.single("image"), createReceipe);
router.get("/", fetchReceipes);
router.get("/:id", fetchReceipeById);
router.put("/:id", updateReceipe);
router.delete("/:id", deleteReceipe);
