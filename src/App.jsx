// src/App.jsx
import React from "react";

// Import all components
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Benefits from "./components/benifits/Benefits"
import Services from "./components/services/Services";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import CTASection from "./components/CTASection/CTASection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Hero/>
      <Benefits/>
      <Services/>
      <Testimonials/>
      <About/>
      <CTASection/>
      <Footer/>
      {/* <Hero />
      <Benefits/>
      <Services/>
       <Testimonials />
      <About />
     
      <CTASection />
      <Footer /> */}
    </div>
  );
}

export default App;
