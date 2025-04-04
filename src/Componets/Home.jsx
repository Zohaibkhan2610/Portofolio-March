import React from "react";
import HeroSection from "./Hero ";
import MyWorkSection from "./MyWorkSection";
import ContactSection from "./Contact";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";

function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MyWorkSection />
      <ContactSection />
    </div>
  );
}

export default Home;
