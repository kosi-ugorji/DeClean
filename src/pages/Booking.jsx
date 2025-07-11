import React, { useState } from "react";
import "./Booking.css";
import { LuShieldCheck, LuCheckCheck, LuAward, LuKeyRound, LuClock, LuCamera } from "react-icons/lu";
import { FiCheckCircle } from "react-icons/fi";


// Replace with your Google Form endpoint and entry IDs!
const GOOGLE_FORM_ACTION_URL = "https://docs.google.com/forms/d/e/your-form-id/formResponse";
const ENTRY_IDS = {
  serviceType: "entry.1234567890",
  serviceOther: "entry.2234567890",
  bedrooms: "entry.2345678901",
  bathrooms: "entry.3456789012",
  hasPets: "entry.4567890123",
  homeType: "entry.5678901234",
  date: "entry.6789012345",
  timeWindow: "entry.7890123456",
  addons: "entry.8901234567",
  address: "entry.9012345678",
  postal: "entry.0123456789",
  unit: "entry.1122334455",
  entryInstructions: "entry.2233445566",
  name: "entry.3344556677",
  email: "entry.4455667788",
  phone: "entry.5566778899",
  contactMethod: "entry.6677889900",
  notes: "entry.7788990011",
};

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
  { label: "Inside Fridge – $25", value: "Inside Fridge – $25" },
  { label: "Inside Oven – $30", value: "Inside Oven – $30" },
  { label: "Bed Linen Change – $10/bed", value: "Bed Linen Change – $10/bed" },
  { label: "Laundry (Wash/Dry/Fold 2 loads) – $20", value: "Laundry (Wash/Dry/Fold 2 loads) – $20" },
  { label: "Baseboard Detailing – $25+", value: "Baseboard Detailing – $25+" },
  { label: "Interior Windows – $5/window", value: "Interior Windows – $5/window" },
  { label: "Restocking (Airbnb) – $10", value: "Restocking (Airbnb) – $10" },
  { label: "Post-party reset – $40", value: "Post-party reset – $40" },
  { label: "Supply pickup – $15 + cost", value: "Supply pickup – $15 + cost" },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData();
    formData.append(ENTRY_IDS.serviceType, form.serviceType);
    if (form.serviceType === "Other") {
      formData.append(ENTRY_IDS.serviceOther, form.serviceOther);
    }
    formData.append(ENTRY_IDS.bedrooms, form.bedrooms);
    formData.append(ENTRY_IDS.bathrooms, form.bathrooms);
    formData.append(ENTRY_IDS.hasPets, form.hasPets);
    formData.append(ENTRY_IDS.homeType, form.homeType);
    formData.append(ENTRY_IDS.date, form.date);
    formData.append(ENTRY_IDS.timeWindow, form.timeWindow);
    form.addons.forEach(addon => formData.append(ENTRY_IDS.addons, addon));
    formData.append(ENTRY_IDS.address, form.address);
    formData.append(ENTRY_IDS.postal, form.postal);
    formData.append(ENTRY_IDS.unit, form.unit);
    formData.append(ENTRY_IDS.entryInstructions, form.entryInstructions);
    formData.append(ENTRY_IDS.name, form.name);
    formData.append(ENTRY_IDS.email, form.email);
    formData.append(ENTRY_IDS.phone, form.phone);
    formData.append(ENTRY_IDS.contactMethod, form.contactMethod);
    formData.append(ENTRY_IDS.notes, form.notes);

    fetch(GOOGLE_FORM_ACTION_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        setStatus("success");
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
        });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <div className="booknow-page">
      <div className="booknow-header">Ready for a Fresh Start? Let's Book Your Clean!</div>
      <div className="booknow-subheader">
        Choose your service, add any extras, and lock in your spot in just a few steps.
      </div>
      <div className="booknow-main">
        <form className="booknow-form-card" onSubmit={handleSubmit}>
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