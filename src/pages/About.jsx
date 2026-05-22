import React from "react";
import { FaRegHeart, FaUsers, FaShieldAlt, FaMedal } from "react-icons/fa";
import "./About.css";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-hero">
        <div className="about-hero-quote">
          After more than five years of professionally cleaning homes, I realized something powerful: I wasn't just scrubbing surfaces, I was building relationships.
        </div>
      </div>

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

      <div className="about-main container">
        <div className="about-story">
          {/* ... your Ottawa story content stays here unchanged ... */}
        </div>
      </div>

      {/* WHAT DRIVES US */}
      <div className="about-values-section about-values-section--gray">
        {/* ... your values grid stays here unchanged ... */}
      </div>

      {/* WHY OTTAWA TRUSTS US */}
      <div className="trust-section">
        {/* ... your trust section stays here unchanged ... */}
      </div>
    </section>
  );
}
