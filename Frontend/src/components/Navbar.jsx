import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../api/axios";

export default function Navbar() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const loadCart = async () => {
      if (!userId) return setCartCount(0);

      try {
        const res = await api.get(`/cart/${userId}`);
        const total =
          res?.data?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

        setCartCount(total);
      } catch (err) {
        console.log(err);
      }
    };

    loadCart();
    window.addEventListener("cartUpdated", loadCart);

    return () => {
      window.removeEventListener("cartUpdated", loadCart);
    };
  }, [userId]);

  const logout = () => {
    localStorage.clear();
    setCartCount(0);
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow sticky-top">
      <div className="container-fluid px-4">

        {/* Logo */}
        <Link className="navbar-brand fw-bold fs-4 text-primary" to="/">
          🛍️ Ritu Store
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">

          {/* Left Links */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">Home</Link>
            </li>
          </ul>



          {/* Right Side */}
          <div className="d-flex align-items-center gap-3">

            {/* Cart */}
            <Link
              to="/cart"
              className="position-relative text-dark fs-5 text-decoration-none"
            >
              🛒
              {cartCount > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Auth */}
            {!userId ? (
              <>
                <Link to="/login" className="btn btn-outline-dark btn-sm">
                  Login
                </Link>
                <Link to="/signup" className="btn btn-primary btn-sm">
                  Signup
                </Link>
              </>
            ) : (
              <button onClick={logout} className="btn btn-outline-dark btn-sm">
                Logout
              </button>
            )}

          </div>
        </div>
      </div>
    </nav>
  );
}

