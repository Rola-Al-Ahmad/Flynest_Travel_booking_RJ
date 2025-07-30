import React from "react";
import useCartContext from "../../../Cart/hooks/useCartContext";
import Card from "../../../../shared/components/atoms/Card";

const TourCard = ({ item, type }) => {
  const { addToCart } = useCartContext();
  return (
    // <div className="card h-100 tour-card position-relative shadow-sm">
    //   <div className="position-relative">
    //     {type === "tours" ? (
    //       <Link to={`/tours/${item.id}`}>
    //         <img
    //           src={item.image}
    //           alt={`${item.name}-img`}
    //           className="card-img-top rounded-3"
    //         />
    //       </Link>
    //     ) : (
    //       <img
    //         src={item.image}
    //         alt={`${item.name}-img`}
    //         className="card-img-top rounded-3"
    //       />
    //     )}

    //     <i
    //       className="ri-shopping-cart-2-line fs-5 text-white position-absolute top-0 end-0 m-2"
    //       role="button"
    //       onClick={() => addToCart(item, type)}
    //     ></i>
    //   </div>
    //   <div className="card-body py-3">
    //     <h5 className="card-title fw-semibold mb-1">{item.name}</h5>
    //     <p className="mb-3">
    //       <i className="ri-map-pin-line">{item.location}</i>
    //     </p>
    //     {item.duration && item.person && (
    //       <div
    //         className="d-flex flex-wrap justify-content-between small mb-3 p-2 rounded-2"
    //         style={{ backgroundColor: "rgba(248, 250, 252, .08)" }}
    //       >
    //         <div className="me-3">
    //           <div className="ri-time-line me-1">{item.duration}</div>
    //         </div>
    //         <div>
    //           <div className="ri-user-line me-1">{item.person}</div>
    //         </div>
    //       </div>
    //     )}
    //     <div className="d-flex mt-2 align-items-center justify-content-between small">
    //       <div className="ms-5" style={{ color: "#8f94a3" }}>
    //         From <span className="text-white fw-bold">${item.price}</span>
    //       </div>
    //       <div className="ms-5" style={{ color: "#8f94a3" }}>
    //         <i className="text-star-fill text-warning me-1"></i>
    //         <span>
    //           {item.rating}({item.reviews})
    //         </span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <Card type="tour">
      <Card.ImgContainer>
        <Card.ImgLink item={item} />
        <Card.Button item={item} type={type} addToCart={addToCart} />
      </Card.ImgContainer>
      <Card.Body>
        <Card.Title name={item.name} />
        <Card.Location location={item.location} />
        <Card.Middle>
          <Card.Duration duration={item.duration} />
          <Card.Person person={item.person} />
        </Card.Middle>
        <Card.Footer>
          <Card.Price price={item.price} />
          <Card.Rating rating={item.rating} reviews={item.reviews} />
        </Card.Footer>
      </Card.Body>
    </Card>
  );
};

export default React.memo(TourCard);
