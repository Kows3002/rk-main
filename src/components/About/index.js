import React from "react";
import { motion } from "framer-motion";
import { Home, Shield } from "lucide-react";
import "./index.css";
import Navbar from "../Navbar";
import ContactModal from "../ContactModal";
import Footer from "../Footer";

const AboutPage = () => {
  return (
    <>
      <ContactModal />
      <Navbar />
      <div className="about-container">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Us
            </motion.h1>
            <p className="hero-subtitle">We're On A Mission To Change The View Of Real Estate.</p>
          </div>
        </div>

        {/* Mission Section */}
        <section className="mission-section">
          <motion.h2 className="section-title">Our Mission</motion.h2>
          <p className="section-text">
            We are committed to transforming real estate with innovation, security, and sustainability.
          </p>
          <div className="mission-cards">
            <div className="mission-card">
              <Home className="icon" />
              <h3>Modern Villa</h3>
              <p>Elegant designs, future-ready homes.</p>
            </div>
            <div className="mission-card">
              <Shield className="icon" />
              <h3>Secure Payment</h3>
              <p>Trust and transparency in transactions.</p>
            </div>
          </div>
        </section>

        {/* Exclusive Properties */}
        <section className="exclusive-section">
          <div className="exclusive-image">
            <img src="/images/featuredImage.jpg" alt="Luxury House" />
          </div>
          <div className="exclusive-stats">
            <h3>4M</h3>
            <p>Award Winning</p>
            <h3>12K</h3>
            <p>Properties Ready</p>
            <h3>20M</h3>
            <p>Happy Customers</p>
          </div>
        </section>

        {/* Trusted Agents */}
        <section className="agents-section">
          <h2 className="section-title">Our Exclusive Agents</h2>
          <div className="agents-list">
            <div className="agent-card">
              <img src="/images/agent1-image.jpg" alt="Agent" />
              <p>Gopalu</p>
            </div>
            <div className="agent-card">
              <img src="/images/agent2-image.jpg" alt="Agent" />
              <p>Munusamy</p>
            </div>
            <div className="agent-card">
              <img src="/images/agent3-image.jpg" alt="Agent" />
              <p>Mariyappan</p>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <section className="cta-section">
          <div className="cta-content">
            <h2>Find The Right Selling Option For You</h2>
            <p>Explore mortgage services, currency assistance, and property management.</p>
            <button className="cta-button">Learn More</button>
          </div>
          <div className="cta-image">
            <img src="/images/aboutCoupleImage.jpg" alt="Couple holding house model" />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
