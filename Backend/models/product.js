const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    category: String,
    image: String,
    stock: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // ✅ correct place
  }
);

module.exports = mongoose.model("Product", productSchema);