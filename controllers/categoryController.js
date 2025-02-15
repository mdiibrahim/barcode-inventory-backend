const Category = require("../models/Category");

async function createCategory(req, res) {
  try {
    const { name } = req.body;
    const category = new Category({ name });

    await category.save();
    return res.status(201).json({ category });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating category", error: error.message });
  }
}

module.exports = { createCategory };
