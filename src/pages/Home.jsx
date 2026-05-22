import React, { useEffect } from "react";
import { FiCheck, FiMessageCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";

import airbnbTurnovers from "../assets/airbnb_turnover.png";
import residentialCleaning from "../assets/residential_cleaning.png";
import seniorFriendlyCleaning from "../assets/senior_friendly.png";
import moveInMoveOut from "../assets/empty_apartment.png";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/2348025010074"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <FiMessageCircle />
      </a>

      {/* HERO */}
      <section className="hero-bg">
        <div className="hero-overlay">
          {/* NAVBAR */}
          <header className="hero-nav">
            <div className="nav-left">
              <span className="brand">Clean. Cared for. Yours.</span>
            </div>
            <div className="nav-right">
              <div className="contact-info">
                📞 (613) 513-9893 &nbsp; ✉️ admin@yourcompany.com
              </div>
              <div className="nav-divider"></div>
              <nav className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/services">Services</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/faq">FAQ</NavLink>
                <NavLink to="/contact">Contact</NavLink>
              </nav>
            </div>
          </header>

          {/* HERO TEXT */}
          <div className="hero-content">
            <h1 className="hero-title">
              Premium cleaning for<br />Homes & Rentals
            </h1>
            <div className="hero-divider"></div>
            <p className="hero-subtitle">
              Reliable, insured cleaners delivering<br />spotless results every time
            </p>
            <div className="hero-buttons">
              <NavLink to="/buy" className="btn btn-primary">
                GET QUOTE
              </NavLink>
              <NavLink to="/sell" className="btn btn-outline">
                BOOK NOW
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES (Communities-style grid) */}
      <section className="features">
        <div className="container">
          <h1 className="section-title">WHY CHOOSE US</h1>
          <div className="communities-grid">
            {[
              { title: "Background Checked", desc: "Trusted cleaners" },
              { title: "Locally Owned", desc: "Proudly serving Ottawa" },
              { title: "Insured", desc: "Full protection" },
              { title: "Trained Staff", desc: "Professional cleaning" },
              { title: "Senior Friendly", desc: "Gentle care" },
              { title: "Guaranteed", desc: "100% satisfaction" }
            ].map((item, i) => (
              <div className="community-card" key={i}>
                <div className="community-title">{item.title}</div>
                <div className="community-desc">{item.desc}</div>
                <div className="community-more">MORE +</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="reviews-section">
        <h2 className="section-title">What Our Clients Say</h2>
        <div
          className="elfsight-app-3a7f5102-08ec-4999-9a40-7dc89113f754"
          data-elfsight-app-lazy
        ></div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {[
              {
                img: residentialCleaning,
                title: "Residential Cleaning",
                desc: "Regular home cleaning",
                features: ["Weekly/bi-weekly", "Eco-friendly", "Trusted staff"]
              },
              {
                img: seniorFriendlyCleaning,
                title: "Senior Cleaning",
                desc: "Careful, respectful service",
                features: ["Discounted", "Same cleaner", "Gentle care"]
              },
              {
                img: airbnbTurnovers,
                title: "Airbnb Turnovers",
                desc: "Fast guest-ready cleaning",
                features: ["Same-day", "Photos", "5-star ready"]
              },
              {
                img: moveInMoveOut,
                title: "Move Cleaning",
                desc: "Deep cleaning service",
                features: ["Deep clean", "Landlord ready", "Deposit safe"]
              }
            ].map((s, i) => (
              <div className="service-card" key={i}>
                <img src={s.img} alt={s.title} />
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <ul>
                  {s.features.map((f, j) => (
                    <li key={j}>
                      <FiCheck /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="cta-banner">
            <h3>Need cleaning this week?</h3>
            <p>Book in under 1 minute.</p>
            <Link to="/book" className="btn btn-primary">
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Happy Clients</h2>
          <div className="testimonials-grid">
            {[
              "Super clean and reliable service.",
              "Very professional cleaners.",
              "Best cleaning service I’ve used."
            ].map((text, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {Array(5)
                    .fill(0)
                    .map((_, j) => (
                      <FaStar key={j} />
                    ))}
                </div>
                <BiSolidQuoteAltLeft />
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
