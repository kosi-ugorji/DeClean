import React, { useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";
import reviewsBg from "../assets/reviewsbg.png";

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
                <a href="tel:+16135139893">📞 (613) 513-9893</a> &nbsp;
                <a href="mailto:decleancleaningservicesottawa@gmail.com">
                  ✉️ decleancleaningservicesottawa@gmail.com
                </a>
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

      {/* GOOGLE REVIEWS */}
      <section className="reviews-section">
        <div
          className="elfsight-app-3a7f5102-08ec-4999-9a40-7dc89113f754"
          data-elfsight-app-lazy
        ></div>
      </section>

      {/* FEATURES (NOW SHOWING OUR SERVICES CONTENT) */}
      <section className="features">
        <div className="container">
          <h1 className="section-title"><b>Our Services</b></h1>
          <div className="communities-grid">
            {[
              { img: residentialCleaning, title: "Residential Cleaning", desc: "Regular home cleaning" },
              { img: seniorFriendlyCleaning, title: "Senior Cleaning", desc: "Careful, respectful service" },
              { img: airbnbTurnovers, title: "Airbnb Turnovers", desc: "Fast guest-ready cleaning" },
              { img: moveInMoveOut, title: "Move Cleaning", desc: "Deep cleaning service" }
            ].map((s, i) => (
              <Link to="/services" key={i} className="community-card">
                <img src={s.img} alt={s.title} />
                <div className="community-title">{s.title}</div>
                <div className="community-desc">{s.desc}</div>
                <div className="community-more">MORE +</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section>
        <div className="cta-banner">
          <h3>NEED CLEANING THIS WEEK?</h3>
          <Link to="/contact" className="btn">Book Now</Link>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="instagram-section">
        <div
          className="elfsight-app-ff011d70-6144-4599-b90f-b96af1b5238c"
          data-elfsight-app-lazy
        ></div>
      </section>
    </main>
  );
}
