import React from "react";
import style from "../../assets/css/style.module.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import HeroSection from "../../components/Hero/Hero";
import FeatureCards from "../../components/Cards/Cards";
import PricingSection from "../../components/PricingSection/PricingSection";
import TestimonialsSection from "../../components/TestimonialsSection/TestimonialsSection";
import ContactForm from "../../components/Contact/Contact";

const Home = () => {
  return (
    <div className={style.title}>
      <HeroSection />
      <FeatureCards />
      <PricingSection />
      <TestimonialsSection />
      <ContactForm />
    </div>
  );
};

export default Home;
