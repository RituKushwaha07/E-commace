const express = require("express");
const router = express.Router();
const { createProduct, getProducts, updateProduct, deleteProduct } = require("../controllers/productController");


router.post("/add", createProduct);
router.get("/", getProducts);
router.put("/update/:id", updateProduct);
router.delete("/delete/:id", deleteProduct);



module.exports = router;