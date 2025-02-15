const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  barcode: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, default: "Uncategorized" },
  material: { type: String, required: true },
  imageUrl: { type: String }, // Optional field for image URL
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
