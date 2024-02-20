// Navbar.js
import React from 'react';
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="Navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Logo</a>
        </div>
        <ul className="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
