import React, { useMemo } from "react";

import destination1 from "../../../assets/destination-1.png";
import destination2 from "../../../assets/destination-2.png";
import destination3 from "../../../assets/destination-3.jpeg";

import DestinationGallery from "./components/DestinationGallery";
import DestinationItem from "./components/DestinationItem";

import "./Destination.css";
import Container from "../../../shared/components/atoms/Container";

const Destination = () => {
  const destinationList = useMemo(
    () => [
      {
        id: 1,
        img: destination1,
        name: "Spain",
        location: "Malaga View",
        rating: 4.5,
      },
      {
        id: 2,
        img: destination2,
        name: "Maldives",
        location: "Maldives",
        rating: 4.5,
      },
      {
        id: 3,
        img: destination3,
        name: "Maldives",
        location: "Maldives",
        rating: 4.5,
      },
    ],
    []
  );

  const subTitle = useMemo(
    () => (
      <>
        explore the beautiful <br /> places around the world
      </>
    ),
    []
  );

  const destinationItems = useMemo(
    () =>
      destinationList.map((item, index) => (
        <div className="col-xl-4 col-lg-4 mb-4 mb-lg-2" key={index}>
          <DestinationItem item={item} />
        </div>
      )),
    [destinationList]
  );
  return (
    <Container
      sectionName="destination"
      title="Destination List"
      subtitle={subTitle}
    >
      {destinationItems}

      <DestinationGallery />
    </Container>
  );
};

export default React.memo(Destination);
