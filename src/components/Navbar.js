import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">Sahil Portfolio</a>
        <ul className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#Home" onClick={toggleMobileMenu}>Home</a></li>
          <li><a href="#About" onClick={toggleMobileMenu}>About</a></li>
          <li><a href="#Skills" onClick={toggleMobileMenu}>Skills</a></li>
          <li><a href="#Projects" onClick={toggleMobileMenu}>Projects</a></li>
          <li><a href="#Timeline" onClick={toggleMobileMenu}>Timeline</a></li>
        </ul>
        <div className="navbar-toggle" id="mobile-menu" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;