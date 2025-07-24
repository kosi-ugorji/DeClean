import React from "react";
import { FiHome, FiPhone } from "react-icons/fi";
import "./Home.css";
import { FiShield, FiMapPin, FiAward, FiCheckCircle, FiHeart, FiSmile } from "react-icons/fi";
import { FiCheck, FiArrowRight, FiCalendar, FiUsers } from "react-icons/fi";
import { FiStarFill } from "react-icons/fi";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import {houseImage, residentialCleaning, seniorFriendlyCleaning, airbnbTurnovers, moveInMoveOut} from "@/assets";  


export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-left">
            <h1>
              Ottawa's Trusted<br />
              Cleaning for Homes,<br />
              Rentals &amp; Busy Lives
            </h1>
            <p className="hero-subtitle">
              Professional cleaning services that bring peace of mind to your home. Background-checked, insured, and dedicated to making your space sparkle.
            </p>
            <div className="hero-cta-row">
              <NavLink to="/quote" className="btn btn-outline hero-btn">Get a Quote</NavLink>
              <NavLink to="/book" className="btn btn-primary hero-btn">Book a Clean</NavLink>
            </div>
            <div className="hero-contact-row">
              <FiPhone size={22} style={{ opacity: 0.5, marginRight: 8 }} />
              <span className="hero-contact-label">Call us:</span>


              <span className="hero-contact-phone">
                <a href="tel:6135139893" style={{ color: '#fff', textDecoration: 'none' }}>
                  (613) 513-9893
                </a>
              </span>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-card">
              <FiHome size={72} />
              <img src={houseImage} alt="Clean home" className="hero-card-image" height="100%" width="100%" />
              <div className="hero-card-label">
                Clean, modern homes across Ottawa
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
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
      <section className="services">
        <div className="container">
          <h2 className="section-title">Our Cleaning Services</h2>
          <div className="services-subtitle">
            From regular home maintenance to specialized cleaning needs, we've got the perfect service for your lifestyle.
          </div>
          <div className="services-grid">

            {/* Residential Cleaning */}
            <div className="service-card">
              <img className="service-image" src={residentialCleaning} alt="Residential Cleaning" />
              <div>
                <div className="service-title">Residential Cleaning</div>
                <div className="service-desc">Regular home cleaning for busy professionals and families</div>
                <ul className="service-features">
                  <li><FiCheck className="feature-check" /> Weekly/Bi-weekly options</li>
                  <li><FiCheck className="feature-check" /> Eco-friendly products</li>
                  <li><FiCheck className="feature-check" /> Consistent cleaners</li>
                </ul>
              </div>
            </div>

            {/* Senior-Friendly Cleaning */}
            <div className="service-card">
              <img className="service-image" src={seniorFriendlyCleaning} alt="Senior Friendly Cleaning" />
              <div>
                <div className="service-title">Senior-Friendly Cleaning</div>
                <div className="service-desc">Gentle, patient service designed for seniors and their families</div>
                <ul className="service-features">
                  <li><FiCheck className="feature-check" /> 10% senior discount</li>
                  <li><FiCheck className="feature-check" /> Same cleaner guarantee</li>
                  <li><FiCheck className="feature-check" /> Respectful service</li>
                </ul>
              </div>
            </div>

            {/* Airbnb Turnovers */}
            <div className="service-card">
              <img className="service-image" src={airbnbTurnovers} alt="Airbnb Turnovers" />  
              <div>
                <div className="service-title">Airbnb Turnovers</div>
                <div className="service-desc">Fast, reliable turnovers that boost your reviews</div>
                <ul className="service-features">
                  <li><FiCheck className="feature-check" /> Same-day service</li>
                  <li><FiCheck className="feature-check" /> Before/after photos</li>
                  <li><FiCheck className="feature-check" /> Guest-ready touches</li>
                </ul>
              </div>
            </div>

            {/* Move-In/Move-Out */}
            <div className="service-card">
              <img className="service-image" src={moveInMoveOut} alt="Move In/Move Out Cleaning" /> 
              <div>
                <div className="service-title">Move-In/Move-Out</div>
                <div className="service-desc">Deep cleaning for transitions and property handovers</div>
                <ul className="service-features">
                  <li><FiCheck className="feature-check" /> Top-to-bottom clean</li>
                  <li><FiCheck className="feature-check" /> Landlord documentation</li>
                  <li><FiCheck className="feature-check" /> Deposit protection</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services-btn-row">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>
      <section className="about-trust">
        <div className="container about-trust-inner">
          <div className="about-trust-left">
            <h2>A Business Built on Trust, Care, and Community</h2>
            <p>
              After more than five years of professionally cleaning homes, our founder realized something powerful: we weren't just scrubbing surfaces, we were building relationships.
            </p>
            <div className="about-trust-feature">
              <span className="about-trust-feature-icon">
                <svg width="26" height="26" stroke="#5ca0f2" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/></svg>
              </span>
              <div>
                <div className="about-trust-feature-title">Reliable & Consistent</div>
                <div className="about-trust-feature-desc">Same cleaner guarantee and flexible scheduling that works with your busy life.</div>
              </div>
            </div>
            <div className="about-trust-feature">
              <span className="about-trust-feature-icon">
                <svg width="26" height="26" stroke="#5ca0f2" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 21c-4.97-4.97-8-7.97-8-11.5A6 6 0 0 1 12 3a6 6 0 0 1 8 6.5c0 3.53-3.03 6.53-8 11.5z"/><circle cx="12" cy="10" r="3"/></svg>
              </span>
              <div>
                <div className="about-trust-feature-title">Community-First Approach</div>
                <div className="about-trust-feature-desc">We create dignified work for women and newcomers while serving Ottawa families with care.</div>
              </div>
            </div>
            <a href="/about" className="btn btn-outline about-trust-btn">Learn More About Us</a>
          </div>
          <div className="about-trust-right">
            <div className="about-trust-card">
              <div className="about-trust-card-title">
                Cleaning with heart and purpose
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">Why Clients Love Us</h2>
          <div className="testimonials-subtitle">
            Peace of mind, every time
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {Array(5).fill().map((_, i) => (
                  <FiStarFill key={i} className="star" />
                ))}
              </div>
              <BiSolidQuoteAltLeft className="testimonial-quote-icon" />
              <div className="testimonial-text">
                "Absolutely seamless! Booking online was easy, and my cleaner was right on time and incredibly thorough. Coming home has never felt so good."
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {Array(5).fill().map((_, i) => (
                  <FiStarFill key={i} className="star" />
                ))}
              </div>
              <BiSolidQuoteAltLeft className="testimonial-quote-icon" />
              <div className="testimonial-text">
                "With two toddlers and a busy schedule, cleaning was always last on our list. Now we have a consistent, kind professional who knows our home and our family."
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {Array(5).fill().map((_, i) => (
                  <FiStarFill key={i} className="star" />
                ))}
              </div>
              <BiSolidQuoteAltLeft className="testimonial-quote-icon" />
              <div className="testimonial-text">
                "We were new to the city and overwhelmed with everything. Finding a cleaning company we could trust was a huge relief. Highly recommend!"
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}



