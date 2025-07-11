import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-cta-title">Ready for a Fresh Start?</h2>
        <div className="footer-cta-desc">
          Join hundreds of Ottawa families who trust us with their homes. Get your personalized quote today!
        </div>
        <div className="footer-cta-btn-row">
          <a href="/quote" className="footer-btn footer-btn--primary">Get Your Quote</a>
          <a href="/book" className="footer-btn">Book Now</a>
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
            <a href="/">Home</a>
            <a href="/services">Services</a>
            <a href="/about">About Us</a>
            <a href="/quote">Get a Quote</a>
            <a href="/book">Book a Clean</a>
            <a href="/faq">FAQ</a>
            <a href="/contact">Contact</a>
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