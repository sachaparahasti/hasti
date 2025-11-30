import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "./dental.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Dental(props){
    return(
        <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="navbar">
    <div className="container">
      <a className="navbar-brand fs-3 fw-bold" href="#">
        <i className="fas fa-tooth gold-text me-2" /> {props.sitename}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navmenu"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navmenu">
        <ul className="navbar-nav ms-auto fw-medium text-white">
          <li className="nav-item">
            <a className="nav-link" href="#home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#services">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#gallery">
              Gallery
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
  {/* Hero */}
  <section
    id="home"
    className="hero d-flex align-items-center text-center position-relative"
  >
    <div className="container position-relative z-3">
      <h1 className="display-2 fw-bold mb-4">
        Perfect Smiles <br />
        <span className="gold-text">Crafted Daily</span>
      </h1>
      <p className="lead mb-5 fs-4">
        Luxury Dental Care • Pain-Free • Life-Changing Results
      </p>
      <a href="#contact" className="btn btn-gold btn-lg fs-5 px-5">
        Book Free Consultation
      </a>
    </div>
  </section>
  {/* About */}
  <section id="about" className="bg-light">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e4279202d8?q=80&w=1200"
            className="img-fluid rounded-4 shadow-lg"
            alt="Dr. Emma Richardson"
          />
        </div>
        <div className="col-lg-6 mt-5 mt-lg-0" data-aos="fade-left">
          <h2 className="display-5 fw-bold gold-text">Dr. Emma Richardson</h2>
          <p className="lead">Award-Winning Cosmetic Dentist</p>
          <p>
            18+ years of excellence, thousands of happy patients, and a passion
            for creating breathtaking smiles that change lives.
          </p>
          <div className="row text-center mt-5 g-4">
            <div className="col-4">
              <h3 className="gold-text fw-bold fs-2">8500+</h3>
              <p className="fw-medium">Smiles Transformed</p>
            </div>
            <div className="col-4">
              <h3 className="gold-text fw-bold fs-2">18+</h3>
              <p className="fw-medium">Years Experience</p>
            </div>
            <div className="col-4">
              <h3 className="gold-text fw-bold fs-2">5.0 ★</h3>
              <p className="fw-medium">Patient Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Services */}
  <section id="services">
    <div className="container">
      <h2 className="text-center display-5 fw-bold mb-5" data-aos="fade-up">
        Signature Treatments
      </h2>
      <div className="row g-5">
        <div className="col-md-6 col-lg-4" data-aos="zoom-in">
          <div className="service-card text-center p-5 h-100">
            <div className="icon-gold">
              <i className="fas fa-gem" />
            </div>
            <h4 className="fw-bold mt-3">Porcelain Veneers</h4>
            <p>Custom ultra-thin shells for a perfect Hollywood smile</p>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <div className="service-card text-center p-5 h-100">
            <div className="icon-gold">
              <i className="fas fa-tooth" />
            </div>
            <h4 className="fw-bold mt-3">Dental Implants</h4>
            <p>Permanent, natural-looking teeth replacement</p>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <div className="service-card text-center p-5 h-100">
            <div className="icon-gold">
              <i className="fas fa-snowflake" />
            </div>
            <h4 className="fw-bold mt-3">Teeth Whitening</h4>
            <p>Up to 8 shades brighter in just one hour</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Gallery */}
  <section id="gallery" className="bg-light">
    <div className="container">
      <h2 className="text-center display-5 fw-bold mb-5" data-aos="fade-up">
        Before &amp; After Magic
      </h2>
      <div className="row g-4">
        <div className="col-6 col-md-4" data-aos="fade-up">
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200"
              alt="Before After 1"
            />
          </div>
        </div>
        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={100}>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1599839612240-5f1897c7d4c7?q=80&w=1200"
              alt="Before After 2"
            />
          </div>
        </div>
        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={200}>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1622255808828-81f9ed6b79be?q=80&w=1200"
              alt="Before After 3"
            />
          </div>
        </div>
        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={300}>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1618498082410-b4aa22193b38?q=80&w=1200"
              alt="Clinic Interior"
            />
          </div>
        </div>
        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={400}>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200"
              alt="Happy Patient"
            />
          </div>
        </div>
        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={500}>
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=1200"
              alt="Modern Clinic"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact CTA */}
  <section id="contact" className="bg-dark text-white text-center py-5">
    <div className="container">
      <h2 className="display-5 fw-bold" data-aos="fade-up">
        Your Dream Smile Starts Today
      </h2>
      <p className="lead my-4" data-aos="fade-up" data-aos-delay={100}>
        Limited slots this week - Book your FREE consultation now!
      </p>
      <div data-aos="fade-up" data-aos-delay={200}>
        <a href="tel:+919876543210" className="btn btn-gold btn-lg px-5 me-3">
          <i className="fas fa-phone me-2" /> Call +91 79901 45684
        </a>
        <a
          href="https://wa.me/919876543210"
          className="btn btn-success btn-lg px-5"
        >
          <i className="fab fa-whatsapp me-2" /> WhatsApp
        </a>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer className="text-white py-5">
    <div className="container text-center">
      <h3>{props.sitename}</h3>
      <p>789 Luxury Smile Avenue • Bhavnagar • India</p>
      <p>Monday-Saturday: 9AM–8PM | Sunday: By Appointment</p>
      <div className="mt-3">
        <a href="#" className="text-white mx-3 fs-4">
          <i className="fab fa-instagram" />
        </a>
        <a href="#" className="text-white mx-3 fs-4">
          <i className="fab fa-facebook" />
        </a>
      </div>
      <p className="mt-4 mb-0">© 2025 {props.sitename}• All Rights Reserved</p>
    </div>
  </footer>
</>

    )
}

root.render(<Dental sitename="Pearly White Dental" slogan="Elevating Smiles Through Personalized Luxury" />);

