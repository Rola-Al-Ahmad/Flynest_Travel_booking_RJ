import React, { useMemo } from "react";

import destination4 from "../../../../assets/destination-4.png";
import destination5 from "../../../../assets/destination-5.png";
import destination6 from "../../../../assets/destination-6.png";
import destination7 from "../../../../assets/destination-7.png";

import DestinationItem from "./DestinationItem";

const DestinationGallery = () => {
  const destinationList = useMemo(
    () => [
      {
        id: 1,
        img: destination4,
        name: "Spain",
        location: "Malaga View",
        rating: 4.5,
      },
      {
        id: 2,
        img: destination5,
        name: "Maldives",
        location: "Maldives",
        rating: 4.5,
      },
      {
        id: 3,
        img: destination6,
        name: "Maldives",
        location: "Maldives",
        rating: 4.5,
      },
      {
        id: 4,
        img: destination7,
        name: "Maldives",
        location: "Maldives",
        rating: 4.5,
      },
    ],
    []
  );

  const destinationItems = useMemo(
    () =>
      destinationList.map((item) => (
        <div className="col-lg-3 col-md-6 col-sm-6 mb-4" key={item.id}>
          <DestinationItem item={item} />
        </div>
      )),
    [destinationList]
  );

  return (
    <div className="destination-gallery">
      <div className="row mt-4">{destinationItems}</div>
    </div>
  );
};

export default React.memo(DestinationGallery);
