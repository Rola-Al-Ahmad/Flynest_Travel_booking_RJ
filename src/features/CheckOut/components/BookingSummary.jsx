import React from "react";

import { useLocation } from "react-router";

import BookingDetails from "./BookingDetails";
import PriceDetails from "./PriceDetails";

const BookingSummary = ({ handleNext }) => {
  const location = useLocation();

  return (
    <div className="checkout-summary rounded p-4 shadow-sm bg-section-light">
      <h5 className="text-white text-center mb-4">Booking Summary</h5>

      {/* Booking Details */}
      <BookingDetails />

      {/* Price Summary */}
      <PriceDetails location={location} />
      <button
        className="btn next-btn w-100 mt-3 fw-bold"
        onClick={handleNext}
        type="submit"
      >
        Continue & Next
      </button>
      <div className="text-white text-center small mt-3">
        <i className="ri-checkbox-circle-line me-1 text-success"></i>
        Free Cancellation{" "}
        <small className="text-secondary">Up to 24 hours in advance</small>
      </div>
    </div>
  );
};

export default React.memo(BookingSummary);
