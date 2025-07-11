import React, { useState } from "react";
import { FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";
import "./FAQ.css";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    q: "Do I need to be home during the cleaning?",
    a: `No, you don’t have to be home, many of our clients prefer to go about their day while we handle
the cleaning. We’re happy to work with entry instructions such as key drops, concierge desks, or
smart locks. Just let us know what works best for you!`,
  },
  {
    q: "Can I request the same cleaner every time?",
    a: `Yes! For recurring clients, we offer our Same Cleaner Guarantee. You’ll have the same trusted
cleaner (or small team) for each visit, helping build familiarity, consistency, and comfort,
especially appreciated by seniors and families.`,
  },
  {
    q: "How do I book a clean?",
    a: `You can book a clean in three easy ways:
Online via our booking form
By phone at (613) 513-9893
Email (decleaningservicesottawa@gmail.com) or text, if that’s easier for you
We’ll confirm availability and details within 12 hours.`,
  },
  {
    q: "Do you bring your own supplies?",
    a: `Yes! We bring all necessary cleaning supplies, including eco-friendly and child-safe products. If
you prefer we use your specific products, just let us know ahead of time.`,
  },
  {
    q: "Are your cleaners background-checked?",
    a: `Absolutely. All team members undergo thorough background checks and in-person interviews.
We also train them on safety, service, and professionalism before entering any client’s home.`,
  },
  {
    q: "What areas in Ottawa do you serve?",
    a: `We serve Ottawa and surrounding neighborhoods, including:
• Barrhaven
• Orleans
• Nepean
• Riverside South
• Kanata
• Stittsville
• Centretown
• Westboro
• ByWard Market
• Little Italy
• Alta Vista and more!`,
  },
  {
    q: "Do you offer same-day or last-minute cleaning?",
    a: `Yes, we do offer same-day and 24-hour turnover cleaning especially for Airbnb and rental units.
A rush fee may apply depending on timing and availability. Please contact us directly to check.`,
  },
  {
    q: "What if I need to cancel or reschedule?",
    a: `We understand that plans change. You can reschedule or cancel your booking with at least 24
hours' notice at no charge. Same-day cancellations may incur a small fee.`,
  },
  {
    q: "Do you clean after pets or for allergy-sensitive homes?",
    a: `Yes. We offer pet hair removal as an add-on and use non-toxic, scent-free products for
allergy-sensitive clients. Just let us know your preferences during booking.`,
  },
  {
    q: "What payment methods do you accept?",
    a: `We accept all major credit cards, e-transfers, and in some cases cash. Invoicing is available for
recurring clients, landlords, and seniors who prefer paper billing.`,
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  return (
    <div className="faq-page">
      <div className="faq-header">
        Everything you need to know about our cleaning services. Can't find your answer?<br />
        We're here to help!
      </div>
      <div className="faq-list">
        {faqs.map((item, i) => (
          <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
            <button
              className="faq-question"
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={`faq-panel-${i}`}
              id={`faq-button-${i}`}
            >
              <span>{item.q}</span>
              <FaChevronDown className="faq-chevron" />
            </button>
            <div
              className="faq-answer"
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              style={{ display: open === i ? "block" : "none" }}
            >
              {item.a.split("\n").map((line, idx) =>
                <div key={idx}>{line}</div>
              )}
            </div>
          </div>
        ))}
      </div>

      <section className="faqcontact-section">
        <h2 className="faqcontact-title">Still Have Questions?</h2>
        <div className="faqcontact-subtitle">
            We're here to help! Reach out using your preferred method.
        </div>
        <div className="faqcontact-cards">
            <div className="faqcontact-card">
            <FiPhone className="faqcontact-icon" />
            <div className="faqcontact-card-title">Call Us</div>
            <div className="faqcontact-card-desc">Speak with our team directly</div>
            <div className="faqcontact-card-main">
                <a href="tel:6135139893" className="faqcontact-phone">(613) 513-9893</a>
            </div>
            <div className="faqcontact-card-extra">Mon–Sat: 8AM – 8PM<br />Sun: 12PM – 10PM</div>
            </div>
            <div className="faqcontact-card">
            <FiMail className="faqcontact-icon" />
            <div className="faqcontact-card-title">Email Us</div>
            <div className="faqcontact-card-desc">Get detailed answers</div>
            <div className="faqcontact-card-main">
                <a href="mailto:decleaningservicesottawa@gmail.com" className="faqcontact-email">
                decleaningservicesottawa@gmail.com
                </a>
            </div>
            <div className="faqcontact-card-extra">Response within 12 hours</div>
            </div>
            <div className="faqcontact-card">
            <FiClock className="faqcontact-icon" />
            <div className="faqcontact-card-title">Book Online</div>
            <div className="faqcontact-card-desc">Quick and convenient</div>
            <div className="faqcontact-card-main">
                <a href="/book" className="faqcontact-book-btn">Book Now</a>
            </div>
            <div className="faqcontact-card-extra">Available 24/7</div>
            </div>
            <div className="faqcontact-card">
            <FiMapPin className="faqcontact-icon" />
            <div className="faqcontact-card-title">Get Quote</div>
            <div className="faqcontact-card-desc">Custom pricing</div>
            <div className="faqcontact-card-main">
                <a href="/get-a-quote" className="faqcontact-quote-btn">Get Quote</a>
            </div>
            <div className="faqcontact-card-extra">No obligation</div>
            </div>
        </div>
      </section>
    </div>
  );
}