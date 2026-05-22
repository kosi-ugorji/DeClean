import React, { useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
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
                <a href="mailto:decleancleaningservicesottawa@gmail.com">✉️ decleancleaningservicesottawa@gmail.com</a>
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

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            {[
              { img: residentialCleaning, title: "Residential Cleaning", desc: "Regular home cleaning" },
              { img: seniorFriendlyCleaning, title: "Senior Cleaning", desc: "Careful, respectful service" },
              { img: airbnbTurnovers, title: "Airbnb Turnovers", desc: "Fast guest-ready cleaning" },
              { img: moveInMoveOut, title: "Move Cleaning", desc: "Deep cleaning service" }
            ].map((s, i) => (
              <Link to="/services" key={i} className="service-card">
                <img src={s.img} alt={s.title} />
                <div className="overlay">
                  <div className="service-title">{s.title}</div>
                  <div className="service-desc">{s.desc}</div>
                </div>
              </Link>
            ))}
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

  

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <h1 className="section-title"><b>WHY CHOOSE US</b></h1>
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

