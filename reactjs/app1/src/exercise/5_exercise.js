import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "./saloon.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Saloon(props){
    return(
       <>
  {/* Navbar */}
  <nav className="navbar navbar-expand-lg fixed-top navbar-dark">
    <div className="container">
      <a className="navbar-brand fs-2 fw-bold" href="#">
        {props.sitename}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav ms-auto text-uppercase fw-medium">
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
  <section id="home" className="hero text-center text-white">
    <div className="container" data-aos="fade-up">
      <h1 className="display-1">{props.site}</h1>
      <p className="lead fs-3 mb-4">{props.slogan}</p>
      <a href="#services" className="btn btn-gold btn-lg">
        Book Your Transformation
      </a>
    </div>
  </section>
  {/* About */}
  <section id="about" className="py-5 bg-light">
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right">
          <h2 className="display-4 fw-bold mb-4">Experience Luxury</h2>
          <p className="lead">
            Step into a world where every detail is designed for your comfort
            and beauty. Our award-winning stylists create looks that turn heads.
          </p>
          <div className="row text-center mt-5">
            <div className="col-4">
              <h3 className="fw-bold text-gold">15+</h3>
              <p>Years of Excellence</p>
            </div>
            <div className="col-4">
              <h3 className="fw-bold text-gold">5000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="col-4">
              <h3 className="fw-bold text-gold">50+</h3>
              <p>Awards Won</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-left">
          <img
            src="https://images.unsplash.com/photo-1559598467-f8b76c5f0b8d?w=800"
            className="img-fluid rounded-4 shadow-lg"
            alt="Salon"
          />
        </div>
      </div>
    </div>
  </section>
  {/* Services */}
  <section id="services" className="py-5">
    <div className="container py-5">
      <h2 className="text-center display-4 mb-5" data-aos="fade-up">
        Signature Services
      </h2>
      <div className="row g-4">
        {/* Repeat this card for each service */}
        <div
          className="col-md-6 col-lg-4"
          data-aos="zoom-in"
          data-aos-delay={100}
        >
          <div className="glass-card p-5 text-center text-white h-100">
            <i
              className="fas fa-cut fa-4x mb-4"
              style={{ color: "var(--gold)" }}
            />
            <h4>Premium Haircut</h4>
            <p className="mb-3">
              Customized cut with consultation &amp; luxury wash
            </p>
            <h3 className="text-gold">₹2500 onwards</h3>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4"
          data-aos="zoom-in"
          data-aos-delay={200}
        >
          <div className="glass-card p-5 text-center text-white h-100">
            <i
              className="fas fa-paint-brush fa-4x mb-4"
              style={{ color: "var(--gold)" }}
            />
            <h4>Global Color</h4>
            <p className="mb-3">Ammonia-free, long-lasting color</p>
            <h3 className="text-gold">₹4500 onwards</h3>
          </div>
        </div>
        <div
          className="col-md-6 col-lg-4"
          data-aos="zoom-in"
          data-aos-delay={300}
        >
          <div className="glass-card p-5 text-center text-white h-100">
            <i
              className="fas fa-star fa-4x mb-4"
              style={{ color: "var(--gold)" }}
            />
            <h4>Keratin &amp; Botox</h4>
            <p className="mb-3">Frizz-free hair for up to 6 months</p>
            <h3 className="text-gold">₹8000 onwards</h3>
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <a href="#contact" className="btn btn-gold btn-lg">
          View Full Price List
        </a>
      </div>
    </div>
  </section>
  {/* Gallery */}
  <section id="gallery" className="py-5 bg-dark text-white">
    <div className="container py-5">
      <h2 className="text-center display-4 mb-5">Our Work Speaks</h2>
      <div className="row g-3">
        <div className="col-6 col-md-4" data-aos="fade-up">
          <img
            src="https://images.unsplash.com/photo-1605496148056-0d4863a13b28?w=600"
            className="gallery-img w-100"
            alt=""
          />
        </div>
        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={100}>
          <img
            src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=600"
            className="gallery-img w-100"
            alt=""
          />
        </div>
        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={200}>
          <img
            src="https://images.unsplash.com/photo-1599351429918-1a2cb03c00b0?w=600"
            className="gallery-img w-100"
            alt=""
          />
        </div>
        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={300}>
          <img
            src="https://images.unsplash.com/photo-1635321593229-32545d11e65d?w=600"
            className="gallery-img w-100"
            alt=""
          />
        </div>
        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={400}>
          <img
            src="https://images.unsplash.com/photo-1580616291157-3190b2026e4d?w=600"
            className="gallery-img w-100"
            alt=""
          />
        </div>
        <div className="col-6 col-md-4" data-aos="fade-up" data-aos-delay={500}>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600"
            className="gallery-img w-100"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  {/* Footer */}
  <footer id="contact" className="py-5 text-white">
    <div className="container">
      <div className="row">
        <div className="col-lg-5">
          <h2 className="display-5">{props.sitename}</h2>
          <p>Experience the difference. Book your appointment today!</p>
          <a href="tel:+919876543210" className="btn btn-gold btn-lg">
            Call +91 79901 45684
          </a>
        </div>
        <div className="col-lg-4">
          <h5>Visit Us</h5>
          <p>
            Shop 12, Elite Towers
            <br />
            Bandstand, Bandra West
            <br />
            Mumbai 400050
          </p>
          <p>Tue-Sun: 10AM - 9PM</p>
        </div>
        <div className="col-lg-3 text-center">
          <h5>Follow Us</h5>
          <a href="#" className="text-white fs-1 mx-2">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="text-white fs-1 mx-2">
            <i className="fab fa-facebook" />
          </a>
        </div>
      </div>
      <hr className="my-4" />
      <p className="text-center">
        © 2025 {props.sitename} • Made with love in India
      </p>
    </div>
  </footer>
</>
    )
}

root.render(<Saloon sitename="Krishn " site="Krishn Hair Saloon" slogan="Har din, perfect hair day"  />);
