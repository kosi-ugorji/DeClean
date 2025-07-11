import { FiHome, FiHeart, FiKey, FiUserCheck } from "react-icons/fi";
import { MdOutlineCleaningServices } from "react-icons/md";
import { LuCalendarCheck2 } from "react-icons/lu";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { FaCheckCircle } from "react-icons/fa";
import "./Services.css";

const services = [
  {
    icon: <FiHome />,
    title: "Residential Cleaning",
    subtitle: "Complete home cleaning with optional recurring service",
    included: [
      "Vacuuming & Mopping", "Kitchen wipe-down", "Mirror cleaning", "General tidying",
      "Dusting all surfaces", "Bathroom cleaning", "Trash removal", "Pet-safe products available"
    ],
    addOns: [
      "Inside Fridge – $25", "Inside Oven – $30", "Bed Linen Change – $10/bed",
      "Laundry (2 loads) – $20", "Baseboards – $25+", "Interior Windows – $5/window"
    ],
    offers: [
      "Seniors: 10% off", "Bi-weekly: $20 off"
    ]
  },
  {
    icon: <FiHeart />,
    title: "Senior-Friendly Cleaning",
    subtitle: "Gentle, patient service designed with seniors in mind",
    included: [
      "Light dusting (reachable surfaces)", "Non-toxic, low-scent products", "Background-checked cleaners", "Paper invoices available",
      "Bathroom & kitchen sanitization", "Vacuuming & mopping", "Same cleaner option", "Phone reminders"
    ],
    addOns: [
      "Bed Linen Change – $10/bed", "Laundry Service – $20", "Interior Windows – $5/window", "Baseboard Detailing – $25–$50", "Hard-to-reach cleaning"
    ],
    offers: [
      "10% Senior Discount on all packages"
    ]
  },
  {
    icon: <LuCalendarCheck2 />,
    title: "Airbnb & Rental Turnovers",
    subtitle: "Fast, reliable turnovers that impress your guests",
    included: [
      "Kitchen & bathroom deep clean", "Living areas & bedrooms", "Trash & tidying", "Before & after photos",
      "Sanitize all surfaces", "Bed making with clean linens", "Guest-ready touches", "Lockbox coordination"
    ],
    addOns: [
      "Same-day turnovers", "Emergency booking", "Digital checklists", "Damage reporting", "Custom staging"
    ],
    offers: [
      "Recurring slots available", "Multi-property discounts"
    ]
  },
  {
    icon: <HiOutlineUserGroup />,
    title: "Move-In/Move-Out Cleaning",
    subtitle: "Deep cleaning for fresh starts and smooth transitions",
    included: [
      "Cabinet & drawer cleaning", "Deep sink & faucet clean", "Scrub & sanitize bathrooms", "Vacuum & mop all floors",
      "Countertops & backsplashes", "Appliance exterior cleaning", "Dust all surfaces & baseboards", "Final inspection"
    ],
    addOns: [
      "Inside fridge & oven", "Digital documentation", "Before & after photos", "Cleaning receipt provided", "Key coordination"
    ],
    offers: [
      "Flat-rate pricing", "No hidden fees"
    ]
  },
];

export default function ServicesSection() {
  return (
    <section className="services-section">
      <div className="services-section-container">
        <div className="services-section-header">
          <div className="services-section-lead">
            Professional cleaning solutions tailored to your needs – from busy families to seniors, Airbnb hosts to property managers.
          </div>
        </div>
        <div className="services-cards-grid">
          {services.map((service, i) => (
            <div className="service-card" key={service.title}>
              <div className="service-card-header">
                <span className="service-icon">{service.icon}</span>
                <div>
                  <div className="service-title">{service.title}</div>
                  <div className="service-subtitle">{service.subtitle}</div>
                </div>
              </div>

              <div className="service-section-title">What's Included</div>
              <ul className="service-included">
                {service.included.map((item, idx) => (
                  <li key={idx}><FaCheckCircle className="included-check" /> {item}</li>
                ))}
              </ul>

              <div className="service-section-title">Add-ons Available</div>
              <ul className="service-addons">
                {service.addOns.map((addon, idx) => (
                  <li key={idx}>{addon}</li>
                ))}
              </ul>

              <div className="service-section-title">Special Offers</div>
              <ul className="service-offers">
                {service.offers.map((offer, idx) => (
                  <li key={idx}>{offer}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}