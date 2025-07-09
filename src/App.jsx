import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
// Add other pages as you build them
// import About from './pages/About.jsx';
// import Services from './pages/Services.jsx';
// import Quote from './pages/Quote.jsx';
// import Booking from './pages/Booking.jsx';
// import FAQ from './pages/FAQ.jsx';
// import Contact from './pages/Contact.jsx';
// import NotFound from './pages/NotFound.jsx';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
export default App;
 

// function App() {
//   return (
//     <>
//       <Navbar />
//       <main style={{ minHeight: '80vh' }}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           {/* <Route path="/about" element={<About />} /> */}
//           {/* <Route path="/services" element={<Services />} /> */}
//           {/* <Route path="/quote" element={<Quote />} /> */}
//           {/* <Route path="/booking" element={<Booking />} /> */}
//           {/* <Route path="/faq" element={<FAQ />} /> */}
//           {/* <Route path="/contact" element={<Contact />} /> */}
//           {/* <Route path="*" element={<NotFound />} /> */}
//         </Routes>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;