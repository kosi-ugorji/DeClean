import React from 'react';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-blue)', color: '#fff', fontFamily: 'Poppins, Arial, sans-serif', padding: '2rem 0', marginTop: 32 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
        <img src="/assets/logo2.png" alt="Declean Cleaning Services Secondary Logo" width={40} style={{ marginBottom: 8 }} />
        <div style={{ display: 'flex', gap: 24, marginBottom: 8 }}>
          <a href="mailto:decleaningservicesottawa@gmail.com" style={{ color: '#fff' }}>Email</a>
          {/* <a href="https://instagram.com/yourbrand" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Instagram</a>
          <a href="https://facebook.com/yourbrand" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>Facebook</a> */}
        </div>
        <small style={{ color: '#e0f7ff', fontSize: 14 }}>
          © {new Date().getFullYear()} DECLEAN Cleaning Services &nbsp;|&nbsp;
          <a href="/privacy" style={{ color: '#fff', textDecoration: 'underline' }}>Privacy Policy</a>
        </small>
      </div>
    </footer>
  );
}