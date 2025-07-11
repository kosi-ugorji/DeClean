import React from 'react';
import { Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Quote from './pages/GetQuote.jsx';
import Booking from './pages/Booking.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
// import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/book" element={<Booking />} />
          {/* Add more routes as needed */}
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;