import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import { NavLink } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-cta-title">Ready for a Fresh Start?</h2>
        <div className="footer-cta-desc">
          Join hundreds of Ottawa families who trust us with their homes. Get your personalized quote today!
        </div>
        <div className="footer-cta-btn-row">
          <NavLink to="/quote" className="footer-btn footer-btn--outline">Get Your Quote</NavLink>
          <NavLink to="/book" className="footer-btn footer-btn--primary">Book Now</NavLink>
        </div>
        <div className="footer-cta-phone">
          Questions? Call us at <span>(613) 513-9893</span>
        </div>
      </div>
      <div className="footer-main container">
        <div className="footer-col footer-brand">
          <div className="footer-logo">
            <span>Clean. Cared for.<br />Yours.</span>
          </div>
          <div className="footer-brand-desc">
            Ottawa's trusted cleaning service bringing warmth, reliability, and premium care to homes across the city.
          </div>
          <div className="footer-social">
            <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Quick Links</div>
          <nav className="footer-links">
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} end>
              Home
            </NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
              Services
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              About Us
            </NavLink>
            <NavLink to="/quote" className={({ isActive }) => isActive ? "active" : ""}>
              Get a Quote
            </NavLink>
            <NavLink to="/book" className={({ isActive }) => isActive ? "active" : ""}>
              Book a Clean
            </NavLink>
            <NavLink to="/faq" className={({ isActive }) => isActive ? "active" : ""}>
              FAQ
            </NavLink> 
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              Contact
            </NavLink>   
          </nav>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Contact Us</div>
          <div className="footer-contact-row">
            <FiPhone /> <span>(613) 513-9893</span>
          </div>
          <div className="footer-contact-row">
            <FiMail /> <span>decleaningservicesottawa@gmail.com</span>
          </div>
          <div className="footer-contact-row">
            <FiMapPin /> <span>Serving Ottawa and surrounding areas</span>
          </div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Service Areas</div>
          <div className="footer-service-areas">
            We proudly serve:
            <ul>
              <li>Central Ottawa</li>
              <li>Centretown</li>
              <li>ByWard Market</li>
              <li>Downtown Ottawa</li>
              <li>Little Italy</li>
              <li>Hintonburg</li>
              <li>Glebe</li>
              <li>Sandy Hill</li>
              <li>...and many more!</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}