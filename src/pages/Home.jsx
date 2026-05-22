import React, { useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import "./Home.css";
import reviewsBg from "../assets/reviewsbg.png";

import airbnbTurnovers from "../assets/airbnb_turnover.png";
import residentialCleaning from "../assets/residential_cleaning.png";
import seniorFriendlyCleaning from "../assets/senior_friendly.png";
import moveInMoveOut from "../assets/empty_apartment.png";
import teamPhoto from "../assets/squeaky_team.png"; // replace with your actual image path

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

      {/* ABOUT SQUEAKY CLEAN (Inserted here) */}
      <section className="about-section">
        <div className="about-container">
          {/* LEFT SIDE TEXT */}
          <div className="about-text">
            <h2 className="about-title">About Squeaky Clean</h2>
            <h3 className="about-subtitle">Nigeria's Most Trusted Cleaning Service</h3>
            <p>
              Since 2013, SqueakyClean Nigeria has been setting the standard for professional cleaning services across the country. 
              We combine traditional cleaning excellence with modern techniques and eco-friendly products to deliver exceptional results.
            </p>
            <p>
              Our team of certified professionals understands that a clean environment is essential for health, productivity, and peace of mind. 
              Whether it’s your home, office, or commercial space, we treat every project with the same attention to detail and commitment to excellence.
            </p>

            <ul className="about-list">
              <li>Quality workmanship in every project</li>
              <li>Eco-friendly cleaning solutions</li>
              <li>Transparent pricing with no hidden fees</li>
              <li>Reliable and punctual service delivery</li>
              <li>Customer satisfaction guarantee</li>
            </ul>

            <div className="about-stats">
              <div><strong>1,500+</strong> Trained Professionals</div>
              <div><strong>500+</strong> Clients</div>
            </div>

            <div className="about-highlights">
              <div><strong>Industry Leader</strong><br />Over 20 years of excellence in professional cleaning services across Nigeria</div>
              <div><strong>Fully Insured</strong><br />Complete insurance coverage and bonding for your peace of mind</div>
              <div><strong>24/7 Service</strong><br />Emergency cleaning services available around the clock</div>
              <div><strong>Trained Professionals</strong><br />Certified cleaning professionals with ongoing training programs</div>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="about-image">
            <img src={teamPhoto} alt="SqueakyClean Nigeria Team" />
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

      {/* OUR SERVICES (Hover effect style) */}
      <section className="features">
        <div className="container">
          <h1 className="section-title"><b>Our Services</b></h1>
          <div className="communities-grid two-per-row">
            {[
              { img: residentialCleaning, title: "Residential Cleaning", desc: "Regular home cleaning" },
              { img: seniorFriendlyCleaning, title: "Senior Cleaning", desc: "Careful, respectful service" },
              { img: airbnbTurnovers, title: "Airbnb Turnovers", desc: "Fast guest-ready cleaning" },
              { img: moveInMoveOut, title: "Move Cleaning", desc: "Deep cleaning service" }
            ].map((s, i) => (
              <Link to="/services" key={i} className="community-card service-card">
                <img src={s.img} alt={s.title} className="community-img" />
                <div className="overlay">
                  <div className="service-info">
                    <div className="community-title">{s.title}</div>
                    <div className="community-desc">{s.desc}</div>
                    <div className="community-more">MORE +</div>
                  </div>
                </div>
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
