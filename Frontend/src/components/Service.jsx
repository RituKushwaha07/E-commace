import { useEffect, useState } from "react";
import {
  FaTruck,
  FaUndoAlt,
  FaHeadset,
  FaCreditCard,
} from "react-icons/fa";

export default function Services() {

  // STATE
  const [services, setServices] = useState([]);

  // ICON MAP
  const iconMap = {
    "Fast Shipping": FaTruck,
    "Easy Returns": FaUndoAlt,
    "24/7 Support": FaHeadset,
    "Secure Payment": FaCreditCard,
  };

  

  // FETCH API
  useEffect(() => {
    fetch("https://e-commace-backe.vercel.app/api/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data.services);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container py-5 fade-in">

      {/* Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold display-5">
          Our Services
        </h1>

        <p className="text-muted fs-5">
          We provide fast delivery, secure payments and 24/7 customer support.
        </p>
      </div>

      <div className="row g-4">

        {services.map((service, idx) => {

          const Icon = iconMap[service.title];

          return (
            <div key={idx} className="col-md-6 col-lg-3">

              <a
                href={service.link}
                className="text-decoration-none d-block hover-glow"
              >
                <div className="card border-0 shadow-sm text-center p-5 h-100">

                  {/* ICON */}
                  {Icon && (
                    <Icon
                      size={50}
                      className={`text-${service.color} mb-3 mx-auto`}
                    />
                  )}

                  {/* TITLE */}
                  <h5 className="fw-bold text-dark">
                    {service.title}
                  </h5>

                  {/* DESC */}
                  <p className="text-muted small mb-3">
                    {service.desc}
                  </p>

                  {/* STAT */}
                  <span className="badge mb-3 p-3 rounded-5 bg-dark">
                    {service.stat}
                  </span>

                  {/* BUTTON */}
                  <div className="mt-auto">
                    <span className="btn btn-sm btn-outline-dark px-3 py-1">
                      Learn more →
                    </span>
                  </div>

                </div>
              </a>

            </div>
          );
        })}

      </div>
    </div>
  );
}