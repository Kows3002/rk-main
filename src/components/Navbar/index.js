import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IoMdCall } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/mainlogo.jpg" onClick={()=>{navigate('/')}} alt="website logo" className="website-logo" />
        <div className="logo">
          <span className="logo-part1">RK</span>
          <span className="logo-part2">Housing</span>
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={handleCloseMenu}>Home</Link>
        <Link to="/listing" onClick={handleCloseMenu}>Listings</Link>
        <Link to="/about" onClick={handleCloseMenu}>About</Link>
        <Link to="/contact" onClick={handleCloseMenu}>Contact</Link>
      </div>

      <div className="contact-info">
        <button className="cta-button" onClick={handleCloseMenu}>
          <IoMdCall size={25} />
          Schedule Call
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button className="menu-button" onClick={handleMenuToggle}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'show' : ''}`}>
        <Link to="/" onClick={handleCloseMenu}>Home</Link>
        <Link to="/listing" onClick={handleCloseMenu}>Listings</Link>
        <Link to="/about" onClick={handleCloseMenu}>About</Link>
        <Link to="/contact" onClick={handleCloseMenu}>Contact</Link>
        <button className="cta-button" onClick={handleCloseMenu}>Schedule Call</button>
      </div>
    </nav>
  );
};

export default Navbar;
