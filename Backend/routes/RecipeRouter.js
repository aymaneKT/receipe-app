import express from "express";
import {
  createReceipe,
  fetchReceipes,
  fetchReceipeById,
  updateReceipe,
  deleteReceipe,
} from "../controllers/ReceipeController.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});
const upload = multer({ storage: storage });
export const router = express.Router();

router.post("/", upload.single("image"), createReceipe);
router.get("/", fetchReceipes);
router.get("/:id", fetchReceipeById);
router.put("/:id", updateReceipe);
router.delete("/:id", deleteReceipe);
