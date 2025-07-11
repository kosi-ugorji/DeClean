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
      <div className="about-main container">
        <div className="about-story">
          <p>
            Over time, my clients became more than just names on a schedule. They became friends, neighbors, and even family. I've helped new parents bring home their babies to clean nurseries, supported seniors who couldn't manage it all anymore, and prepped homes for joyful returnees after long trips. With every home, I saw the same thing: <b>cleaning is not just a service, it's a form of care.</b>
          </p>
          <p>
            That insight is what led me to start this business. I wanted to build something bigger than myself; a professional cleaning business that delivers with precision and polish, but also with empathy, consistency, and heart. I know firsthand what it feels like to be stretched too thin, overwhelmed, or simply in need of a hand. That's why every part of our service, from our checklists to our communication, is designed to ease your mental load and bring peace back into your home.
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
      <div className="trust-section">
        <div className="trust-section-container">
          <h2 className="trust-title">Why Ottawa Trusts Us</h2>
          <div className="trust-pills">
            <div className="trust-pill">Background–Checked</div>
            <div className="trust-pill">Locally Owned</div>
            <div className="trust-pill">Liability Insured</div>
            <div className="trust-pill">Professionally Trained Cleaners</div>
            <div className="trust-pill">Satisfaction Guaranteed</div>
            <div className="trust-pill">Senior Friendly Services</div>
          </div>
          <div className="trust-cta-row">
            <div className="trust-cta-text">
              Join hundreds of Ottawa families who trust us with their homes and peace of mind.
            </div>
            <a href="/book" className="trust-cta-link">Book a Clean</a>
          </div>
        </div>
      </div>


    </section>
  );
}




  

