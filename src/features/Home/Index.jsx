import React from "react";
import "./Home.css";

import Hero from "./Hero/Hero";
import Banner from "./Banner/Banner";
import Tour from "./Tour/Tour";
import About from "./About/About";
import Destination from "./Destination/Destination";
import Explore from "./Explore/Explore";
import Testimonial from "./Testimonial/Testimonial";
import Brand from "./Brand/Brand";
import Blog from "./Blog/Blog";
import Pricing from "./Pricing/Pricing";

const Index = () => {
  return (
    <>
      <Hero />
      <Banner />
      <Tour />
      <About />
      <Tour tourContainer={true} tourCount={2} />
      <Destination />
      <Explore />
      <Testimonial />
      <Brand />
      <Blog />
      <Pricing />
    </>
  );
};

export default React.memo(Index);
