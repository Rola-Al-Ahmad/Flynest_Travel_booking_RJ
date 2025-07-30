import React, { memo } from "react";
import { Link } from "react-router";

const Card = ({ children, type }) => {
  const className = `card h-100 ${type}-card shadow-sm d-flex flex-column ${
    type !== "transport" ? "position-relative" : ""
  }`;

  return <div className={className}>{children}</div>;
};

Card.ImgContainer = memo(({ children }) => (
  <div className="position-relative">{children}</div>
));

Card.ImgLink = memo(({ item }) => (
  <Link to={`/tours/${item.id}`}>
    <img
      src={item.image}
      alt={`${item.name}-img`}
      className="card-img-top rounded-3"
    />
  </Link>
));

Card.Img = memo(({ item }) => (
  <img
    src={item.image}
    alt={`${item.name}-img`}
    className="img-fluid w-100 rounded-3"
  />
));

Card.Button = memo(({ item, type, addToCart }) =>
  ["hotels", "transports", "restaurants"].includes(type) ? (
    <button
      className="btn btn-outline-primary btn-sm"
      onClick={() => addToCart(item, type)}
    >
      Book Now
    </button>
  ) : (
    <i
      className="ri-shopping-cart-2-line fs-5 text-white position-absolute top-0 end-0 m-2"
      role="button"
      onClick={() => addToCart(item, type)}
    ></i>
  )
);

Card.Body = memo(({ children }) => (
  <div className="card-body py-3">{children}</div>
));

Card.Title = memo(({ name, type }) =>
  ["hotels", "transports", "restaurants"].includes(type) ? (
    <h6 className="card-title fw-bold mb-1">{name}</h6>
  ) : (
    <h5 className="card-title fw-semibold mb-1">{name}</h5>
  )
);

Card.Location = memo(({ location, type }) =>
  ["hotels", "transports", "restaurants"].includes(type) ? (
    <div className="text-muted mb-2">
      <i className="ri-map-pin-line me-1"></i>
      {location}
    </div>
  ) : (
    <p className="mb-3">
      <i className="ri-map-pin-line me-1"></i>
      {location}
    </p>
  )
);

Card.Middle = memo(({ children }) => (
  <div
    className="d-flex flex-wrap justify-content-between small mb-3 p-2 rounded-2"
    style={{ backgroundColor: "rgba(248, 250, 252, .08)" }}
  >
    {children}
  </div>
));

Card.Footer = memo(({ children }) => (
  <div className="d-flex mt-2 align-items-center justify-content-between small">
    {children}
  </div>
));

Card.Price = memo(({ price, type }) =>
  ["hotels", "transports", "restaurants"].includes(type) ? (
    <span className="fw-semibold" style={{ color: "#f26f55" }}>
      ${price}{" "}
      <small>
        /{" "}
        {type === "hotels" ? "Person" : type === "transports" ? "Day" : "Meal"}
      </small>
    </span>
  ) : (
    <div className="ms-5" style={{ color: "#8f94a3" }}>
      From <span className="text-white fw-bold">${price}</span>
    </div>
  )
);

Card.Rating = memo(({ rating, reviews }) => (
  <div className="ms-5" style={{ color: "#8f94a3" }}>
    <i className="text-star-fill text-warning me-1"></i>
    <span>
      {rating}({reviews})
    </span>
  </div>
));

Card.BadgeRating = memo(({ rating, reviews }) => (
  <span className="badge position-absolute top-0 end-0 m-2">
    <i className="ri-star-fill me-1"></i>
    {rating} ({reviews})
  </span>
));

Card.HotelFacilities = memo(({ facilities }) => (
  <div className="d-flex flex-wrap gap-2 text-muted">
    {facilities.map((facility, i) => (
      <span key={i} className="d-flex align-items-center">
        <i className={`${facility.icon} me-1`}></i> {facility.name}
      </span>
    ))}
  </div>
));

Card.DetailItem = memo(({ icon, text }) => (
  <span className="text-muted">
    <i className={`${icon} me-1`}></i> {text}
  </span>
));
export default Card;
