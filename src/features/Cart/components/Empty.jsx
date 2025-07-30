import React, { useMemo } from "react";
import { Link } from "react-router";

const Empty = () => {
  const actions = useMemo(
    () => [
      {
        to: "/hotels",
        label: "Browse Hotels",
        icon: "🏨",
      },
      {
        to: "/transports",
        label: "Book Transport",
        icon: "🚌",
      },
      {
        to: "/restaurants",
        label: "Find Restaurants",
        icon: "🍽️",
      },
    ],
    []
  );
  return (
    <div className="cart-empty text-center text-light p-5 rounded shadow-sm">
      <i
        className="ri-shopping-cart-2-line empty-icon mb-3"
        aria-label="Empty Cart Icon"
      ></i>

      <h4 className="fw-bold mb-2">Your Cart is Currently Empty</h4>

      <p className="mb-4 text-light-emphasis">
        Looks like you haven't added any bookings yet.
      </p>

      <div className="d-flex flex-wrap justify-content-center gap-3">
        {actions.map(({ to, label, icon }) => (
          <Link
            key={to}
            to={to}
            className={`btn px-4 py-2 fw-semibold rounded-pill shadow-sm`}
          >
            <span className="me-2">{icon}</span>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Empty);
