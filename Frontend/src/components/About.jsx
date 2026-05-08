import React from "react";

// Data structures for dynamic rendering (real project maintainability)
const statsData = [
  { id: 1, value: "50K+", label: "Active Users", icon: "👥" },
  { id: 2, value: "10K+", label: "Orders Completed", icon: "🛒" },
  { id: 3, value: "500+", label: "Premium Products", icon: "📦" },
  { id: 4, value: "99%", label: "Customer Satisfaction", icon: "😊" },
];

const featuresData = [
  {
    id: 1,
    title: "Lightning Fast",
    description: "Optimized browsing & instant checkout experience",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Bank-Grade Security",
    description: "End-to-end encrypted payments & data protection",
    icon: "🔒",
  },
  {
    id: 3,
    title: "Global Delivery",
    description: "Track your orders in real-time with reliable partners",
    icon: "🚚",
  },
];

const teamData = [
  {
    id: 1,
    name: "Ritu Sharma",
    role: "Lead Frontend Engineer",
    bio: "Creates smooth, accessible UIs with React",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    social: "🐦 @ritu_dev",
  },
  {
    id: 2,
    name: "Rahul Verma",
    role: "Backend Architect",
    bio: "Scalable systems & API design expert",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    social: "💻 github/rahul",
  },
  {
    id: 3,
    name: "Priya Nair",
    role: "Creative Director",
    bio: "Crafting intuitive brand experiences",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    social: "🎨 behance/priya",
  },
];

// Main About Component
export default function About() {
  // Navigation handlers (real project: integrate with react-router)
  const handleExplore = () => {
    // In a real app: navigate('/products') or dispatch event
    console.log("Navigate to products page");
    window.location.href = "/products"; // Placeholder: use Link from react-router-dom
  };

  const handleGetStarted = () => {
    console.log("Navigate to registration/shop");
    window.location.href = "/signup";
  };

return (
  <>
    <div className="container mt-4 mt-md-5 mb-5">

      {/* 🔥 HERO SECTION - CENTERED */}
      <div
        className="hero-gradient-bg mb-5 p-3 p-md-4 d-flex align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center g-4">

            {/* LEFT CONTENT */}
            <div className="col-md-6 text-md-start text-center">
              <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2 rounded-pill">
                ✨ Trusted by 5,000+ businesses
              </span>

              <h1 className="fw-bold display-5 mb-3">
                Build Your Shopping Experience with{" "}
                <span className="text-primary">Confidence</span>
              </h1>

              <p className="text-muted lead fs-6 mb-4">
                We provide a modern, lightning-fast, and secure e-commerce
                platform that helps users shop smarter and businesses grow
                exponentially.
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-md-start justify-content-center">
                <button
                  onClick={handleExplore}
                  className="btn btn-primary rounded-pill px-5 py-2 btn-primary-custom"
                >
                  Explore Products →
                </button>

                <button className="btn btn-outline-secondary rounded-pill px-4 py-2">
                  Watch Demo ▶
                </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="col-md-6 text-center">
              <img
                src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
                className="img-fluid rounded-4 shadow-lg"
                alt="Online shopping illustration"
                loading="lazy"
                style={{
                  maxHeight: "380px",
                  objectFit: "contain",
                }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* 🔥 STATS SECTION */}
      <div className="row text-center g-3 mb-5">
        {statsData.map((stat) => (
          <div key={stat.id} className="col-md-3 col-6">
            <div className="stat-card p-4 shadow-sm rounded-4 border bg-white h-100 hover-lift">
              <div className="icon-bg mx-auto">{stat.icon}</div>
              <h4 className="fw-bold text-primary mt-2 mb-1">{stat.value}</h4>
              <small className="text-secondary text-uppercase fw-semibold">
                {stat.label}
              </small>
            </div>
          </div>
        ))}
      </div>

      {/* 🔥 FEATURES SECTION */}
      <div className="mb-5">
        <div className="text-center mb-5">
          <h3 className="fw-bold display-6">Why choose us?</h3>
          <p className="text-muted col-lg-6 mx-auto">
            Everything you need for a seamless e-commerce journey
          </p>
        </div>

        <div className="row g-4">
          {featuresData.map((feature) => (
            <div key={feature.id} className="col-md-4">
              <div className="card h-100 border-0 shadow-sm rounded-4 p-4 text-center hover-lift">
                <div className="icon-bg mx-auto mb-3">{feature.icon}</div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-muted small mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 TEAM SECTION */}
      <div className="mb-5 py-3">
        <div className="text-center mb-5">
          <h3 className="fw-bold display-6">Creative minds behind the magic</h3>
          <p className="text-muted col-lg-7 mx-auto">
            Passionate developers, designers, and problem-solvers dedicated to
            redefining online shopping.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {teamData.map((member) => (
            <div key={member.id} className="col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-4 text-center h-100 hover-lift">
                <div className="mx-auto" style={{ width: "100px" }}>
                  <img
                    src={member.img}
                    className="rounded-circle mb-3 border border-2 border-primary"
                    width="100"
                    height="100"
                    alt={member.name}
                    loading="lazy"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <h6 className="fw-bold fs-5 mb-1">{member.name}</h6>
                <small className="text-primary fw-semibold">{member.role}</small>
                <p className="text-muted small my-2">{member.bio}</p>

                <div className="small text-secondary mt-2">
                  <span className="px-2 py-1 bg-light rounded-pill">
                    {member.social}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 MISSION SECTION */}
      <div className="row mb-5 align-items-center bg-light rounded-4 p-4 p-md-5 shadow-sm">
        <div className="col-md-8">
          <h4 className="fw-bold">🚀 Our mission</h4>
          <p className="text-muted mb-0">
            Empowering local and global sellers with cutting-edge technology,
            while giving shoppers a safe, personalized, and delightful
            experience.
          </p>
        </div>

        <div className="col-md-4 text-md-end mt-3 mt-md-0">
          <div className="badge bg-primary bg-opacity-10 text-primary p-3 rounded-pill">
            #ShopWithConfidence
          </div>
        </div>
      </div>

      {/* 🔥 CTA SECTION */}
      <div className="text-center py-4">
        <div
          className="rounded-4 p-4 p-md-5"
          style={{ background: "linear-gradient(120deg, #f0f9ff, #e6f4ff)" }}
        >
          <h4 className="fw-bold display-6 fs-2">
            Ready to elevate your shopping experience?
          </h4>

          <p className="text-muted col-lg-7 mx-auto mb-4">
            Join our community of thousands of happy shoppers and start exploring
            exclusive deals today.
          </p>

          <div className="d-flex flex-wrap gap-3 justify-content-center">
            <button
              onClick={handleGetStarted}
              className="btn btn-primary rounded-pill px-5 py-2 btn-primary-custom"
            >
              Get Started →
            </button>

            <button className="btn btn-outline-primary rounded-pill px-4 py-2">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

    </div>
  </>
);
}




