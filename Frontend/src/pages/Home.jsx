import { useEffect, useState } from "react";
import api from "../api/axios";
import { Link } from "react-router-dom"; // ✅ fix

export default function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const loadProducts = async () => {
    try {
      const res = await api.get(
        `/products?search=${search}&category=${category}`
      );
      setProducts(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadProducts();
  }, [search, category]);

  const addToCart = async (productId) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please log in to add items to your cart.");
      return;
    }

    const res = await api.post(`/cart/add`, { userId, productId });

    const total = res.data.cart.items.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    );

    // const totalItems = res.data.cart.items.reduce(
    //   (sum, item) => sum + item.quantity,
    //   0
    // );



    localStorage.setItem("cartCount", total);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="container mt-4">

      {/* 🔍 Search + Filter */}
      <div className="card p-3 mb-4 shadow-sm">
        <div className="row g-3 align-items-center">

          <div className="col-md-6">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="form-control"
            />
          </div>

          <div className="col-md-3">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="form-select"
            >
              <option value="">All Categories</option>
              <option value="Laptops">Laptops</option>
              <option value="Mobiles">Mobiles</option>
              <option value="Tablets">Tablets</option>
            </select>
          </div>

        </div>
      </div>

      {/* 🛍️ Products Grid */}
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="col-md-3 mb-4">

              <div className="card h-100 shadow-sm">

                <Link to={`/product/${product._id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="card-img-top p-3"
                    style={{ height: "180px", objectFit: "contain" }}
                  />
                </Link>

                <div className="card-body">

                  <h6 className="card-title">
                    {product.title}
                  </h6>

                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <span className="fw-bold text-dark">
                      ₹{product.price}
                    </span>

                    <button
                      onClick={() => addToCart(product._id)}
                      className="btn btn-primary btn-sm"
                    >
                      Add
                    </button>
                  </div>

                </div>

              </div>

            </div>
          ))
        ) : (
          <p className="text-center">No products found</p>
        )}
      </div>

    </div>
  );
}