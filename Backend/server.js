require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productsRoutes");
const cartRoutes = require("./routes/cart");
const addressRoutes = require("./routes/address");
const orderRoutes = require("./routes/order");
const serviceRoutes = require("./routes/serviceRoutes");
const contactRoutes = require("./routes/contact-Routes");


// Middleware
app.use(express.json());
app.use(cors());


app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address", addressRoutes);
app.use("/api/order", orderRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/contact", contactRoutes);


// DB connect
connectDB();



// Port
// const PORT = process.env.PORT || 5000;

// Server start
// app.listen(PORT, () => {
//   console.log(`Server is running on ${PORT}`);
// });

module.exports = app
