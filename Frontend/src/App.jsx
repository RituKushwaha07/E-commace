import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";


import Navbar from "./components/Navbar";
import AddProduct from "./admin/AddProduct";
import ProductList from "./admin/ProductList";
import EditProduct from "./admin/EditProduct";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import CheckoutAddress from "./pages/CheckoutAddress";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Footer from "./components/Footer";
import { CartContext } from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />

        {/* Product Details */}
        <Route path="/product/:id" element={<ProductDetails />} />

        {/* Admin Routes */}
        <Route path="/admin/products" element={<ProductList />} />
        <Route path="/admin/products/add" element={<AddProduct />} />
        <Route path="/admin/products/edit/:id" element={<EditProduct />} />

        {/* ✅ ADD THIS */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout-address" element={<CheckoutAddress />} />
        <Route path="/checkout" element={<Checkout />} />
         <Route path="/order-success/:id" element={<OrderSuccess/>}/>

                   <Route path="/category/:category" element={<CartContext />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;