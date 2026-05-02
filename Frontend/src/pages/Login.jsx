import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import api from "../api/axios";
import { toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // 👈 icon import

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const [msg, setMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ toggle state
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

      // 🔐 Save token
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.user.id);

      setMsg("Login Successful");

      setTimeout(() => {
        navigate("/");
      }, 1000);

    } catch (err) {
      setMsg(err.response?.data?.message || "An error occurred");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      
      <div className="card shadow p-4" style={{ width: "350px" }}>
        
        <h3 className="text-center mb-3">Login to Your Account</h3>

        {msg && (
          <div className="alert alert-danger text-center py-2">
            {msg}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          
          {/* Email */}
          <div className="mb-3">
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

          {/* Password with Icon */}
          <div className="mb-3 position-relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              className="form-control pe-5"
              required
            />

            {/* Eye Icon */}
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={{
                position: "absolute",
                right: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                cursor: "pointer",
                color: showPassword ? "#6366f1" : "#888",
                fontSize: "18px"
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>

        </form>

      </div>
    </div>
  );
}