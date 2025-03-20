import React from "react";
import HeroSection from "../../components/HeroSection";
import Services from "../../components/Services";
import ShopImg from "../../components/ShopImg";

function Home() {
  return (
    <>
      <div className=" gap-4">
        <HeroSection />
        <Services />
        <ShopImg />
      </div>
    </>
  );
}

export default Home;
