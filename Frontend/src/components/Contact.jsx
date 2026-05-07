import { useState } from "react";
import { toast } from "react-toastify";
import api from "../api/axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/contact", form);
      toast.success("Message sent successfully 🚀");

      setForm({ name: "", email: "", message: "" });

    } catch (err) {
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <div className="container-fluid py-5">

      <div className="row justify-content-center">

        {/* 🔥 LEFT SIDE */}
        <div className="col-md-5 mb-4">

          <div className="p-4 h-100">

            <h2 className="fw-bold mb-3">
              Let's Connect 🤝
            </h2>

            <p className="text-muted mb-4">
              We’d love to hear from you. Send us a message and we’ll respond ASAP.
            </p>

            {/* Info Cards */}
            <div className="mb-3 p-3 rounded-4 shadow-sm bg-white">
              <p className="mb-1 fw-semibold">📍 Location</p>
              <small className="text-muted">Noida, India</small>
            </div>

            <div className="mb-3 p-3 rounded-4 shadow-sm bg-white">
              <p className="mb-1 fw-semibold">📞 Phone</p>
              <small className="text-muted">+91 9876543210</small>
            </div>

            <div className="mb-3 p-3 rounded-4 shadow-sm bg-white">
              <p className="mb-1 fw-semibold">📧 Email</p>
              <small className="text-muted">support@ritustore.com</small>
            </div>

            {/* Map */}
            <div className="mt-4 rounded-4 overflow-hidden shadow-sm">
              <iframe
                title="map"
                src="https://maps.google.com/maps?q=Noida&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="200"
                style={{ border: 0 }}
              ></iframe>
            </div>

          </div>
        </div>

        {/* 🔥 RIGHT SIDE (FORM) */}
        <div className="col-md-5">

          <div className="card border-0 shadow-lg rounded-4 p-4">

            <h4 className="fw-bold mb-3 text-center">
              Send Message 💌
            </h4>

            <form onSubmit={handleSubmit}>

              {/* Name */}
              <div className="mb-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control rounded-pill"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={handleChange}
                  className="form-control rounded-pill"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-3">
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message..."
                  value={form.message}
                  onChange={handleChange}
                  className="form-control rounded-4"
                  required
                />
              </div>

              {/* Button */}
              <button className="btn btn-primary w-100 rounded-pill py-2 fw-semibold">
                Send Message →
              </button>

            </form>

          </div>

        </div>

      </div>

    </div>
  );
}