import React from "react";
import Newsletter from "../../Shared/Newsletter/Newsletter";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import ServicesSection from "../ServicesSection/ServicesSection";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <AboutSection />
      <ServicesSection />
      <Newsletter />
    </div>
  );
};

export default Home;
