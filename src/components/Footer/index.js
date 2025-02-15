import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./index.css";

export default function Footer() {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log("Subscribing email:", email);
      setEmail("");
    }
  };

  return (
    <footer className="footer">
      <div className="footer-bg">
        <div className="footer-content">
          

          <div className="footer-sections">
            <div className="footer-main">
              <div className="company-info">
                <div className="logo-wrapper">
                  <img
                    src="/images/mainLogo.jpg"  
                    alt="Homez logo"
                    className="logo-image"
                  />
                  <span className="logo-text">RKHousing</span>
                </div>
                <h3 className="info-title">Address</h3>
                <p className="address-text">
                Maduravoyal , MGR University Opposite, Chennai, Tamil Nadu 600018, India.
                </p>
                <h3 className="info-title">Customer Care</h3>
                <p className="contact-text">+(91) 9566609617, 9944311909</p>
                <h3 className="info-title">Need Live Support?</h3>
                <p className="contact-text">Rkhousing77@gmail.com</p>
              </div>

              <div className="popular-search">
                <h3 className="section-title">Popular Searches</h3>
                <ul className="link-list">
                  <li className="link-item">Apartment for Sale</li>
                  {/* <li className="link-item">Apartment Low to High</li> */}
                  <li className="link-item">Villas for Sale</li>
                  <li className="link-item">Offices for Sale</li>
                  <li className="link-item">Luxury Homes</li>
                  {/* <li className="link-item">Beachfront Properties</li> */}
                  <li className="link-item">Commercial Spaces</li>
                  <li className="link-item">Plots for Investment</li>
                  <li className="link-item">Gated Community Apartments</li>
                  {/* <li className="link-item">Affordable Housing</li> */}
                  <li className="link-item">Duplex Homes for Sale</li>
                  {/* <li className="link-item">Rental Properties</li> */}
                  {/* <li className="link-item">Co-Working Spaces</li> */}
                  <li className="link-item">Farmhouses for Weekend Getaways</li>
                  <li className="link-item">Pre-Launch Projects</li>
                </ul>
              </div>

              <div className="quick-links">
                <h3 className="section-title">Quick Links</h3>
                <ul className="link-list">
                  <li className="link-item">Terms of Use</li>
                  <li className="link-item">Privacy Policy</li>
                  <li className="link-item">Pricing Plans</li>
                  <li className="link-item">Our Services</li>
                  <li className="link-item">Contact Support</li>
                  <li className="link-item">FAQs</li>
                </ul>
              </div>

              <div className="apps-section">
                <h3 className="section-title">Apps</h3>
                <button
                  className="app-download-button"
                  aria-label="Download on Apple Store"
                >
                  <span className="store-icon" aria-hidden="true"></span>
                  <img
                    src="/images/mainlogo.jpg"
                    alt="Homez logo"
                    className="logo-image"
                  />
                  <div className="store-info">
                    <span className="store-subtitle">Download on the</span>
                    <span className="store-title">Apple Store</span>
                  </div>
                </button>
                <button
                  className="app-download-button"
                  aria-label="Get it on Google Play"
                >
                  <span className="store-icon" aria-hidden="true"></span>
                  <img
                    src="/images/mainlogo.jpg"
                    alt="Homez logo"
                    className="logo-image"
                  />
                  <div className="store-info">
                    <span className="store-subtitle">Get it on</span>
                    <span className="store-title">Google Play</span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="footer-divider" />

          <div className="footer-bottom">
            <p className="copyright">© RKHousing - All rights reserved</p>
            <div className="social-links">
              <span className="follow-text">Follow us</span>
              <button className="social-icon" aria-label="Facebook">
                <FaFacebookF />
              </button>
              <button className="social-icon" aria-label="Twitter">
                <FaTwitter />
              </button>
              <button className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </button>
              <button className="social-icon" aria-label="LinkedIn">
                <FaLinkedinIn />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
