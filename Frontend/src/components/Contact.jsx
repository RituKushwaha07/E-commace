import { useState } from "react";
import axios from "axios";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUser, FaCommentDots } from "react-icons/fa";

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
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await axios.post("http://localhost:5000/api/contact", formData);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      {/* Hero Section - using Bootstrap bg-light + rounded + shadow */}
      <div className="bg-light p-5 rounded-4 mb-5 text-center shadow-sm">
        <h1 className="display-5 fw-bold mb-3">Let's Connect</h1>
        <p className="lead mb-0">We're here to help and answer any question you might have.</p>
      </div>

      <div className="row g-5">
        {/* Form Column */}
        <div className="col-lg-6">
          <div className="card border-0 shadow h-100 p-3 p-md-4">
            <div className="card-body">
              <h2 className="h3 fw-bold mb-4" style={{ color: "#ec4899" }}>
                <FaCommentDots className="me-2" /> Send us a message
              </h2>

              {submitStatus === "success" && (
                <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
                  ✅ Thank you! Your message has been sent. We'll get back to you soon.
                  <button type="button" className="btn-close ms-auto" onClick={() => setSubmitStatus(null)}></button>
                </div>
              )}
              {submitStatus === "error" && (
                <div className="alert alert-danger d-flex align-items-center gap-2" role="alert">
                  ❌ Oops! Something went wrong. Please try again later.
                  <button type="button" className="btn-close ms-auto" onClick={() => setSubmitStatus(null)}></button>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaUser className="me-1" /> Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    className={`form-control ${errors.name ? "is-invalid" : ""}`}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">
                    <FaEnvelope className="me-1" /> Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`form-control ${errors.email ? "is-invalid" : ""}`}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>

                <div className="mb-3">
                  <label className="form-label fw-semibold">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold">
                    <FaCommentDots className="me-1" /> Message *
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    className={`form-control ${errors.message ? "is-invalid" : ""}`}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100 d-flex align-items-center justify-content-center gap-2 py-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner-border spinner-border-sm" role="status"></span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Info + Map Column */}
        <div className="col-lg-6">
          <div className="card border-0 shadow h-100 p-3 p-md-4">
            <div className="card-body">
              <h2 className="h3 fw-bold mb-4" style={{ color: "#ec4899" }}>
                📍 Get in touch
              </h2>

              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px" }}>
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Visit us</h6>
                  <p className="text-muted mb-0">123 E‑Shop Avenue, Digital City, DC 56789</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px" }}>
                  <FaPhone className="text-primary" />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Call us</h6>
                  <p className="text-muted mb-0">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px" }}>
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Email us</h6>
                  <p className="text-muted mb-0">support@eshop.com</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-3 mb-4">
                <div className="bg-primary bg-opacity-10 rounded-circle p-3 d-flex align-items-center justify-content-center" style={{ width: "45px", height: "45px" }}>
                  <FaClock className="text-primary" />
                </div>
                <div>
                  <h6 className="mb-0 fw-bold">Working hours</h6>
                  <p className="text-muted mb-0">Mon-Fri: 9am–6pm | Sat: 10am–2pm</p>
                </div>
              </div>

              <div className="mt-3 rounded-3 overflow-hidden shadow-sm">
                <div className="ratio ratio-16x9">
                  <iframe
                    title="Store location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a316bb5d1b5%3A0xc89b5e4c8e6c8a6d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1647890999999!5m2!1sen!2sus"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}