import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/signup", form);

      toast.success("Signup Successful 🎉");

      navigate("/login");

    } catch (err) {
      toast.error(err.response?.data?.message || "Signup Failed ❌");
    }
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-white">

      <div className="row w-100 justify-content-center">

        {/* 🔥 Wider column */}
        <div className="col-md-6 col-lg-5 col-xl-4 d-flex justify-content-center">

          {/* 🔥 Card */}
          <div
            className="card shadow-lg rounded-4 p-4 glass w-100"
            style={{ maxWidth: "420px" }}
          >

            {/* Header */}
            <h3 className="text-center fw-bold mb-2">Create Account 🚀</h3>
            <p className="text-center text-muted small mb-4">
              Sign up to get started
            </p>

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="mb-3">
                <label className="form-label small fw-semibold">
                  Full Name
                </label>

                <div className="input-group">
                  <span className="input-group-text bg-white">👤</span>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={form.name}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="mb-3">
                <label className="form-label small fw-semibold">
                  Email Address
                </label>

                <div className="input-group">
                  <span className="input-group-text bg-white">📧</span>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={form.email}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="mb-3">
                <label className="form-label small fw-semibold">
                  Password
                </label>

                <div className="input-group">
                  <span className="input-group-text bg-white">🔒</span>

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter Password"
                    value={form.password}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />

                  <span
                    className="input-group-text bg-white"
                    style={{ cursor: "pointer" }}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </div>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill py-2 fw-semibold"
              >
                Sign Up →
              </button>

            </form>

            {/* Footer */}
            <p className="text-center small mt-3 mb-0">
              Already have an account?{" "}
              <span
                className="text-primary fw-semibold"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}