import React, { useState } from "react";
import { FiCheckCircle, FiClock} from "react-icons/fi";
import { LuShield, LuDollarSign, LuCheckCheck, LuClock } from "react-icons/lu";
import "./GetQuote.css";


const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw9Gu92SGEygwGEFJFyhCL8w_qYB5YhPO3ILndM2OpzjH_yephkRqANBAfYSFnV33CV/exec";



const SERVICE_TYPES = [
  "Residential Cleaning",
  "Senior-Friendly Cleaning",
  "Airbnb Turnover",
  "Move-In / Move-Out Cleaning",
  "Other"
];
const HOME_TYPES = [
  "Condo / Apartment",
  "Townhouse",
  "Detached House",
  "Student Housing",
  "Rental Property"
];
const SPACES = [
  "Living Room",
  "Kitchen",
  "Dining Room",
  "Basement"
];
const FREQUENCIES = [
  "One-Time",
  "Weekly",
  "Bi-Weekly",
  "Monthly"
];
const ADDONS = [
  "Inside Fridge",
  "Inside Oven",
  "Bed Linen Change",
  "Laundry (Wash/Dry/Fold)",
  "Baseboards",
  "Interior Windows",
  "Restocking (Airbnb)"
];
const CONTACT_METHODS = [
  "Email",
  "Text",
  "Phone"
];

