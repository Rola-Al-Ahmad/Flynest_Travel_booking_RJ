import React from "react";
import useCartContext from "../../Cart/hooks/useCartContext";

const BookTour = ({ tour }) => {
  const { addToCart } = useCartContext();

  return (
    <div className="p-4 rounded-4 shadow-lg booking-widget text-white">
      <h6 className="text-muted mb-2">From</h6>
      <h3 className="fw-bold text-light mb-4">
        <span className="text-secondary">${tour.price}</span>
      </h3>
      <form action="">
        <div className="mb-3">
          <label htmlFor="guests" className="text-light p-2">
            Guests
          </label>
          <select
            name="guests"
            id="guests"
            className="form-select bg-dark text-white border-secondary"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-secondary w-100 mt-3 d-flex align-items-center justify-content-center gap-2"
          onClick={() => addToCart(tour)}
        >
          <i className="ri-shopping-cart-2-line"></i>
          <span>Book Now</span>
        </button>
      </form>
      <div className="small mt-4 text-muted border-top pt-3">
        <i className="ri-check-double-line me-2 text-success"></i>
        Free Cancellation - Up to 24 hours before the tour starts.
      </div>
    </div>
  );
};

export default React.memo(BookTour);
