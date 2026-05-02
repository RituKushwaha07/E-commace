import { useEffect, useState } from "react";
import api from "../api/axios";
import { useParams } from "react-router-dom"; // ✅ fix

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const loadProduct = async () => {
    try {
      const res = await api.get("/products");
      const p = res.data.find((item) => item._id === id);
      setProduct(p);
    } catch (err) {
      console.error("Error loading product:", err);
    }
  };

  useEffect(() => {
    loadProduct();
  }, []);

  const addToCart = async () => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please login first");
      return;
    }

    const res = await api.post("/cart/add", {
      userId,
      productId: product._id,
    });

    const total = res.data.cart.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );

    localStorage.setItem("cartCount", total);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (!product) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">

        <div className="row">
          
          {/* Image */}
          <div className="col-md-5 text-center">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid"
              style={{ maxHeight: "250px", objectFit: "contain" }}
            />
          </div>

          {/* Details */}
          <div className="col-md-7">
            <h3 className="fw-bold">{product.title}</h3>

            <p className="text-muted mt-3">
              {product.description}
            </p>

            <h4 className="text-success mt-3">
              ₹{product.price}
            </h4>

            <button
              onClick={addToCart}
              className="btn btn-primary mt-4 px-4"
            >
              Add to Cart
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}