import React from "react";

const TourInfo = ({ tour }) => {
  return (
    <>
      <div className="d-flex gap-3 align-items-center mb-3">
        <span>
          <i className="ri-map-pin-line"></i> {tour.location}
        </span>
        <span>
          <i className="ri-calendar-2-line"></i> {tour.duration}
        </span>
        <span>
          <i className="ri-user-3-line"></i> {tour.person}
        </span>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <strong>
            From <span className="fs-2">${tour.price}</span>
          </strong>
        </div>
        <div className="text-warning">
          <i className="ri-star-fill"></i> {tour.rating} ({tour.reviews} reviews
          )
        </div>
      </div>
    </>
  );
};

export default React.memo(TourInfo);
