import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Mentorship from './components/Mentorship';
import PaymentStatus from './components/PaymentStatus';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Skills />
    <Experience />
    <Certifications />
    <Projects />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mentorship" element={<Mentorship />} />
          <Route path="/payment-status" element={<PaymentStatus />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
