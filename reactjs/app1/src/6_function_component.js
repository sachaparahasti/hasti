import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import "./site.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3" href="#">
          {props.sitename}
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
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#menu">
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonials">
                Testimonials
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
  );
}
function Slider(props) {
  return (
    <section
      id="home"
      className="hero-slider d-flex align-items-center text-white text-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <h1 className="display-1 fw-bold">{props.sitename}</h1>
            <p className="lead mb-4">{props.slogan}</p>
            <a href="#menu" className="btn btn-outline-light btn-lg px-5">
              View Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
function Introduction() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="section-title text-gold mb-4">
              Welcome to Delizioso
            </h2>
            <p className="lead">
              Where passion meets plate. Since 2015, we have been serving
              authentic Italian cuisine made with love and the finest
              ingredients.
            </p>
            <p>
              Our chefs bring decades of experience from Italy, creating dishes
              that transport you straight to the streets of Rome and the coasts
              of Amalfi.
            </p>
            <a href="#about" className="btn bg-gold text-white">
              Learn More About Us
            </a>
          </div>
          <div className="col-lg-6">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
              className="img-fluid rounded shadow"
              alt="Restaurant Interior"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function AboutUs() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title text-gold">About Us</h2>
        </div>
        <div className="row g-5">
          <div className="col-md-4 text-center">
            <i className="fas fa-utensils fa-3x text-gold mb-3" />
            <h4>Fresh Ingredients</h4>
            <p>
              We source only the finest local and imported Italian ingredients
              daily.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <i className="fas fa-cheese fa-3x text-gold mb-3" />
            <h4>Authentic Recipes</h4>
            <p>Traditional family recipes passed down through generations.</p>
          </div>
          <div className="col-md-4 text-center">
            <i className="fas fa-wine-glass-alt fa-3x text-gold mb-3" />
            <h4>Perfect Ambiance</h4>
            <p>Elegant setting with warm Italian hospitality.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
function MenuItem(props) {
  let { name, details, price } = props;
  return (
    <div className="col-md-6 col-lg-4">
      <div className="menu-item rounded overflow-hidden shadow-sm h-100">
        <img src={props.src} className="img-fluid" alt="Bruschetta" />
        <div className="p-4">
          <h5>{name}</h5>
          <p className="text-muted mb-2">{details}</p>
          <h4 className="text-gold">{price}</h4>
        </div>
      </div>
    </div>
  );
}
function Menu() {
  return (
    <section id="menu" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title text-gold">Our Menu</h2>
          <p className="lead">
            Carefully crafted dishes to satisfy every palate
          </p>
        </div>
        <div className="row g-4">
          
        <MenuItem src="https://picsum.photos/400?random=1" name="PavBhaji" details="Boil potatoes, peas, cauliflower, and carrots. Sauté onions with ginger-garlic and tomatoes in butter. Add pav bhaji masala, chili, salt, mash, simmer, finish with lemon." price="Rs 150" />

        <MenuItem src="https://picsum.photos/400?random=2" name="Masala Dosa" details="Crispy dosa filled with spicy potato masala, served with coconut chutney and sambhar." price="Rs 120" />

        <MenuItem src="https://picsum.photos/400?random=3" name="Paneer Butter Masala" details="Soft paneer cubes in rich, creamy tomato gravy with butter and spices." price="Rs 220" />

        <MenuItem src="https://picsum.photos/400?random=12" name="Masala Maggi" details="Instant noodles cooked with onion, tomato, green chili, and Indian spices for a spicy street-style taste." price="Rs 70" />

        <MenuItem src="https://picsum.photos/400?random=4" name="Veg Biryani" details="Aromatic basmati rice cooked with mixed vegetables and traditional spices." price="Rs 180" />

        <MenuItem src="https://picsum.photos/400?random=5" name="Vada Pav" details="Spicy potato fritter inside soft bun served with chutneys and fried chili." price="Rs 40" />

        <MenuItem src="https://picsum.photos/400?random=6" name="Manchurian" details="Crispy vegetable balls tossed in spicy Indo-Chinese sauce." price="Rs 160" />

        <MenuItem src="https://picsum.photos/400?random=7" name="Butter Naan" details="Soft, fluffy Indian flatbread made with butter, perfect with curries." price="Rs 40" />

        <MenuItem src="https://picsum.photos/400?random=8" name="Cheese Pizza" details="Loaded with mozzarella cheese, fresh veggies, and rich tomato sauce." price="Rs 250" />

        <MenuItem src="https://picsum.photos/400?random=9" name="Veg Burger" details="Crispy veg patty with lettuce, tomato, cheese, and special sauce in bun." price="Rs 90" />

        <MenuItem src="https://picsum.photos/400?random=10" name="Cold Coffee" details="Chilled coffee blended with milk, ice cream, and chocolate syrup." price="Rs 110" />

        <MenuItem src="https://picsum.photos/400?random=11" name="Chole Bhature" details="Spicy chickpea curry served with fluffy deep-fried bhature." price="Rs 160" />

        </div>
      </div>
    </section>
  );
}
function CustomerReviewItem(props){
  // object destructring 
  let {name,review}=props;
  return(  <div className="col-md-6 col-lg-3">
            <div className="testimonial-item text-center">
              <p className="mb-4">
                {review}
              </p>
              <h6 className="text-gold">— {name}</h6>
            </div>
          </div>);
}
function Testimonials() {
  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title text-gold">What Our Guests Say</h2>
        </div>
        <div className="row g-4">
          <CustomerReviewItem name="Hasti" review="it's great experience to have authentic indian food at Kathiyawadi point"/>
          <CustomerReviewItem name="Rahul Mehta" review="Amazing food quality and authentic Indian flavors. The pav bhaji was absolutely delicious!" />
          <CustomerReviewItem name="Sneha Sharma" review="Loved the ambience and the taste. One of the best places for comfort food in the city." />
          <CustomerReviewItem name="Amit Patel" review="Great service and fresh food. The masala dosa was perfectly crispy and tasty." />
          <CustomerReviewItem name="Neha Joshi" review="Highly recommended! The staff is polite and the food tastes like homemade." />
          <CustomerReviewItem name="Karan Verma" review="Quick service and great taste. The vada pav reminded me of Mumbai street food." />
          <CustomerReviewItem name="Pooja Desai" review="Very clean place with delicious food. I loved the paneer butter masala." />
          <CustomerReviewItem name="Rohan Singh" review="Best place for evening snacks with friends. Must try their cold coffee!" />
          <CustomerReviewItem name="Anjali Kapoor" review="The food quality is excellent and the prices are very reasonable." />
          <CustomerReviewItem name="Vikas Malhotra" review="Authentic taste, good portions, and fast service. Will visit again for sure." />
          <CustomerReviewItem name="Priya Nair" review="The biryani was full of flavor and perfectly cooked. Truly enjoyed the meal!" />

        </div>
      </div>
    </section>
  );
}
function Image(props){
  let {src}=props;
  return( <div className="col-6 col-md-4 col-lg-3">
            <img
               src={props.src}
              className="img-fluid gallery-img rounded shadow"
              alt="Gallery 1"
            />
          </div>);
}
function Gallery() {
  return (
    <section id="gallery" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title text-gold">Gallery</h2>
          <p className="lead">Moments from Delizioso</p>
        </div>
        <div className="row g-3">
         <Image  src="https://picsum.photos/400?random=12"/>
         <Image  src="https://picsum.photos/400?random=13"/>
         <Image  src="https://picsum.photos/400?random=14"/>
         <Image  src="https://picsum.photos/400?random=15"/>
         <Image  src="https://picsum.photos/400?random=16"/>
         <Image  src="https://picsum.photos/400?random=17"/>
         <Image  src="https://picsum.photos/400?random=18"/>
         <Image  src="https://picsum.photos/400?random=19"/>
        </div>
      </div>
    </section>
  );
}
function ContactUs() {
  return (
    <section id="contact" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title text-gold">Visit Us</h2>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h4 className="text-gold mb-4">Contact Information</h4>
            <p>
              <i className="fas fa-map-marker-alt me-2" /> 123 Restaurant
              Street, New York, NY 10001
            </p>
            <p>
              <i className="fas fa-phone me-2" /> +1 (555) 123-4567
            </p>
            <p>
              <i className="fas fa-envelope me-2" /> info@delizioso.com
            </p>
            <p>
              <i className="fas fa-clock me-2" /> Mon–Thu: 11am–10pm | Fri–Sun:
              11am–11pm
            </p>
          </div>
          <div className="col-lg-6">
            <form>
              <div className="row g-3">
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
                <div className="col-12">
                  <textarea
                    className="form-control"
                    rows={5}
                    placeholder="Your Message"
                    required=""
                    defaultValue={""}
                  />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn bg-gold text-white px-5">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="py-5 text-center">
      <div className="container">
        <p className="mb-3">
          © 2025 Delizioso Restaurant. All rights reserved.
        </p>
        <p>
          <a href="#" className="text-gold mx-2">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#" className="text-gold mx-2">
            <i className="fab fa-instagram" />
          </a>
          <a href="#" className="text-gold mx-2">
            <i className="fab fa-tripadvisor" />
          </a>
        </p>
      </div>
    </footer>
  );
}
function Site(props) {
  return (
    <>
      {/* Navbar */}
      <Navbar sitename={props.sitename} />
      {/* Hero Slider */}
      <Slider sitename={props.sitename} slogan={props.slogan} />
      {/* Introduction */}
      <Introduction />
      {/* About Us */}
      <AboutUs />
      {/* Menu */}
      <Menu />
      {/* Testimonials */}
      <Testimonials />
      {/* Gallery */}
      <Gallery />
      {/* Contact Us */}
      <ContactUs />
      {/* Footer */}
      <Footer />
    </>
  );
}

root.render(
  <Site sitename="Kathiyawadi point" slogan="Desi foods with authentic taste" />
);
