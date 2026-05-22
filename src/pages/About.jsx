import React from "react";
import { Link } from "react-router-dom"; // use Link for routing
import { FaRegHeart, FaUsers, FaShieldAlt, FaMedal } from "react-icons/fa";
import "./About.css";
import Aboutus1 from "../assets/Aboutus1.jpeg"; 
import Aboutus2 from "../assets/Aboutus2.jpeg";

export default function AboutSection() {
  return (
    <section className="about-section">
      {/* NEW ABOUT SQUEAKY CLEAN SECTION */}
      <div className="about-squeaky">
        <h2 className="about-squeaky-title">About Squeaky Clean Nigeria</h2>
        <p className="about-squeaky-subtitle">
          Nigeria's premier cleaning service company, delivering exceptional results since 2003
        </p>
        <div className="about-squeaky-stats">
          <div className="stat">
            <span className="stat-number">1,500+</span>
            <span className="stat-label">Trained Professionals</span>
          </div>
          <div className="stat">
            <span className="stat-number">20+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat">
            <span className="stat-number">500+</span>
            <span className="stat-label">Clients</span>
          </div>
          <div className="stat">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support Available</span>
          </div>
        </div>
      </div>

      {/* OTTAWA STORY WITH IMAGES */}
      <div className="our-story-container">
        <div className="our-story-text">
          <h2 className="our-story-title">Our Story</h2>
          <p>
            We are committed to delivering the best cleaning service in Ottawa through reliable service, attention to detail, and professional care. As a trusted cleaning service company, we provide high-quality residential and commercial cleaning solutions tailored to the needs of homeowners, renters, property managers, seniors, and busy professionals across Ottawa. <b>Cleaning is not just a service, it's a form of care.</b>
          </p>
          <p>
            Our services include house cleaning service, deep cleaning, recurring home cleaning, move-in and move-out cleaning, Airbnb and rental property cleaning, office cleaning, and cleaning services for homes and rentals in Ottawa. We also specialize in cleaning service for seniors in Ottawa, helping create clean, safe, and comfortable living spaces with dependable and respectful service.
          </p>
          <p>
            We focus on consistency, professionalism, and customer satisfaction in every visit. Whether you need weekly home cleaning, one-time deep cleaning, or reliable cleaning services in Ottawa for your property or business, our team is dedicated to delivering spotless results and a stress-free experience.
          </p>
          <div className="about-mission-card">
            <div className="about-mission-title"><b>Our Mission</b></div>
            <div className="about-mission-quote">
              <i>
                "To create work and stability for women, especially newcomers and underemployed caregivers, who deserve dignified, flexible jobs in a trusted, respectful environment."
              </i>
            </div>
          </div>
          <p>
            Many of the women I met in my early years as a cleaner were mothers, immigrants, or part-timers working quietly behind the scenes to support their families. They didn’t just need jobs; they needed opportunity, protection, and a team they could grow with. So that's what I built.
          </p>
          <p>
            Today, we're a community–first cleaning company rooted in Ottawa, offering modern, tech-enabled service with old-school reliability and personal care. Whether you're a busy professional, a senior, an Airbnb host, or a working parent, we are here to restore calm, comfort, and confidence in your space, one clean at a time.
          </p>
          <Link to="/contact" className="story-btn">Get In Touch</Link>
        </div>

        <div className="our-story-images">
          <img src={Aboutus1} alt="Our cleaning team" />
          <img src={Aboutus2} alt="Team at work" />
        </div>
      </div>

      {/* WHAT DRIVES US */}
      <div className="about-values-section about-values-section--gray">
        <div className="about-values-container container">
          <h2 className="about-values-title">What Drives Us</h2>
          <div className="about-values-subtitle">
            These aren't just values on a wall – they're the principles that guide every interaction, every clean, and every relationship we build.
          </div>
          <div className="about-values-grid">
            <div className="about-value-card">
              <div className="about-value-icon heart"><FaRegHeart /></div>
              <div className="about-value-title">Built on Care</div>
              <div className="about-value-desc">Every clean is delivered with empathy, consistency, and heart.</div>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon users"><FaUsers /></div>
              <div className="about-value-title">Community First</div>
              <div className="about-value-desc">We create dignified, flexible jobs for women, especially newcomers and caregivers.</div>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon shield"><FaShieldAlt /></div>
              <div className="about-value-title">Trust &amp; Reliability</div>
              <div className="about-value-desc">Background–checked cleaners, liability insurance, and consistent service every time.</div>
            </div>
            <div className="about-value-card">
              <div className="about-value-icon medal"><FaMedal /></div>
              <div className="about-value-title">Professional Excellence</div>
              <div className="about-value-desc">Modern, tech–enabled service with old–school reliability and personal care.</div>
            </div>
          </div>
        </div>
      </div>

      {/* WHY OTTAWA TRUSTS US */}
      <div className="trust-section trust-section--blue">
        <h2 className="trust-title">Why Ottawa Trusts Us</h2>
        <p className="trust-subtitle">
          These qualities define why families and businesses rely on us every day.
        </p>
        <div className="trust-grid">
          <div className="trust-card">
            <div className="trust-icon">🔍</div>
            <div className="trust-name">Background–Checked</div>
            <div className="trust-desc">Every cleaner is vetted for safety and reliability.</div>
          </div>
          <div className="trust-card">
            <div className="trust-icon">🏠</div>
            <div className="trust-name">Locally Owned</div>
            <div className="trust-desc">Proudly rooted in Ottawa, serving our community.</div>
          </div>
          <div className="trust-card">
            <div className="trust-icon">🛡️</div>
            <div className="trust-name">Liability Insured</div>
            <div className="trust-desc">Peace of mind with full coverage protection.</div>
          </div>
          <div className="trust-card">
            <div className="trust-icon">👩‍💼</div>
            <div className="trust-name">Professionally Trained</div>
            <div className="trust-desc">Skilled cleaners trained to deliver excellence.</div>
          </div>
          <div className="trust-card">
            <div className="trust-icon">⭐</div>
            <div className="trust-name">Satisfaction Guaranteed</div>
            <div className="trust-desc">We don’t stop until your space shines.</div>
          </div>
          <div className="trust-card">
            <div className="trust-icon">👵</div>
            <div className="trust-name">Senior Friendly</div>
            <div className="trust-desc">Gentle, respectful service for seniors at home.</div>
          </div>
        </div>
        <div className="trust-cta-row">
          <Link to="/book" className="trust-cta-link trust-cta-link--blue">Book a Clean</Link>
        </div>
      </div>
    </section>
  );
}
