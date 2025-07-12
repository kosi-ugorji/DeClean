import React, { useState } from "react";
import "./Booking.css";
import { LuShieldCheck, LuCheckCheck, LuAward, LuKeyRound, LuClock, LuCamera } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";


const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw9Gu92SGEygwGEFJFyhCL8w_qYB5YhPO3ILndM2OpzjH_yephkRqANBAfYSFnV33CV/exec";


const SERVICE_TYPES = [
  "Residential Cleaning",
  "Senior-Friendly Cleaning",
  "Airbnb Turnover",
  "Move-In / Move-Out",
  "Other"
];
const HOME_TYPES = [
  "Apartment / Condo",
  "Townhouse",
  "Detached House",
  "Rental Property",
  "Student Housing"
];
const ADDONS = [
  { label: "Inside Fridge", value: "Inside Fridge" },
  { label: "Inside Oven", value: "Inside Oven" },
  { label: "Bed Linen Change", value: "Bed Linen Change " },
  { label: "Laundry (Wash/Dry/Fold 2 loads)", value: "Laundry (Wash/Dry/Fold 2 loads)" },
  { label: "Baseboard Detailing", value: "Baseboard Detailing" },
  { label: "Interior Windows", value: "Interior Windows" },
  { label: "Restocking (Airbnb)", value: "Restocking (Airbnb)" },
  { label: "Post-party reset", value: "Post-party reset" },
  { label: "Supply pickup", value: "Supply pickup" },
];
const CONTACT_METHODS = [
  "Email",
  "Text",
  "Phone Call"
];

