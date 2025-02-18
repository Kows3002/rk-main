import React from "react";
import { motion } from "framer-motion";
import { Home, Shield, Leaf } from "lucide-react";
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
        <div
          className="hero-section"
          style={{ backgroundImage: "url('/images/aboutImage.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Transforming Dreams Into Reality
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Your gateway to premium real estate experiences.
            </motion.p>
          </div>
        </div>






        {/* Mission Section */}
        <section className="mission-section">
          <motion.h2 className="section-title">Our Mission</motion.h2><motion.h2 className="section-title">kows</motion.h2>
          <p className="section-text">
            Our commitment is to change the way real estate is perceived, through innovation, transparency, and a focus on sustainability.
          </p>
          <div className="mission-cards">
            <div className="mission-card">
              <div className="icon-container">
                <Home className="icon" />
              </div>
              <h3>Modern Villas</h3>
              <p>Innovative, elegant, and future-ready homes.</p>
            </div>
            <div className="mission-card">
              <div className="icon-container">
                <Shield className="icon" />
              </div>
              <h3>Secure Payments</h3>
              <p>Complete transparency and security for all transactions.</p>
            </div>
            <div className="mission-card">
              <div className="icon-container">
                <Leaf className="icon" />
              </div>
              <h3>Sustainability</h3>
              <p>Environmentally-conscious solutions for a sustainable future.</p>
            </div>
          </div>
        </section>



        {/*exclusive section*/}
        <section className="exclusive-section">
          <div className="exclusive-content">
            <h2 className="exclusive-title">Exclusive Properties</h2>
            <p className="exclusive-description">
              Discover premium properties with top-tier amenities, luxurious designs,
              and a world-class living experience. Your dream home awaits.
            </p>
            <div className="exclusive-stats">
              <div className="stat-item">
                <i className="fa fa-trophy"></i>
                <h3>4M+</h3>
                <p>Award Winning</p>
              </div>
              <div className="stat-item">
                <i className="fa fa-building"></i>
                <h3>12K+</h3>
                <p>Properties Ready</p>
              </div>
              <div className="stat-item">
                <i className="fa fa-smile"></i>
                <h3>20M+</h3>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div className="exclusive-image">
            <img src="/images/featuredImage.jpg" alt="Luxury House" />
          </div>
        </section>




        {/* Trusted Agents */}
        <section className="agents-section">
          <h2 className="section-title">Our Exclusive Agents</h2>
          <p className="section-description">
            Meet our dedicated agents who go the extra mile to ensure the best service.
            With years of experience, they're the perfect partners to help you achieve your goals.
          </p>
          <div className="agents-list">
            <div className="agent-card">
              <img src="/images/agent1-image.jpg" alt="Agent" />
              <p>Krish</p>
            </div>
            <div className="agent-card">
              <img src="/images/agent2-image.jpg" alt="Agent" />
              <p>Mohan</p>
            </div>
            <div className="agent-card">
              <img src="/images/agent3-image.jpg" alt="Agent" />
              <p>Harish</p>
            </div>
            <div className="agent-card">
              <img src="/images/agent4-image.jpg" alt="Agent" />
              <p>Sam</p>
            </div>
          </div>
          <div className="cta">
            <button className="cta-button">Contact Our Agents</button>
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
