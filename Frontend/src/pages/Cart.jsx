import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const userId = localStorage.getItem("userId");
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  const loadCart = async () => {
    if (!userId) return;
    const res = await api.get(`/cart/${userId}`);
    setCart(res.data);
  };

  useEffect(() => {
    loadCart();
  }, []);

  const removeItem = async (productId) => {
    await api.post(`/cart/remove`, { userId, productId });
    loadCart();
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const updateQty = async (productId, quantity) => {
    if (quantity === 0) {
      await removeItem(productId);
      return;
    }

    await api.post(`/cart/update`, { userId, productId, quantity });
    loadCart();
    window.dispatchEvent(new Event("cartUpdated"));
  };

  if (!cart) return <div className="text-center mt-5">Loading...</div>;

  const total = cart.items.reduce(
    (sum, item) => sum + item.productId.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 fw-bold">Your Cart</h2>

      {cart.items.length === 0 ? (
        <div className="alert alert-info">Your cart is empty.</div>
      ) : (
        <div className="row">

          {/* Cart Items */}
          <div className="col-lg-8">
            {cart.items.map((item) => (
              <div key={item.productId._id} className="card mb-3 shadow-sm">
                <div className="card-body d-flex align-items-center justify-content-between">

                  {/* Product Info */}
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.productId.image}
                      alt={item.productId.title}
                      className="rounded"
                      style={{ width: "70px", height: "70px", objectFit: "cover" }}
                    />

                    <div>
                      <h5 className="mb-1">{item.productId.title}</h5>
                      <p className="text-muted mb-0">
                        ${item.productId.price.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity */}
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        updateQty(item.productId._id, item.quantity - 1)
                      }
                    >
                      -
                    </button>

                    <span className="mx-2">{item.quantity}</span>

                    <button
                      className="btn btn-outline-secondary btn-sm"
                      onClick={() =>
                        updateQty(item.productId._id, item.quantity + 1)
                      }
                    >
                      +
                    </button>
                  </div>

                  {/* Price */}
                  <div className="fw-bold">
                    ${(item.productId.price * item.quantity).toFixed(2)}
                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeItem(item.productId._id)}
                    className="btn btn-sm btn-outline-danger"
                  >
                    Remove
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="col-lg-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="mb-3">Order Summary</h5>

                <div className="d-flex justify-content-between mb-2">
                  <span>Total</span>
                  <strong>${total.toFixed(2)}</strong>
                </div>

                <button
                  onClick={() => navigate("/checkout-address")}
                  className="btn btn-primary w-100 mt-3"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>

        </div>
      )}
    </div>
  );
}