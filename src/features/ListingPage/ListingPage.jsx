import React, { useState } from "react";

import "./ListingPage.css";
import ItemCard from "./components/ItemCard";

const ListingPage = ({ data, type }) => {
  const [visible, setVisible] = useState(6);

  // const { data } = useOutletContext();

  // const CardComponent = useMemo(() => {
  //   switch (type) {
  //     case "tours":
  //       return TourCard;
  //     case "hotels":
  //       return HotelCard;
  //     case "transports":
  //       return TransportCard;
  //     case "restaurants":
  //       return RestaurantCard;
  //     default:
  //       return null;
  //   }
  // }, [type]);

  return (
    <>
      <div className="row">
        {data.slice(0, visible).map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4 mb-4 listing-card">
            <ItemCard item={item} type={type} />
          </div>
        ))}
      </div>

      {visible < data.length ? (
        <div className="text-center my-4">
          <button
            className="btn btn-primary px-4 py-2"
            onClick={() => setVisible(visible + 6)}
          >
            Show More
          </button>
        </div>
      ) : (
        <div className="text-center my-4">
          <button
            className="btn btn-secondary px-4 py-2"
            onClick={() => setVisible(6)}
          >
            Show Less
          </button>
        </div>
      )}
    </>
  );
};

export default ListingPage;
