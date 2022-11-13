import React from "react";
import AboutSection from "../AboutSection/AboutSection";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <AboutSection />
      <Services />
    </div>
  );
};

export default Home;
