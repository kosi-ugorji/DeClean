import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header style={{
      background: 'var(--color-blue)', padding: '1rem 0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)'
    }}>
      <nav className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1200, margin: '0 auto' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/assets/logo1.png" alt="Declean Cleaning Services Logo" width={50} height={50} />
          <span style={{ fontWeight: 700, color: '#fff', fontSize: 24, letterSpacing: 1, fontFamily: 'Poppins, Arial, sans-serif' }}>DECLEAN</span>
        </Link>
        <div style={{ display: 'flex', gap: 24 }}>
          <NavLink to="/" end style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 700 : 400 })}>Home</NavLink>
          {/* <NavLink to="/services" style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 700 : 400 })}>Services</NavLink>
          <NavLink to="/quote" style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 700 : 400 })}>Get a Quote</NavLink>
          <NavLink to="/booking" style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 700 : 400 })}>Book a Clean</NavLink>
          <NavLink to="/about" style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 700 : 400 })}>About</NavLink>
          <NavLink to="/faq" style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 700 : 400 })}>FAQ</NavLink>
          <NavLink to="/contact" style={({ isActive }) => ({ color: '#fff', fontWeight: isActive ? 700 : 400 })}>Contact</NavLink> */}
        </div>
      </nav>
    </header>
  );
}