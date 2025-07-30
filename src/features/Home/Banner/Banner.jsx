import React, { useMemo } from "react";

import BannerCard from "./components/BannerCard";

import "./Banner.css";
import Container from "../../../shared/components/atoms/Container";

const Banner = () => {
  const bannerData = useMemo(
    () => [
      {
        id: 1,
        title: "",
        subtitle: "Let's Explore The World",
        location: "Beirut, Lebanon",
        discount: "50%",
        showHighlight: true,
      },
      {
        id: 2,
        title: "Nearby Hotel",
        subtitle: "",
        location: "Beirut, Lebanon",
        discount: "50%",
        showHighlight: false,
      },
    ],
    []
  );

  //Memoize the mapped JSX for better performance if the component gets bigger.
  const bannerCards = useMemo(
    () => bannerData.map((item, index) => <BannerCard key={index} {...item} />),
    [bannerData]
  );
  return (
    <Container
      sectionName="banner"
      title="special offers"
      subtitle="Winter Our Big Offers to Inspire You"
    >
      {bannerCards}
    </Container>
  );
};

export default React.memo(Banner);
