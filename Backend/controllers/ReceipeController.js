import { Receipe } from "../models/ReceipeSchema.js";
export const createReceipe = async (req, res) => {
  try {
    const { title, ingredients, instructions } = req.body;

    const image = req.file?.filename;
    if (!title || !ingredients || !instructions) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const newReceipe = await Receipe.create({
      title,
      ingredients,
      instructions,
      image,
      createdBy: req.user.id,
    });
    res
      .status(201)
      .json({ message: "Receipe created successfully", newReceipe });
  } catch (error) {
    console.error("Error creating receipe:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const fetchReceipes = async (req, res) => {
  try {
    const receipes = await Receipe.find();
    res.status(200).json(receipes);
  } catch (error) {
    console.error("Error fetching receipes:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const fetchReceipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const receipe = await Receipe.findById(id);
    if (!receipe) {
      return res.status(404).json({ message: "Receipe not found" });
    }
    res.status(200).json(receipe);
  } catch (error) {
    console.error("Error fetching receipe:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const updateReceipe = async (req, res) => {
  const { id } = req.params;
  const { title, ingredients, instructions } = req.body;

  try {
    const receipe = await Receipe.findByIdAndUpdate(
      id,
      {
        title,
        ingredients,
        instructions,
      },
      { new: true }
    );

    if (!receipe) {
      return res.status(404).json({ message: "Receipe not found" });
    }
    res.status(200).json({ message: "Recipe updated successfully", receipe });
  } catch (error) {
    console.error("Error fetching receipe:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteReceipe = async (req, res) => {
  const { id } = req.params;
  try {
    const receipe = await Receipe.findByIdAndDelete(id);
    if (!receipe) {
      return res.status(404).json({ message: "Receipe not found" });
    }
    res.status(200).json({ message: "Recipe deleted successfully" });
  } catch (error) {
    console.error("Error fetching receipe:", error.message);
    res.status(500).json({ message: "Server Error" });
  }
};
