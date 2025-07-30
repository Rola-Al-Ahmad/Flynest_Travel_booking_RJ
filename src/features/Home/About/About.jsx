import React from "react";

import SpecialOffers from "./components/SpecialOffers";
import AboutBanner from "./components/AboutBanner";

import Container from "../../../shared/components/atoms/Container";

import "./About.css";

const About = () => {
  return (
    <Container sectionName="about" containerName="about">
      <div className="col-lg-6">
        <SpecialOffers />
      </div>
      <div className="col-lg-6 mt-xl-0 mt-5">
        <AboutBanner />
      </div>
    </Container>
  );
};

export default React.memo(About);
