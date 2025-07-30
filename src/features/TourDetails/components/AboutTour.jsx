import React from "react";
import { useParams } from "react-router";

import toursData from "../../../Data/Tours.json";

const AboutTour = () => {
  const { id } = useParams();
  const tour = toursData.find((item) => item.id == id);

  console.log(tour);
  return (
    <section className="mb-4">
      <h5 className="mb-2">About</h5>
      {tour.about.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </section>
  );
};

export default React.memo(AboutTour);
