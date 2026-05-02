import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiAmericanexpress } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5" role="contentinfo" aria-label="Footer">
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-md-4">
            <h5 className="fw-bold">Ritu Store</h5>
            <p className="small">
              Best shopping experience with quality products and fast delivery. 
              🛜 30‑day returns & free shipping on orders over $50.
            </p>
            {/* Trust badges (static example) */}
            <div className="mt-2">
              <span className="badge bg-secondary me-1">🔒 Secure Checkout</span>
              <span className="badge bg-secondary">🚚 Free Shipping*</span>
            </div>
            {/* Payment icons */}
            <div className="mt-3">
              <SiVisa size={32} className="me-2 text-light opacity-75" />
              <SiMastercard size={32} className="me-2 text-light opacity-75" />
              <SiPaypal size={32} className="me-2 text-light opacity-75" />
              <SiAmericanexpress size={32} className="text-light opacity-75" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-2">
            <h6 className="fw-bold">Shop</h6>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">All Products</Link></li>
              <li><Link to="/cart" className="text-light text-decoration-none">Cart</Link></li>
              <li><Link to="/wishlist" className="text-light text-decoration-none">Wishlist</Link></li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div className="col-md-3">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled small">
              <li><Link to="/track-order" className="text-light text-decoration-none">Track Order</Link></li>
              <li><Link to="/returns" className="text-light text-decoration-none">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms of Service</a></li>
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="col-md-3">
            <h6 className="fw-bold">Stay in Touch</h6>
            <p className="small">Get 10% off your first order – plus updates on new arrivals.</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group input-group-sm mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email"
                  aria-label="Email for newsletter"
                  required
                />
                <button className="btn btn-outline-light" type="submit">Subscribe</button>
              </div>
            </form>
            <div className="mt-3">
              <a href="#" className="text-light me-3" aria-label="Facebook"><FaFacebookF size={20} /></a>
              <a href="#" className="text-light me-3" aria-label="Instagram"><FaInstagram size={20} /></a>
              <a href="#" className="text-light me-3" aria-label="Twitter"><FaTwitter size={20} /></a>
              <a href="#" className="text-light" aria-label="YouTube"><FaYoutube size={20} /></a>
            </div>
          </div>
        </div>

        <hr className="border-light mt-4" />

        {/* Bottom row: copyright & back to top */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
          <p className="mb-0 small">
            © {currentYear} Ritu Store. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="btn btn-sm btn-outline-light mt-2 mt-md-0"
            aria-label="Back to top"
          >
            ↑ Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}