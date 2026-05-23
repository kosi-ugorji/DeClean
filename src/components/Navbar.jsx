import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiPhone, FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="navbar-outer">
      <nav className="navbar container">
        <Link to="/" className="navbar-logo">
          Clean. <span>Cared for.</span> Yours.
        </Link>

        <button
          className="navbar-mobile-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>

        <ul className={`navbar-menu ${mobileOpen ? 'open' : ''}`}>
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""} 
              end 
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/services" 
              className={({ isActive }) => isActive ? "active" : ""} 
              onClick={() => setMobileOpen(false)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "active" : ""} 
              onClick={() => setMobileOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/faq" 
              className={({ isActive }) => isActive ? "active" : ""} 
              onClick={() => setMobileOpen(false)}
            >
              FAQ
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "active" : ""} 
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Phone call button */}
        <a href="tel:+1234567890" className="navbar-phone">
          <FiPhone size={24} /> Call Us
        </a>
      </nav>
    </header>
  );
}
