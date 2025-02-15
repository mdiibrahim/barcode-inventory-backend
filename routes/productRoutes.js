const express = require("express");
const {
  getProducts,
  getProductsByCategory,
  updateProductCategory,
} = require("../controllers/productController");

const router = express.Router();

// Route to get product by barcode
router.get("/:barcode", getProducts);

// Route to get all products (optionally filtered by category)
router.get("/", getProductsByCategory); // No barcode, just category filtering

// Route to update product category
router.put("/:barcode/category", updateProductCategory);

module.exports = router;
