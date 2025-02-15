const axios = require("axios");
const Product = require("../models/Product");

// Get all products (optionally filtered by category)
async function getProductsByCategory(req, res) {
  try {
    const { category } = req.query; // Retrieve category from query parameters

    let products;
    if (category) {
      // Filter products by category
      products = await Product.find({ category });
    } else {
      // If no category is provided, return all products
      products = await Product.find();
    }

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.status(200).json({ products });
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
}

// Get product by barcode (fetching from DB or external API)
async function getProducts(req, res) {
  try {
    const { barcode } = req.params;

    if (!barcode) {
      return res.status(400).json({ message: "Barcode is required" });
    }

    // Check if the product exists in the local DB
    let product = await Product.findOne({ barcode });

    if (!product) {
      console.log("🌐 Product not found in DB. Fetching from External API...");

      // Fetch product details from the external API
      const response = await axios.get(
        `https://products-test-aci.onrender.com/product/${barcode}`
      );

      if (response.data.status && response.data.product) {
        const externalProduct = response.data.product;

        // Create a new product instance using the data from the external API
        product = new Product({
          barcode: externalProduct.barcode,
          name: externalProduct.description, // Use description as name
          description: externalProduct.description,
          material: externalProduct.material,
          category: "Uncategorized", // Default category
        });

        console.log("💾 Saving Product to DB:", product);

        // Save the new product to the database
        await product.save();

        console.log("✅ Product saved in DB:", product);

        return res.status(200).json({ product });
      } else {
        console.log("❌ Product not found in External API");
        return res.status(404).json({ message: "Product not found" });
      }
    }

    // If the product is found in the DB, return it
    return res.status(200).json({ product });
  } catch (error) {
    console.error("Error fetching product by barcode:", error);
    return res
      .status(500)
      .json({ message: "Error fetching product", error: error.message });
  }
}

// Update product's category
async function updateProductCategory(req, res) {
  try {
    const { barcode } = req.params;
    const { category } = req.body;

    if (!category) {
      return res.status(400).json({ message: "Category is required" });
    }

    // Find the product by barcode and update the category
    const product = await Product.findOneAndUpdate(
      { barcode },
      { category },
      { new: true } // Return the updated product
    );

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ product });
  } catch (error) {
    console.error("Error updating product category:", error);
    return res.status(500).json({
      message: "Error updating product category",
      error: error.message,
    });
  }
}

module.exports = { getProducts, getProductsByCategory, updateProductCategory };
