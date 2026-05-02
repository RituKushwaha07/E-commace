import { createContext, useState, useEffect, useCallback } from "react";
import api from "../api/axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);
  const token = localStorage.getItem("token");

  const fetchCart = useCallback(async () => {
    if (!token) {
      setCartCount(0);
      return;
    }
    try {
      const response = await api.get("/cart", {
        headers: { Authorization: `Bearer ${token}` },
      });
      // Adjust the path according to your API response structure
      const total = response.data?.products?.reduce(
        (sum, item) => sum + (item.quantity || 0),
        0
      ) || 0;
      setCartCount(total);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
      setCartCount(0);
    }
  }, [token]);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return (
    <CartContext.Provider value={{ cartCount, refreshCart: fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};