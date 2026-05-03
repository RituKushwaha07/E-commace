const express = require("express");
const router = express.Router();
const {addToCart, removeItem, updateQuantity, getCart} = require("../controllers/cartController");

router.post("/add", addToCart);
router.post("/remove", removeItem);
router.post("/update", updateQuantity);
router.get("/:userId", getCart);



module.exports = router;
