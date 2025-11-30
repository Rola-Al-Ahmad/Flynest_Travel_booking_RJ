import React, { memo } from "react";

import toursData from "../../Data/Tours";

import { useParams } from "react-router";

import "./TourDetails.css";
import TourSlider from "./components/TourSlider";
import DetailSection from "./components/DetailSection";

const TourDetails = () => {
  const { id } = useParams();

  const tour = toursData.find((item) => item.id == id);

  const fallbackTour = {
    name: "Desert Safari Adventure",
    location: "Dubai, UAE",
    duration: "1 Day",
    rating: 4.8,
    price: 150,
    reviews: 172,
    tag: "Popular",
    person: 3,
    image: "/Images/image1.jpeg",
  };

  const selectedTour = tour || fallbackTour;

  return (
    <>
      <TourSlider />

      <DetailSection tour={selectedTour} />
    </>
  );
};

export default memo(TourDetails);
