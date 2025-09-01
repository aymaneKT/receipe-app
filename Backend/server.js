import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router as recipeRouter } from "./routes/RecipeRouter.js";
import { router as userRouter } from "./routes/UserRouter.js";
import { connectDB } from "./config/DataBase.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use("/recipes", recipeRouter);
app.use("/", userRouter);
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
