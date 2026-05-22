import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiShield,
  FiMapPin,
  FiAward,
  FiCheckCircle,
  FiHeart,
  FiSmile,
  FiCheck,
  FiMessageCircle
} from "react-icons/fi";

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
    // Load Elfsight script once when component mounts
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main>
      {/* FLOATING WHATSAPP BUTTON */}
      <a
        href="https://wa.me/234XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
      >
        <FiMessageCircle />
      </a>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner container">
          <motion.div
            className="hero-left"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>
              Premium Cleaning<br />
              for Homes & Rentals
            </h1>
            <p className="hero-subtitle">
              Reliable, insured cleaners delivering spotless results every time.
            </p>
            <div className="hero-cta-row">
              <NavLink to="/quote" className="btn btn-outline hero-btn">
                Get Quote
              </NavLink>
              <NavLink to="/book" className="btn btn-primary hero-btn">
                Book Now
              </NavLink>
            </div>
            <div className="hero-contact-row">
              <FiPhone />
              <a href="tel:6135139893">(613) 513-9893</a>
            </div>
            <div className="hero-rating">⭐ Rated 5.0 by customers</div>
          </motion.div>

          <motion.div
            className="hero-right"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src={houseImage} alt="Clean home" />
          </motion.div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="reviews-section">
        <h2 className="section-title">What Our Clients Say</h2>
        {/* Elfsight Google Reviews */}
        <div
          className="elfsight-app-3a7f5102-08ec-4999-9a40-7dc89113f754"
          data-elfsight-app-lazy
        ></div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <div className="features-row">
            {[
              [FiShield, "Background Checked", "Trusted cleaners"],
              [FiMapPin, "Locally Owned", "Proudly serving Ottawa"],
              [FiAward, "Insured", "Full protection"],
              [FiCheckCircle, "Trained Staff", "Professional cleaning"],
              [FiHeart, "Senior Friendly", "Gentle care"],
              [FiSmile, "Guaranteed", "100% satisfaction"]
            ].map(([Icon, title, desc], i) => (
              <div className="feature" key={i}>
                <Icon className="feature-icon" />
                <div>
                  <div className="feature-title">{title}</div>
                  <div className="feature-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
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
