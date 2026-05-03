import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../api/axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({
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
      const res = await api.post("/auth/login", form);

      console.log("LOGIN RESPONSE 👉", res.data); // 🔥 debug

      // ✅ Fix here
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id); // 👈 important

      toast.success("Login Successful 🎉");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (err) {
      console.log("LOGIN ERROR 👉", err.response);

      toast.error(err.response?.data?.message || "Login Failed ❌");
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
            <h3 className="text-center fw-bold mb-2">Welcome Back 👋</h3>
            <p className="text-center text-muted small mb-4">
              Login to continue
            </p>

            <form onSubmit={handleSubmit}>

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

              {/* Remember + Forgot */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label small">
                    Remember me
                  </label>
                </div>

                <span className="small text-primary" style={{ cursor: "pointer" }}>
                  Forgot?
                </span>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="btn btn-primary w-100 rounded-pill py-2 fw-semibold"
              >
                Login →
              </button>

            </form>

            {/* Footer */}
            <p className="text-center small mt-3 mb-0">
              Don't have an account?{" "}
              <span
                className="text-primary fw-semibold"
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </span>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}