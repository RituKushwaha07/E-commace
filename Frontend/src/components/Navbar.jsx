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
    <>
      <header className="navbar-section shadow sticky-top bg-white">
        <nav className="navbar navbar-expand-lg py-1">
          <div className="container-fluid px-4">
            {/* Logo */}
            <div className="logo-section ms-4">
              <Link to="/">
                <img
                  src="https://pagegpt.pro/api/utilities/image/ecommerce-logo-maker/confirmed/1694711464777-71857.png"
                  alt="logo"
                  width="115"
                  
                />
              </Link>
            </div>

            {/* Toggle */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
              {/* Nav Links */}
              {/* <ul className="navbar-nav mx-auto nav-link gap-3"> */}
                <ul className="navbar-nav ms-auto nav-link gap-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/services">Service</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sections">Sections</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/gallery">Gallery</Link>
                </li>
              </ul>

              {/* Right Side */}
              <div className="d-flex align-items-center gap-3">
                {/* Cart */}
                <Link to="/cart" className="position-relative text-dark fs-4">
                  🛒
                  {cartCount > 0 && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* Auth - Beautiful Login & Signup Buttons */}
                {!userId ? (
                  <div className="d-flex gap-2">

                    {/* Login */}
                    { <Link
                      to="/login"
                      className="btn btn-primary px-4 py-2 rounded-pill fw-semibold"
                    >
                      Login
                    </Link> }

                    {/* Signup */}
                    { <Link
                      to="/signup"
                      className="btn btn-primary px-4 py-2 rounded-pill fw-semibold"
                    >
                      Signup
                    </Link> }

                  </div>
                ) : (
                  <button
                    onClick={logout}
                    className="btn btn-primary px-4 py-2 rounded-pill fw-semibold"
                  >
                    Logout
                  </button>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}