export default function GetQuote() {
  const [form, setForm] = useState({
    typeOfService: "",
    serviceOther: "",
    homeType: "",
    bedrooms: "",
    bathrooms: "",
    spaces: [],
    hasPets: "",
    frequency: "",
    addOns: [],
    preferredDate: "",
    urgent: "",
    fullName: "",
    phone: "",
    email: "",
    contactMethod: "",
    notes: "",
    website: ""  // honeypot field
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && SPACES.includes(value)) {
      setForm(f => ({
        ...f,
        spaces: checked
          ? [...f.spaces, value]
          : f.spaces.filter(v => v !== value)
      }));
    } else if (type === "checkbox" && ADDONS.includes(value)) {
      setForm(f => ({
        ...f,
        addOns: checked
          ? [...f.addOns, value]
          : f.addOns.filter(v => v !== value)
      }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    /* 1 ─ gather all inputs (incl. hidden formName & honeypot) */
    const fd       = new FormData(e.target);
    const payload  = Object.fromEntries(fd.entries());

    /* 2 ─ honeypot spam check */
    if (payload.website?.trim()) return;      // silently drop bots

    /* 3 ─ add origin + flatten checkbox arrays */
    payload.origin    = window.location.origin;   // bare or www.
    payload.formName  = 'quote';                  // this sheet tab
    payload.spaces    = form.spaces.join(', ');
    payload.addOns    = form.addOns.join(', ');

    /* 4 ─ UX feedback + send */
    setStatus('submitting');

    try {
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (res.ok) {
        setStatus('success');
        resetForm();               // setForm(emptyForm) + e.target.reset()
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };



  const resetForm = () => {
    setForm({
      typeOfService: "",
      serviceOther: "",
      homeType: "",
      bedrooms: "",
      bathrooms: "",
      spaces: [],
      hasPets: "",
      frequency: "",
      addOns: [],
      preferredDate: "",
      urgent: "",
      fullName: "",
      phone: "",
      email: "",
      contactMethod: "",
      notes: "",
      website: ""  // reset honeypot field
    });
  };  

  return (
    <div className="getquote-page">
      <div className="getquote-header">Get Your Personalized Cleaning Quote</div>
      <div className="getquote-subheader">
        Tell us a bit about your space, and we'll get back to you ASAP—no hidden fees, just clear, flat pricing.
      </div>
      <div className="getquote-main">
        <form className="getquote-form-card" onSubmit={handleSubmit}>

          <input type="hidden" name="formName" value="quote" />

          {/* --- honeypot field start --- */}
          <input
            type="text"
            name="website"          // a name bots often try to fill
            value={form.website}    // make it a controlled input like the others
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex={-1}           // keeps it out of the natural tab order
            autoComplete="off"
          />
          <div className="getquote-form-title">Quote Request Form</div>
          <div className="getquote-form-section">
            <div className="getquote-form-section-header">1. Your Home or Property</div>
            <div className="getquote-form-row">
              <div className="getquote-form-group">
                <label>Type of Service</label>
                <select
                  name="typeOfService"
                  value={form.typeOfService}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select service type</option>
                  {SERVICE_TYPES.map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {form.typeOfService === "Other" && (
                  <input
                    type="text"
                    name="serviceOther"
                    value={form.serviceOther}
                    onChange={handleChange}
                    placeholder="Please specify"
                    style={{marginTop: 8}}
                  />
                )}
              </div>
              <div className="getquote-form-group">
                <label>Home Type</label>
                <select
                  name="homeType"
                  value={form.homeType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select home type</option>
                  {HOME_TYPES.map(h => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="getquote-form-row">
              <div className="getquote-form-group">
                <label>Number of Bedrooms</label>
                <select
                  name="bedrooms"
                  value={form.bedrooms}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              <div className="getquote-form-group">
                <label>Number of Bathrooms</label>
                <select
                  name="bathrooms"
                  value={form.bathrooms}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  {[1,2,3,4,5,6,7,8,9,10].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="getquote-form-row getquote-checkbox-row">
              <div className="getquote-form-group getquote-checkbox-group">
                <label>Additional Spaces (check all that apply)</label>
                <div className="getquote-checkbox-list">
                  {SPACES.map(space => (
                    <label key={space} className="getquote-checkbox-label">
                      <input
                        type="checkbox"
                        name="spaces"
                        value={space}
                        checked={form.spaces.includes(space)}
                        onChange={handleChange}
                      />
                      {space}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="getquote-form-row">
              <div className="getquote-form-group">
                <label>Do you have pets?</label>
                <select
                  name="hasPets"
                  value={form.hasPets}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="getquote-form-section">
            <div className="getquote-form-section-header">2. Service Details</div>
            <div className="getquote-form-row">
              <div className="getquote-form-group">
                <label>Frequency</label>
                <select
                  name="frequency"
                  value={form.frequency}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select frequency</option>
                  {FREQUENCIES.map(freq => (
                    <option key={freq} value={freq}>{freq}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="getquote-form-row getquote-checkbox-row">
              <div className="getquote-form-group getquote-checkbox-group">
                <label>Add-Ons (optional)</label>
                <div className="getquote-checkbox-list">
                  {ADDONS.map(addon => (
                    <label key={addon} className="getquote-checkbox-label">
                      <input
                        type="checkbox"
                        name="addOns"
                        value={addon}
                        checked={form.addOns.includes(addon)}
                        onChange={handleChange}
                      />
                      {addon}
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className="getquote-form-row">
              <div className="getquote-form-group">
                <label>Preferred Dates/Times</label>
                <input
                  type="text"
                  name="preferredDate"
                  value={form.preferredDate}
                  onChange={handleChange}
                  placeholder="e.g. July 15th, any afternoon"
                />
              </div>
              <div className="getquote-form-group">
                <label>Urgent or Same-Day?</label>
                <select
                  name="urgent"
                  value={form.urgent}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
            </div>
          </div>
          <div className="getquote-form-section">
            <div className="getquote-form-section-header">4. Your Contact Info</div>
            <div className="getquote-form-row">
              <div className="getquote-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="getquote-form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="getquote-form-row">
              <div className="getquote-form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="getquote-form-group">
                <label>Preferred Contact Method</label>
                <select
                  name="contactMethod"
                  value={form.contactMethod}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select</option>
                  {CONTACT_METHODS.map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="getquote-form-section">
            <div className="getquote-form-section-header">5. Anything Else We Should Know?</div>
            <div className="getquote-form-row">
              <div className="getquote-form-group">
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder={`Tell us about your cleaning needs, ask questions, or share any specific requirements…`}
                  rows={4}
                />
              </div>
            </div>
          </div>
          <button className="getquote-form-submit" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Get My Quote"}
          </button>
          <div className="getquote-form-followup">
            We’ll follow up within 12 hours with your custom quote and available times. No obligation.
          </div>
          {status === "success" && (
            <div className="getquote-form-success">Thank you! We received your request.</div>
          )}
          {status === "error" && (
            <div className="getquote-form-error">Sorry, there was a problem sending your request. Please try again.</div>
          )}
        </form>
        <div className="getquote-rightside">
          <div className="getquote-info-card">
                <div className="trust-title">
                  <LuShield className="trust-title-icon trust-blue" />
                  <span>
                    Trust<br />Reassurance
                  </span>
                </div>
                  <ul className="trust-list">
                    <li>
                      <LuDollarSign className="trust-icon trust-green" />
                      <div>
                        <div className="trust-list-title">Flat-rate, no surprise fees</div>
                        <div className="trust-list-desc">Clear pricing you can count on</div>
                      </div>
                    </li>
                    <li>
                      <LuShield className="trust-icon trust-blue" />
                      <div>
                        <div className="trust-list-title">Your info is safe &amp; never shared</div>
                        <div className="trust-list-desc">Complete privacy protection</div>
                      </div>
                    </li>
                    <li>
                      <LuCheckCheck className="trust-icon trust-green" />
                      <div>
                        <div className="trust-list-title">100% satisfaction guarantee</div>
                        <div className="trust-list-desc">We stand behind our work</div>
                      </div>
                    </li>
                    <li>
                      <LuClock className="trust-icon trust-blue" />
                      <div>
                        <div className="trust-list-title">Quick response time</div>
                        <div className="trust-list-desc">12-hour quote guarantee</div>
                      </div>
                    </li>
                  </ul>
          </div>
          <div className="getquote-call-card">
            <div className="getquote-call-title">Prefer to talk?</div>
            <div className="getquote-call-desc">Call us directly for immediate assistance</div>
            <div className="getquote-call-phone">
              <a href="tel:6135139893" style={{ color: '#fff', textDecoration: 'none' }}>
                (613) 513-9893
              </a>
            </div>
            <div className="getquote-call-hours">Mon–Sat: 8AM – 8PM<br/>Sun: 12PM – 10PM</div>
          </div>
        </div>
      </div>
    </div>
  );
}


