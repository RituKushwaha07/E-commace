import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function CheckoutAddress() {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    addressLine: "",
    city: "",
    state: "",
    pincode: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const saveAddress = async () => {
    await api.post("/address/add", {
      ...form,
      userId,
    });
    navigate("/checkout");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-lg-6">
          <div className="card shadow">
            <div className="card-body">

              <h4 className="mb-4 fw-bold text-center">
                Delivery Address
              </h4>

              {/* Form */}
              <form>

                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    className="form-control"
                    placeholder="Enter full name"
                    onChange={handleChange}
                  />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="text"
                    name="phone"
                    className="form-control"
                    placeholder="Enter phone number"
                    onChange={handleChange}
                  />
                </div>

                {/* Address */}
                <div className="mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="addressLine"
                    className="form-control"
                    placeholder="Street address"
                    onChange={handleChange}
                  />
                </div>

                {/* City + State */}
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City</label>
                    <input
                      type="text"
                      name="city"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">State</label>
                    <input
                      type="text"
                      name="state"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Pincode */}
                <div className="mb-3">
                  <label className="form-label">Pincode</label>
                  <input
                    type="text"
                    name="pincode"
                    className="form-control"
                    onChange={handleChange}
                  />
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={saveAddress}
                  className="btn btn-primary w-100"
                >
                  Save Address
                </button>

              </form>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}