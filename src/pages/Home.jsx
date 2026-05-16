import React from "react";
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
  return (
    <main>

      {/* HERO */}
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-left">
            <h1>
              Ottawa's Trusted<br />
              Cleaning for Homes,<br />
              Rentals & Busy Lives
            </h1>

            <p className="hero-subtitle">
              Professional cleaning services that bring peace of mind to your home.
              Background-checked, insured, and dedicated to making your space sparkle.
            </p>

            <div className="hero-cta-row">
              <NavLink to="/quote" className="btn btn-outline hero-btn">
                Get a Quote
              </NavLink>
              <NavLink to="/book" className="btn btn-primary hero-btn">
                Book a Clean
              </NavLink>
            </div>

            <div className="hero-contact-row">
              <FiPhone size={22} style={{ opacity: 0.5, marginRight: 8 }} />
              <span>Call us:</span>
              <a href="tel:6135139893" className="hero-contact-phone">
                (613) 513-9893
              </a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-card">
              <img src={houseImage} alt="Clean home" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">

        {/* Elfsight widget (IMPORTANT: do NOT use script tag in JSX) */}
        <div
          className="elfsight-app-3a7f5102-08ec-4999-9a40-7dc89113f754"
          data-elfsight-app-lazy
        ></div>

        <div className="container">
          <h2 className="section-title">Why Ottawa Families Trust Us</h2>

          <div className="features-row">
            <div className="feature">
              <FiShield className="feature-icon" />
              <div>
                <div className="feature-title">Background-Checked</div>
                <div className="feature-desc">All cleaners vetted</div>
              </div>
            </div>

            <div className="feature">
              <FiMapPin className="feature-icon" />
              <div>
                <div className="feature-title">Locally Owned</div>
                <div className="feature-desc">Ottawa-based business</div>
              </div>
            </div>

            <div className="feature">
              <FiAward className="feature-icon" />
              <div>
                <div className="feature-title">Liability Insured</div>
                <div className="feature-desc">Fully protected service</div>
              </div>
            </div>

            <div className="feature">
              <FiCheckCircle className="feature-icon" />
              <div>
                <div className="feature-title">Professionally Trained</div>
                <div className="feature-desc">Expert cleaning standards</div>
              </div>
            </div>

            <div className="feature">
              <FiHeart className="feature-icon" />
              <div>
                <div className="feature-title">Senior Friendly</div>
                <div className="feature-desc">Compassionate care</div>
              </div>
            </div>

            <div className="feature">
              <FiSmile className="feature-icon" />
              <div>
                <div className="feature-title">Satisfaction Guaranteed</div>
                <div className="feature-desc">100% quality promise</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Cleaning Services</h2>

          <div className="services-subtitle">
            From regular home maintenance to specialized cleaning needs.
          </div>

          <div className="services-grid">

            <div className="service-card">
              <img src={residentialCleaning} alt="Residential Cleaning" />
              <div className="service-title">Residential Cleaning</div>
              <div className="service-desc">Regular home cleaning for busy families</div>
              <ul>
                <li><FiCheck /> Weekly/Bi-weekly options</li>
                <li><FiCheck /> Eco-friendly products</li>
                <li><FiCheck /> Consistent cleaners</li>
              </ul>
            </div>

            <div className="service-card">
              <img src={seniorFriendlyCleaning} alt="Senior Cleaning" />
              <div className="service-title">Senior-Friendly Cleaning</div>
              <div className="service-desc">Gentle service designed for seniors</div>
              <ul>
                <li><FiCheck /> 10% senior discount</li>
                <li><FiCheck /> Same cleaner guarantee</li>
                <li><FiCheck /> Respectful service</li>
              </ul>
            </div>

            <div className="service-card">
              <img src={airbnbTurnovers} alt="Airbnb Cleaning" />
              <div className="service-title">Airbnb Turnovers</div>
              <div className="service-desc">Fast turnovers for hosts</div>
              <ul>
                <li><FiCheck /> Same-day service</li>
                <li><FiCheck /> Before/after photos</li>
                <li><FiCheck /> Guest-ready setup</li>
              </ul>
            </div>

            <div className="service-card">
              <img src={moveInMoveOut} alt="Move Cleaning" />
              <div className="service-title">Move-In/Move-Out</div>
              <div className="service-desc">Deep cleaning for transitions</div>
              <ul>
                <li><FiCheck /> Top-to-bottom clean</li>
                <li><FiCheck /> Landlord-ready</li>
                <li><FiCheck /> Deposit protection</li>
              </ul>
            </div>

          </div>

          <div className="services-btn-row">
            <Link to="/services" className="btn btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Why Clients Love Us</h2>

          <div className="testimonials-grid">

            {[1, 2, 3].map((item) => (
              <div className="testimonial-card" key={item}>
                <div className="testimonial-stars">
                  {Array(5).fill(0).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                <BiSolidQuoteAltLeft />

                <div className="testimonial-text">
                  Great service, very reliable and professional. Would recommend!
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  );
}
