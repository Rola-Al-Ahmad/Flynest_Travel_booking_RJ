import React from "react";
import InclusionExclusion from "./InclusionExclusion";
import TourPlan from "./TourPlan";
import Policy from "./Policy";
import TourInfo from "./TourInfo";
import AboutTour from "./AboutTour";
import BookTour from "./BookTour";

const DetailSection = ({ tour }) => {
  return (
    <div className="about-detail-section pt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <h4 className="tour-title">{tour.name}</h4>
            <TourInfo tour={tour} />

            <AboutTour />

            <InclusionExclusion
              includedItems={tour.includedItems}
              excludedItems={tour.excludedItems}
            />

            <TourPlan tour={tour} />
            <Policy />
          </div>
          <div className="col-md-4">
            <BookTour tour={tour} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
