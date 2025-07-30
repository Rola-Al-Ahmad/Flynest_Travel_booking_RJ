import React from "react";

import bgVideo from "../../../assets/travel1.mp4";

import HeroContent from "./components/HeroContent";
import TravelBox from "./components/TravelBox";

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-header section">
      <video autoPlay muted loop playsInline className="hero-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="hero-overlay text-white">
        <HeroContent />
        <TravelBox />
      </div>
    </section>
  );
};

export default React.memo(Hero);
