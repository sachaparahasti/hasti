import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "./dance.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">
          <i className="fas fa-star me-2" />
          Desi Dance Factory
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#gallery">
                Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#classes">
                Classes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
function Slider() {
  return (
    <section id="home" className="hero position-relative">
      <div className="hero-overlay" />
      <div className="container text-center text-white position-relative z-10">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="hero-title mb-4">Discover Your Rhythm</h1>
            <p className="lead fs-4 mb-5">
              Professional dance training for all levels
            </p>
            <a href="#classes" className="btn btn-gold btn-lg me-3">
              Explore Classes
            </a>
            <a href="#contact" className="btn btn-outline-light btn-lg px-4">
              Start Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function AboutUs() {
  return (
    <section id="about" className="section-padding bg-light">
      <div className="container">
        <h2 className="section-title">About StarDance Academy</h2>
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
              className="img-fluid rounded-4 shadow-lg w-100"
              alt="Dance Studio"
            />
          </div>
          <div className="col-lg-6">
            <p className="lead mb-4">
              World-class dance instruction with certified professionals.
            </p>
            <div className="row g-4">
              <div className="col-md-4">
                <div className="stat-card">
                  <div className="stat-number">1000+</div>Students
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-card">
                  <div className="stat-number">75+</div>Awards
                </div>
              </div>
              <div className="col-md-4">
                <div className="stat-card">
                  <div className="stat-number">12</div>Years
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding"
      style={{ background: "linear-gradient(135deg, var(--purple), #3B82F6)" }}
    >
      <div className="container">
        <h2
          className="section-title"
          style={{
            color: "white !important",
            background: "linear-gradient(45deg, white, #fff8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our Gallery
        </h2>
        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1542245620-60e51f88713c?w=600&h=300&fit=crop"
                alt="Recital"
              />
              <div className="gallery-overlay">
                <h5>Annual Recital</h5>
                <p>World-class shows</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1511666196919-c3df71d29818?w=600&h=300&fit=crop"
                alt="Class"
              />
              <div className="gallery-overlay">
                <h5>Class Moments</h5>
                <p>Learning in action</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=300&fit=crop"
                alt="Hip Hop"
              />
              <div className="gallery-overlay">
                <h5>Hip Hop Crew</h5>
                <p>Street masters</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=600&h=300&fit=crop"
                alt="Contemporary"
              />
              <div className="gallery-overlay">
                <h5>Contemporary</h5>
                <p>Emotional art</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=300&fit=crop"
                alt="Salsa"
              />
              <div className="gallery-overlay">
                <h5>Latin Nights</h5>
                <p>Passion &amp; rhythm</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="gallery-item">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop"
                alt="Awards"
              />
              <div className="gallery-overlay">
                <h5>Champions</h5>
                <p>Award glory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Classes() {
  return (
    <section id="classes" className="section-padding bg-white">
      <div className="container">
        <h2 className="section-title">Dance Classes</h2>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="card class-card">
              <img
                src="https://images.unsplash.com/photo-1544716276-54d3470d6e2b?w=500&h=250&fit=crop"
                className="card-img-top class-img"
                alt="Hip Hop"
              />
              <div className="card-body p-4">
                <h5 className="fw-bold fs-4 mb-3">Hip Hop</h5>
                <p>Street dance with breaking &amp; popping</p>
                <a href="#contact" className="btn btn-gold">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card class-card">
              <img
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=250&fit=crop"
                className="card-img-top class-img"
                alt="Ballet"
              />
              <div className="card-body p-4">
                <h5 className="fw-bold fs-4 mb-3">Ballet</h5>
                <p>Classical grace &amp; precision</p>
                <a href="#contact" className="btn btn-gold">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card class-card">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=500&h=250&fit=crop"
                className="card-img-top class-img"
                alt="Contemporary"
              />
              <div className="card-body p-4">
                <h5 className="fw-bold fs-4 mb-3">Contemporary</h5>
                <p>Modern expressive dance</p>
                <a href="#contact" className="btn btn-gold">
                  Join Now
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="card class-card">
              <img
                src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=250&fit=crop"
                className="card-img-top class-img"
                alt="Salsa"
              />
              <div className="card-body p-4">
                <h5 className="fw-bold fs-4 mb-3">Salsa</h5>
                <p>Passionate Latin partner dance</p>
                <a href="#contact" className="btn btn-gold">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ContactUs() {
  return (
    <section
      id="contact"
      className="section-padding"
      style={{ background: "linear-gradient(135deg, var(--dark), #1e293b)" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10 text-center text-white mb-5">
            <h2
              className="section-title"
              style={{
                color: "white !important",
                background: "linear-gradient(45deg, var(--gold), var(--pink))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Get In Touch
            </h2>
            <p className="lead">Ready to start dancing?</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form">
              <form>
                <div className="row g-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      required=""
                    />
                  </div>
                  <div className="col-md-6">
                    <select className="form-control">
                      <option>Select Style</option>
                      <option>Hip Hop</option>
                      <option>Ballet</option>
                      <option>Contemporary</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      className="form-control"
                      rows={5}
                      placeholder="Your Message"
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-gold btn-lg px-5">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="footer py-5 text-white position-relative">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4">
            <h4>
              <i className="fas fa-star me-2 text-warning" />
              Desi Dance Factory
            </h4>
            <p>Where passion meets perfection.</p>
          </div>
          <div className="col-lg-6 text-lg-end">
            <div className="social-links mb-3">
              <a href="#" className="text-white me-4 fs-3">
                <i className="fab fa-facebook" />
              </a>
              <a href="#" className="text-white me-4 fs-3">
                <i className="fab fa-instagram" />
              </a>
              <a href="#" className="text-white me-4 fs-3">
                <i className="fab fa-tiktok" />
              </a>
              <a href="#" className="text-white fs-3">
                <i className="fab fa-youtube" />
              </a>
            </div>
            <p className="mb-0">© 2025 StarDance. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
var dance = (
  <>
    {/* Navigation */}
    <Navigation />
    {/* Home/Hero */}
    <Slider />
    {/* About Us */}
    <AboutUs />
    {/* Gallery */}
    <Gallery />
    {/* Classes */}
    <Classes />
    {/* Contact */}
    <ContactUs />
    {/* Footer */}
    <Footer />
  </>
);

root.render(dance);
