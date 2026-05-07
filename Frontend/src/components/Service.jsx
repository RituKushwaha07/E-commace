import {FaTruck,FaUndoAlt,FaHeadset,FaCreditCard,} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: FaTruck,
      color: "primary",
      title: "Fast Shipping",
      desc: "Free delivery across India with secure packaging.",
      stat: "19k+ PIN codes",
      link: "/shipping",
    },
    {
      icon: FaUndoAlt,
      color: "success",
      title: "Easy Returns",
      desc: "7-day easy return and refund policy.",
      stat: "98% satisfaction",
      link: "/returns",
    },
    {
      icon: FaHeadset,
      color: "danger",
      title: "24/7 Support",
      desc: "Customer support available anytime for help.",
      stat: "Avg. 45s reply",
      link: "/support",
    },
    {
      icon: FaCreditCard,
      color: "warning",
      title: "Secure Payment",
      desc: "Safe payment options with UPI, cards and COD.",
      stat: "100% secure",
      link: "/payment",
    },
  ];

  return (
    <div className="container py-5 fade-in">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">Our Services</h1>
        <p className="text-muted fs-5">
          We provide fast delivery, secure payments and 24/7 customer support.
        </p>
      </div>

      <div className="row g-4">
        {services.map(({ icon: Icon, color, title, desc, stat, link }, idx) => (
          <div key={idx} className="col-md-6 col-lg-3">
            <a href={link} className="text-decoration-none d-block hover-glow">
              <div className="card border-0 shadow-sm text-center p-5 h-100">
                <Icon size={50} className={`text-${color} mb-3 mx-auto`} />
                <h5 className="fw-bold text-dark">{title}</h5>
                <p className="text-muted small mb-3">{desc}</p>
                <span className="badge mb-3 p-3 rounded-5">{stat}</span>
                <div className="mt-auto">
                  <span className="btn btn-sm btn-outline-dark px-3 py-1">
                    Learn more →
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}