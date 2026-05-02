const Product = require("../models/product");

// Create product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.log("CREATE PRODUCT ERROR:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get products
const getProducts = async (req, res) => {
  try {
    const { search, category } = req.query;

    let filter = {};

    // 🔍 Search by title
    if (search) {
      filter.title = { $regex: search, $options: "i" };
    }

    // 📂 Filter by category
    if (category) {
      filter.category = category;
    }

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.status(200).json(products);
  } catch (error) {
    console.log("GET PRODUCTS ERROR:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// Update product
const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Product updated successfully",
      updated,
    });
  } catch (error) {
    console.log("UPDATE PRODUCT ERROR:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log("DELETE PRODUCT ERROR:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {createProduct,getProducts,updateProduct,deleteProduct};