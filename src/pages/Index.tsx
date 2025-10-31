import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import FeaturedSection from "../components/home/FeaturedSection";
import TestimonialsSection from "../components/home/TestimonialsSection";
import HowItWorksSection from "../components/home/HowItWorksSection";
import FeaturesSection from "../components/home/FeaturesSection";
import MissionSection from "../components/home/MissionSection";
import PricingSection from "../components/home/PricingSection";
import FAQSection from "../components/home/FAQSection";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturedSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MissionSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};
const App = () => {
  return (
    <div>
      <HowItWorksSection />
    </div>
  );
};

// ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
export default Index;
