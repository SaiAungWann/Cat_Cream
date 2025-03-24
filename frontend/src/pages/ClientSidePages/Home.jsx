import React from "react";
import HeroSection from "../../components/homePage/HeroSection";
import Services from "../../components/homePage/Services";
import ShopImg from "../../components/homePage/ShopImg";
import MobileApp from "../../components/homePage/MobileApp";
import Testimonial from "../../components/homePage/Testimonial";

function Home() {
  return (
    <>
      <div className=" gap-4">
        <HeroSection />
        <Services />
        <ShopImg />
        <MobileApp />
        <Testimonial />
      </div>
    </>
  );
}

export default Home;