export default function BookNow() {
  const [form, setForm] = useState({
    serviceType: "",
    serviceOther: "",
    bedrooms: "",
    bathrooms: "",
    hasPets: "",
    homeType: "",
    date: "",
    timeWindow: "",
    addons: [],
    address: "",
    postal: "",
    unit: "",
    entryInstructions: "",
    name: "",
    email: "",
    phone: "",
    contactMethod: "",
    notes: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "addons") {
      setForm(f => ({
        ...f,
        addons: checked
          ? [...f.addons, value]
          : f.addons.filter(v => v !== value)
      }));
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData(e.target);                // ① grab every input
    const payload = Object.fromEntries(fd.entries()); // ② turn into object

      // 🛡️ 1. Honeypot: silently ignore bots
      if (payload.website && payload.website.trim() !== "") {
        console.warn("Spam detected – honeypot filled");
        return; // abort before setting status or sending anything
      }
    setStatus("submitting");

    // Fix array fields (checkbox groups come back as single values)
    payload.spaces = form.spaces.join(", ");
    payload.addOns = form.addOns.join(", ");

    try {
      const res = await fetch(SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      res.ok ? setStatus("success") : setStatus("error");
      if (res.ok) resetForm();
    } catch {
      setStatus("error");
    }
  };

  const resetForm = () => {
    setForm({
      serviceType: "",
      serviceOther: "",
      bedrooms: "",
      bathrooms: "",
      hasPets: "",
      homeType: "",
      date: "",
      timeWindow: "",
      addons: [],
      address: "",
      postal: "",
      unit: "",
      entryInstructions: "",
      name: "",
      email: "",
      phone: "",
      contactMethod: "",
      notes: "",
      website: ""  // reset honeypot field
    });
    setStatus("idle");
  };  


  return (
    <div className="booknow-page">
      <div className="booknow-header">Ready for a Fresh Start? Let's Book Your Clean!</div>
      <div className="booknow-subheader">
        Choose your service, add any extras, and lock in your spot in just a few steps.
      </div>
      <div className="booknow-main">
        <form className="booknow-form-card" onSubmit={handleSubmit}>
          <input type="hidden" name="formName" value="booking" />
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

          <div className="booknow-form-title">Book Your Clean</div>
          {/* 1. Service Type */}
          <div className="booknow-form-section">
            <div className="booknow-form-section-header">1. What Type of Cleaning Do You Need?</div>
            <div className="booknow-form-group">
              <label>Service Type</label>
              <select
                name="serviceType"
                value={form.serviceType}
                onChange={handleChange}
                required
              >
                <option value="">Select service type</option>
                {SERVICE_TYPES.map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {form.serviceType === "Other" && (
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
          </div>
          {/* 2. Home/Unit Details */}
          <div className="booknow-form-section">
            <div className="booknow-form-section-header">2. Home/Unit Details</div>
            <div className="booknow-form-row">
              <div className="booknow-form-group">
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
              <div className="booknow-form-group">
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
            <div className="booknow-form-row">
              <div className="booknow-form-group">
                <label>Do you have pets?</label>
                <div className="booknow-radio-list">
                  <label>
                    <input
                      type="radio"
                      name="hasPets"
                      value="Yes"
                      checked={form.hasPets === "Yes"}
                      onChange={handleChange}
                      required
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="hasPets"
                      value="No"
                      checked={form.hasPets === "No"}
                      onChange={handleChange}
                      required
                    />
                    No
                  </label>
                </div>
              </div>
              <div className="booknow-form-group">
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
          </div>
          {/* 3. Date & Time */}
          <div className="booknow-form-section">
            <div className="booknow-form-section-header">3. Choose a Date & Time</div>
            <div className="booknow-form-row">
              <div className="booknow-form-group">
                <label>Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div className="booknow-form-group">
                <label>Time Window</label>
                <select
                  name="timeWindow"
                  value={form.timeWindow}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select time window</option>
                  {Array.from({length: 15}, (_, i) => `${6 + i}:00 ${6 + i < 12 ? "AM" : "PM"}`).map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                  <option value="Anytime">Anytime</option>
                </select>
              </div>
            </div>
            <div className="booknow-form-message">
              We’ll confirm availability within 12 hours or suggest the next best time.
            </div>
          </div>
          {/* 4. Add-Ons */}
          <div className="booknow-form-section">
            <div className="booknow-form-section-header">4. Add-On Services <span className="booknow-optional">(Optional)</span></div>
            <div className="booknow-checkbox-list">
              {ADDONS.map(addon => (
                <label key={addon.value} className="booknow-checkbox-label">
                  <input
                    type="checkbox"
                    name="addons"
                    value={addon.value}
                    checked={form.addons.includes(addon.value)}
                    onChange={handleChange}
                  />
                  {addon.label}
                </label>
              ))}
            </div>
          </div>
          {/* 5. Address */}
          <div className="booknow-form-section">
            <div className="booknow-form-section-header">5. Service Address</div>
            <div className="booknow-form-row">
              <div className="booknow-form-group">
                <label>Street Address</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="booknow-form-group">
                <label>Postal Code</label>
                <input
                  type="text"
                  name="postal"
                  value={form.postal}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="booknow-form-group">
                <label>Unit #</label>
                <input
                  type="text"
                  name="unit"
                  value={form.unit}
                  onChange={handleChange}
                  placeholder="(optional)"
                />
              </div>
            </div>
            <div className="booknow-form-row">
              <div className="booknow-form-group">
                <label>Entry Instructions</label>
                <input
                  type="text"
                  name="entryInstructions"
                  value={form.entryInstructions}
                  onChange={handleChange}
                  placeholder="e.g., smart lock, concierge, pets inside"
                />
              </div>
            </div>
          </div>
          {/* 6. Contact Info */}
          <div className="booknow-form-section">
            <div className="booknow-form-section-header">6. Your Contact Info</div>
            <div className="booknow-form-row">
              <div className="booknow-form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="booknow-form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="booknow-form-group">
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
            <div className="booknow-form-row">
              <div className="booknow-form-group">
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
          {/* 7. Notes */}
          <div className="booknow-form-section">
            <div className="booknow-form-section-header">7. Notes or Special Requests</div>
            <div className="booknow-form-row">
              <div className="booknow-form-group">
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  placeholder={`e.g. "Cleaning for senior parent", "Please avoid bleach", "Baby sleeping from 12–2"`}
                  rows={3}
                />
              </div>
            </div>
          </div>
          <button className="booknow-form-submit" type="submit" disabled={status === "submitting"}>
            {status === "submitting" ? "Submitting..." : "Book My Clean"}
          </button>
          <div className="booknow-form-followup">
            We'll confirm your appointment via email/text within 12 hours.
          </div>
          {status === "success" && (
            <div className="booknow-form-success">Thank you! We received your booking request.</div>
          )}
          {status === "error" && (
            <div className="booknow-form-error">Sorry, there was a problem sending your request. Please try again.</div>
          )}
        </form>

        <div className="booknow-rightside">
          <div className="booking-sidebar">
            <div className="booking-sidebar-card trust">
              <div className="sidebar-title">Trust & Security</div>
              <div className="trust-grid">
                <div className="trust-feature">
                  <LuShieldCheck className="trust-icon" />
                  <span>
                    Background-<br />Checked<br />Cleaners
                  </span>
                </div>
                <div className="trust-feature">
                  <LuAward className="trust-icon" />
                  <span>
                    Liability<br />Insured
                  </span>
                </div>
                <div className="trust-feature">
                  <FiCheckCircle className="trust-icon" />
                  <span>
                    Satisfaction<br />Guaranteed
                  </span>
                </div>
                <div className="trust-feature">
                  <LuKeyRound className="trust-icon" />
                  <span>
                    Safe & Secure<br />Entry
                  </span>
                </div>
                <div className="trust-feature">
                  <LuClock className="trust-icon" />
                  <span>
                    On-Time<br />Service
                  </span>
                </div>
                <div className="trust-feature">
                  <LuCamera className="trust-icon" />
                  <span>
                    Before & After<br />Photos
                  </span>
                </div>
              </div>
            </div>
            <div className="booking-sidebar-card phone">
              <span className="phone-icon" />
              <div className="phone-title">Prefer to Book By Phone?</div>
              <div className="phone-desc">We're happy to help you book directly!</div>
              <div className="phone-number">
                <a href="tel:6135139893" style={{ color: '#fff', textDecoration: 'none', fontWeight: 800 }}>
                  (613) 513-9893
                </a>
              </div>
              <div className="phone-hours">
                Mon–Sat | 8:00 AM – 8:00 PM<br />
                Sun | 12:00 PM – 10:00 PM
              </div>
              <div className="phone-note">
                Need help choosing the right service or package? Our team is just a call away.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}