import { useState } from "react";
import axios from "axios";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = "Name is required";
    if (!formData.email.trim()) err.email = "Email is required";
    if (!formData.message.trim()) err.message = "Message required";
    return err;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) return setErrors(v);

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-4 py-md-5">

      {/* HERO */}
      <div className="bg-light p-4 p-md-5 rounded-4 mb-4 mb-md-5 text-center shadow-sm">
        <h1 className="fw-bold">Let's Connect</h1>
        <p className="text-muted mb-0">
          We’re here to help you anytime 🚀
        </p>
      </div>

      <div className="row g-4">

        {/* FORM */}
        <div className="col-12 col-lg-6">
          <div className="card border-0 shadow-sm p-3 p-md-4 h-100">

            <h3 className="fw-bold mb-3 text-primary">
              <FaCommentDots className="me-2" />
              Send Message
            </h3>

            {/* ALERT */}
            {submitStatus === "success" && (
              <div className="alert alert-success">Message sent!</div>
            )}
            {submitStatus === "error" && (
              <div className="alert alert-danger">Something went wrong!</div>
            )}

            <form onSubmit={handleSubmit}>

              {/* NAME */}
              <div className="mb-3">
                <label className="form-label">
                  <FaUser className="me-1" /> Name
                </label>
                <input
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>

              {/* EMAIL */}
              <div className="mb-3">
                <label className="form-label">
                  <FaEnvelope className="me-1" /> Email
                </label>
                <input
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* SUBJECT */}
              <div className="mb-3">
                <label className="form-label">Subject</label>
                <input
                  className="form-control"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>

              {/* MESSAGE */}
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  rows="4"
                  className="form-control"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* BUTTON */}
              <button
                className="btn btn-primary w-100 d-flex justify-content-center align-items-center gap-2"
                disabled={isSubmitting}
              >
                <FaPaperPlane />
                {isSubmitting ? "Sending..." : "Send"}
              </button>

            </form>
          </div>
        </div>

        {/* INFO */}
        <div className="col-12 col-lg-6">
          <div className="card border-0 shadow-sm p-3 p-md-4 h-100">

            <h3 className="fw-bold text-primary mb-3">
              📍 Contact Info
            </h3>

            <div className="d-flex align-items-start gap-3 mb-3">
              <FaMapMarkerAlt className="text-primary mt-1" />
              <div>
                <strong>Address</strong>
                <p className="text-muted mb-0">Digital City, India</p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3 mb-3">
              <FaPhone className="text-primary mt-1" />
              <div>
                <strong>Phone</strong>
                <p className="text-muted mb-0">+91 98765 43210</p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3 mb-3">
              <FaEnvelope className="text-primary mt-1" />
              <div>
                <strong>Email</strong>
                <p className="text-muted mb-0">support@shop.com</p>
              </div>
            </div>

            <div className="d-flex align-items-start gap-3 mb-3">
              <FaClock className="text-primary mt-1" />
              <div>
                <strong>Hours</strong>
                <p className="text-muted mb-0">Mon–Sat 9AM–6PM</p>
              </div>
            </div>

            {/* MAP */}
            <div className="ratio ratio-16x9 rounded-3 overflow-hidden mt-3">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18..."
                loading="lazy"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}