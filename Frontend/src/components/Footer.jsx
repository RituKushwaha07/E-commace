import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiAmericanexpress } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">

      <div className="container">

        {/* MAIN GRID */}
        <div className="row gy-4 text-center text-md-start">

          {/* COMPANY */}
          <div className="col-12 col-sm-6 col-lg-4">
            <h5 className="fw-bold">Ritu Store</h5>

            <p className="small">
              Best shopping experience with quality products and fast delivery.
              🛜 30-day returns & free shipping on orders over $50.
            </p>

            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
              <span className="badge bg-secondary">🔒 Secure</span>
              <span className="badge bg-secondary">🚚 Free Shipping</span>
            </div>

            <div className="mt-3 d-flex gap-2 justify-content-center justify-content-md-start flex-wrap">
              <SiVisa size={26} />
              <SiMastercard size={26} />
              <SiPaypal size={26} />
              <SiAmericanexpress size={26} />
            </div>
          </div>

          {/* SHOP LINKS */}
          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="fw-bold">Shop</h6>
            <ul className="list-unstyled small">
              <li><Link to="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link to="/products" className="text-light text-decoration-none">Products</Link></li>
              <li><Link to="/cart" className="text-light text-decoration-none">Cart</Link></li>
              <li><Link to="/wishlist" className="text-light text-decoration-none">Wishlist</Link></li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div className="col-6 col-md-3 col-lg-3">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled small">
              <li><Link to="/track-order" className="text-light text-decoration-none">Track Order</Link></li>
              <li><Link to="/returns" className="text-light text-decoration-none">Returns</Link></li>
              <li><Link to="/faq" className="text-light text-decoration-none">FAQ</Link></li>
              <li><Link to="/contact" className="text-light text-decoration-none">Contact</Link></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col-12 col-lg-3">
            <h6 className="fw-bold">Stay in Touch</h6>

            <p className="small">
              Get 10% off your first order + updates.
            </p>

            <form onSubmit={(e) => e.preventDefault()}>
              <div className="input-group input-group-sm">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <button className="btn btn-outline-light">
                  Subscribe
                </button>
              </div>
            </form>

            <div className="mt-3 d-flex gap-3 justify-content-center justify-content-md-start flex-wrap">
              <a href="#" className="text-light"><FaFacebookF /></a>
              <a href="#" className="text-light"><FaInstagram /></a>
              <a href="#" className="text-light"><FaTwitter /></a>
              <a href="#" className="text-light"><FaYoutube /></a>
            </div>
          </div>

        </div>

        <hr className="border-light mt-4" />

        {/* BOTTOM */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start gap-2">

          <p className="mb-0 small">
            © {currentYear} Ritu Store. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="btn btn-sm btn-outline-light"
          >
            ↑ Back to Top
          </button>

        </div>

      </div>
    </footer>
  );
}