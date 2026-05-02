import { useState, useEffect } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [cart, setCart] = useState(null);

  useEffect(() => {
    if (!userId) return;

    api.get(`/cart/${userId}`).then((res) => setCart(res.data));

    api.get(`/address/${userId}`).then((res) => {
      setAddresses(res.data);
      setSelectedAddress(res.data[0]);
    });
  }, []);

  if (!cart) return <div className="text-center mt-5">Loading...</div>;

  const total =
    cart?.items?.reduce(
      (sum, item) => sum + item.productId.price * item.quantity,
      0
    ) || 0;

  const placeOrder = async () => {
    if (!selectedAddress) {
      alert("Please select address");
      return;
    }

    const res = await api.post("/order/place", {
      userId,
      address: selectedAddress,
    });

    navigate(`/order-success/${res.data.orderId}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4">Checkout</h2>

      <div className="row">

        {/* LEFT: ADDRESS */}
        <div className="col-lg-7">
          <div className="card shadow-sm mb-4">
            <div className="card-body">

              <h5 className="mb-3">Select Delivery Address</h5>

              {addresses.length === 0 ? (
                <div className="alert alert-warning">
                  No address found
                </div>
              ) : (
                addresses.map((addr) => (
                  <div
                    key={addr._id}
                    className={`form-check border rounded p-3 mb-3 ${
                      selectedAddress?._id === addr._id
                        ? "border-primary"
                        : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="address"
                      className="form-check-input"
                      checked={selectedAddress?._id === addr._id}
                      onChange={() => setSelectedAddress(addr)}
                    />

                    <label className="form-check-label ms-2">
                      <strong>{addr.fullName}</strong>
                      <p className="mb-1">
                        {addr.addressLine}, {addr.city}, {addr.state} - {addr.pincode}
                      </p>
                      <small>📞 {addr.phone}</small>
                    </label>
                  </div>
                ))
              )}

            </div>
          </div>
        </div>

        {/* RIGHT: SUMMARY */}
        <div className="col-lg-5">
          <div className="card shadow-sm">
            <div className="card-body">

              <h5 className="mb-3">Order Summary</h5>

              {cart.items.map((item) => (
                <div
                  key={item.productId._id}
                  className="d-flex justify-content-between mb-2"
                >
                  <span>{item.productId.title}</span>
                  <span>
                    ₹{item.productId.price} × {item.quantity}
                  </span>
                </div>
              ))}

              <hr />

              <div className="d-flex justify-content-between">
                <strong>Total</strong>
                <strong>₹{total}</strong>
              </div>

              <button
                onClick={placeOrder}
                className="btn btn-success w-100 mt-3"
              >
                Place Order (COD)
              </button>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}