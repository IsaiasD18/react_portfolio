// import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

// Component Imports
import Footer from './components/Footer';
import Header from './components/Header'

// Page imports
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';




function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<About />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
