import React from "react";
import "../app/globals.css"; // Import global styles

import FooterCTASection from "../app/components/landing/FooterCTASection";
import HeroSection from "../app/components/landing/HeroSection";
import HowItWorksSection from "../app/components/landing/HowItWorksSection";
import ServicesSection from "../app/components/landing/ServicesSection";
import TestimonialsSection from "../app/components/landing/TestimonialsSection";

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
     
      <FooterCTASection />
    </>
  );
};

export default LandingPage;
