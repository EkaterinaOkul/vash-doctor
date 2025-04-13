import React from "react";
import Hero from "../home/Hero/Hero";
import About from "../home/About/About";
import Specialists from "../home/Specialists/Specialists";
import Services from "../home/Services/Services";
import QuotaBanner from "../home/QuotaBanner/QuotaBanner";
import Gallery from "../home/Gallery/Gallery";
import Reviews from "../home/Reviews/Reviews";
import Contacts from "../home/Contacts/Contacts";



const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Specialists />
      <QuotaBanner />
      <Services />
      <Gallery />
      <Reviews />
      <Contacts />
    </div>
  );
};

export default Home;
