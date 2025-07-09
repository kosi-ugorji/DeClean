import React from 'react';

export default function Home() {
  return (
    <section style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '3rem 1rem',
      background: 'var(--color-light-blue)',
    }}>
      <img
        src="/assets/logo1.png"
        alt="Declean Cleaning Services Logo"
        style={{ width: 120, marginBottom: 24 }}
      />
      <h1 style={{ fontWeight: 700, fontSize: '2.2rem', marginBottom: 16, color: 'var(--color-blue)' }}>
        Ottawa’s Trusted Cleaning for Homes, Rentals & Busy Lives
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#222', maxWidth: 500, margin: '0 auto 1.5rem' }}>
        Clean. Cared for. Yours.
      </p>
      <div style={{ display: 'flex', gap: 24, justifyContent: 'center', margin: '1.5rem 0' }}>
        <a href="/quote" className="btn" style={{ background: 'var(--color-blue)' }}>Get a Quote</a>
        <a href="/booking" className="btn" style={{ background: 'var(--color-teal)' }}>Book a Clean</a>
      </div>
      <div style={{ marginTop: 32, color: 'var(--color-teal)', fontWeight: 600 }}>
        Serving Ottawa’s homes, rentals, families, and seniors with care.
      </div>
    </section>
  );
}