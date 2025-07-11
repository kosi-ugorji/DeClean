import React, { useState } from "react";
import { FiMessageSquare, FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import "./Contact.css";

// CHANGE these to match your Google Form
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/your-form-id/formResponse";
const ENTRY_IDS = {
  name: "entry.1234567890",
  email: "entry.2345678901",
  phone: "entry.3456789012",
  contactMethod: "entry.4567890123",
  subject: "entry.5678901234",
  message: "entry.6789012345",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    contactMethod: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData();
    formData.append(ENTRY_IDS.name, form.name);
    formData.append(ENTRY_IDS.email, form.email);
    formData.append(ENTRY_IDS.phone, form.phone);
    formData.append(ENTRY_IDS.contactMethod, form.contactMethod);
    formData.append(ENTRY_IDS.subject, form.subject);
    formData.append(ENTRY_IDS.message, form.message);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          contactMethod: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <div className="contactpage">
      <div className="contactpage-header">
        Ready to book a clean or have questions? We're here to help and respond quickly.
      </div>
      <div className="contactpage-main">
        <form className="contact-form-card" onSubmit={handleSubmit}>
          <div className="contact-form-title">
            <FiMessageSquare className="contact-form-title-icon" />
            Send Us a Message
          </div>
          <div className="contact-form-caption">
            Fill out the form below and we'll get back to you within 12 hours.
          </div>
          <div className="contact-form-row twocols">
            <div className="contact-form-group">
              <label htmlFor="name">Full Name *</label>
              <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Email Address *</label>
              <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} />
            </div>
          </div>
          <div className="contact-form-row twocols">
            <div className="contact-form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="text" id="phone" name="phone" value={form.phone} onChange={handleChange} />
            </div>
            <div className="contact-form-group">
              <label htmlFor="contactMethod">Preferred Contact Method</label>
              <select id="contactMethod" name="contactMethod" value={form.contactMethod} onChange={handleChange}>
                <option value="">How should we reach you?</option>
                <option value="phone">Call</option>
                <option value="email">Email</option>
                <option value="text">Text</option>
              </select>
            </div>
          </div>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="What can we help you with?"
                value={form.subject}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="contact-form-row">
            <div className="contact-form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell us about your cleaning needs, ask questions, or share any specific requirements…"
                value={form.message}
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="contact-form-submit" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" && (
            <div className="contact-form-success">Thank you! Your message has been sent.</div>
          )}
          {status === "error" && (
            <div className="contact-form-error">Sorry, there was a problem sending your message. Please try again.</div>
          )}
        </form>
        <div className="contact-rightside">
          <div className="contact-info-card">
            <div className="contact-info-title">Contact Information</div>
            <div className="contact-info-caption">
              Prefer to reach out directly? Here are all the ways to connect with us.
            </div>
            <div className="contact-info-list">
              <div className="contact-info-item">
                <FiPhone className="contact-info-icon" />
                <a href="tel:6135139893" className="contact-info-link">(613) 513-9893</a>
              </div>
              <div className="contact-info-item">
                <FiMail className="contact-info-icon" />
                <a href="mailto:decleaningservicesottawa@gmail.com" className="contact-info-link">decleaningservicesottawa@gmail.com</a>
              </div>
              <div className="contact-info-item">
                <FiMapPin className="contact-info-icon" />
                <span>
                  <b>Service Area</b>
                  <br />
                  <span className="contact-info-detail">Ottawa and surrounding communities</span>
                </span>
              </div>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-title"><FiClock className="contact-info-title-icon" /> Business Hours</div>
            <div className="contact-bizhours-table">
              <div>
                <b>Monday - Saturday</b>
                <span>8:00 AM - 8:00 PM</span>
              </div>
              <div>
                <b>Sunday</b>
                <span>12:00 PM - 10:00 PM</span>
              </div>
            </div>
            <div className="contact-info-note">
              Need help choosing the right service? Our team is just a call away during business hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}