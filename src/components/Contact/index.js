import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ContactModal from '../ContactModal';
import './index.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <>
    <ContactModal />
    <Navbar />
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Get in touch with us for any inquiries about our properties</p>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Real Estate Avenue</p>
            <p>Chennai, Tamil Nadu</p>
          </div>

          <div className="info-item">
            <h3>Phone</h3>
            <p>+91 1234567890</p>
            <p>+91 9876543210</p>
          </div>

          <div className="info-item">
            <h3>Email</h3>
            <p>info@rkhousing.com</p>
            <p>sales@rkhousing.com</p>
          </div>

          <div className="info-item">
            <h3>Working Hours</h3>
            <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Your Phone" required />
          </div>
          <div className="form-group">
            <select required>
              <option value="">Select Inquiry Type</option>
              <option value="property">Property Inquiry</option>
              <option value="pricing">Pricing</option>
              <option value="visit">Schedule Visit</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <textarea placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="map-container">
        <iframe
          title="RK Housing Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.11463437837!2d79.92880733435084!3d13.048043801320511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1642432085545!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Contact;