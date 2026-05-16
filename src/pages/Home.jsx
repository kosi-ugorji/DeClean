import React, { useEffect } from "react";
import { FiPhone, FiShield, FiMapPin, FiAward, FiCheckCircle, FiHeart, FiSmile, FiCheck } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";

import airbnbTurnovers from "../assets/airbnb_turnover.png";
import residentialCleaning from "../assets/residential_cleaning.png";
import seniorFriendlyCleaning from "../assets/senior_friendly.png";
import moveInMoveOut from "../assets/empty_apartment.png";
import houseImage from "../assets/house_pic.png";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="home-page">
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-left">
            <h1>Ottawa's Trusted<br />Cleaning for Homes,<br />Rentals & Busy Lives</h1>
            <p className="hero-subtitle">
              Professional cleaning services that bring peace of mind to your home.
              Background-checked, insured, and dedicated to making your space sparkle.
            </p>
            <div className="hero-cta-row">
              <NavLink to="/quote" className="btn btn-outline hero-btn">Get a Quote</NavLink>
              <NavLink to="/book" className="btn btn-primary hero-btn">Book a Clean</NavLink>
            </div>
            <div className="hero-contact-row">
              <FiPhone size={22} style={{ opacity: 0.6, marginRight: 8 }} />
              <span className="hero-contact-label">Call us:</span>
              <a href="tel:6135139893" className="hero-contact-phone">(613) 513-9893</a>
            </div>
          </div>
          <div className="hero-right">
            <img src={houseImage} alt="Clean home" className="hero-image" />
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
         <!-- Elfsight Google Reviews | Untitled Google Reviews -->
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div class="elfsight-app-3a7f5102-08ec-4999-9a40-7dc89113f754" data-elfsight-app-lazy></div>

      {/* TRUST FEATURES */}
      <section className="trust-section">
        <h2 className="section-title">Why Ottawa Families Trust Us</h2>
        <div className="features-row">
          {[
            { icon: <FiShield />, title: "Background-Checked", desc: "All cleaners vetted" },
            { icon: <FiMapPin />, title: "Locally Owned", desc: "Ottawa-based business" },
            { icon: <FiAward />, title: "Liability Insured", desc: "Fully protected service" },
            { icon: <FiCheckCircle />, title: "Professionally Trained", desc: "Expert cleaning standards" },
            { icon: <FiHeart />, title: "Senior Friendly", desc: "Compassionate care" },
            { icon: <FiSmile />, title: "Satisfaction Guaranteed", desc: "100% quality promise" },
          ].map((f, i) => (
            <div className="feature" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <div>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">
        <h2 className="section-title">Our Cleaning Services</h2>
        <p className="services-subtitle">
          From regular home maintenance to specialized cleaning needs, we've got the perfect service for your lifestyle.
        </p>
        <div className="services-grid">
          {[
            { img: residentialCleaning, title: "Residential Cleaning", desc: "Regular home cleaning for busy professionals and families", features: ["Weekly/Bi-weekly options", "Eco-friendly products", "Consistent cleaners"] },
            { img: seniorFriendlyCleaning, title: "Senior-Friendly Cleaning", desc: "Gentle, patient service designed for seniors and their families", features: ["10% senior discount", "Same cleaner guarantee", "Respectful service"] },
            { img: airbnbTurnovers, title: "Airbnb Turnovers", desc: "Fast, reliable turnovers that boost your reviews", features: ["Same-day service", "Before/after photos", "Guest-ready touches"] },
            { img: moveInMoveOut, title: "Move-In/Move-Out", desc: "Deep cleaning for transitions and property handovers", features: ["Top-to-bottom clean", "Landlord documentation", "Deposit protection"] },
          ].map((s, i) => (
            <div className="service-card" key={i}>
              <img src={s.img} alt={s.title} className="service-image" />
              <div className="service-info">
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <ul className="service-features">
                  {s.features.map((f, j) => (
                    <li key={j}><FiCheck className="feature-check" /> {f}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="services-btn-row">
          <Link to="/services" className="btn btn-outline">View All Services</Link>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">
        <h2 className="section-title">Why Clients Love Us</h2>
        <p className="testimonials-subtitle">Peace of mind, every time</p>
        <div className="testimonials-grid">
          {[1, 2, 3].map((item) => (
            <div className="testimonial-card" key={item}>
              <div className="testimonial-stars">
                {Array(5).fill().map((_, i) => <FaStar key={i} className="star" />)}
              </div>
              <BiSolidQuoteAltLeft className="testimonial-quote-icon" />
              <p className="testimonial-text">
                "Absolutely seamless! Booking online was easy, and my cleaner was right on time and incredibly thorough."
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
