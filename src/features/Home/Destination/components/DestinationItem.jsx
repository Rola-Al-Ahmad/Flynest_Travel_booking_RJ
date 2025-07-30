import React from "react";

const DestinationItem = ({ item }) => {
  return (
    <div className="destination-item rounded-3 w-100 text-white">
      <img src={item.img} alt="destination-1-img" />
      <div className="rating-badge">
        <i className="ri-star-s-fill"></i> {item.rating}
      </div>
      <div className="destination-info p-4 w-100">
        <div className="destination-name">
          <p className="para m-0 fs-2 fw-bold">{item.name}</p>
          <div className="location d-flex align-items-center gap-2">
            <i className="ri-map-pin-line"></i>
            <p className="location-name m-0">{item.location}</p>
          </div>
        </div>
        <div className="arrow-btn">
          <i className="ri-arrow-right-line fs-4"></i>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DestinationItem);
