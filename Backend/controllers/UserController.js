import { generateToken } from "../middleware/token.js";
import { User } from "../models/UserSchema.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
export const registerUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required !" });
    }

    const isUserExisting = await User.findOne({ email });
    if (isUserExisting)
      return res.status(400).json({ message: "User already exist" });
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ email, password: hashedPassword });
    const token = generateToken(email, newUser._id);
    await newUser.save();
    return res
      .status(201)
      .json({ message: "User registred successfully", token, newUser });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
export const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required !" });
    }

    const user = await User.findOne({ email: email });
    const match = await bcrypt.compare(password, user.password);
    if (user && match) {
      const token = generateToken(email, user._id);
      return res.status(200).json({ message: "Login successful", token, user });
    }
    return res.status(404).json({ message: "Invalid email or password" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
