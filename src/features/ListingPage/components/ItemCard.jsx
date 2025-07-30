import React, { useCallback, useMemo } from "react";
import useCartContext from "../../Cart/hooks/useCartContext";
import Card from "../../../shared/components/atoms/Card";

const ItemCard = ({ item, type }) => {
  const { addToCart } = useCartContext();

  const handleAddToCart = useCallback(() => {
    addToCart(item, type);
  }, [addToCart, item, type]);

  const renderImage = useMemo(
    () =>
      type === "tours" ? (
        <Card.ImgLink item={item} />
      ) : (
        <Card.Img item={item} />
      ),
    [item, type]
  );

  const renderTopRight = useMemo(
    () =>
      type === "tours" ? (
        <Card.Button item={item} type={type} addToCart={handleAddToCart} />
      ) : (
        <Card.BadgeRating rating={item.rating} reviews={item.reviews} />
      ),
    [item, type, handleAddToCart]
  );

  const renderMiddle = useMemo(() => {
    const icons = {
      tours: [
        { icon: "ri-time-line", text: item.duration },
        { icon: "ri-user-3-line", text: item.person },
      ],
      transports: [
        { icon: "ri-roadster-line", text: item.mileage },
        { icon: "ri-settings-2-line", text: item.transmission },
        { icon: "ri-steering-line", text: item.seats },
        { icon: "ri-repeat-line", text: item.trips },
      ],
    };

    switch (type) {
      case "tours":
      case "transports":
        return icons[type].map((detail, idx) => (
          <Card.DetailItem key={idx} icon={detail.icon} text={detail.text} />
        ));
      case "hotels":
        return <Card.HotelFacilities facilities={item.facilities} />;
      case "restaurants":
        return (
          <>
            <span className="badge bg-dark w-25">{item.tag}</span>
            <span>
              <s className="text-secondary me-1 text-decoration-line-through">
                ${item.oldPrice}
              </s>
              <strong className="text-success">${item.price}</strong>
            </span>
          </>
        );
      default:
        return null;
    }
  }, [item, type]);

  const renderFooter = useMemo(() => {
    const price = <Card.Price price={item.price} type={type} />;

    if (type === "tours") {
      return (
        <Card.Footer>
          {price}
          <Card.Rating rating={item.rating} reviews={item.reviews} />
        </Card.Footer>
      );
    }

    return (
      <div className="d-flex justify-content-between align-items-center mt-auto">
        {price}
        <Card.Button item={item} type={type} addToCart={handleAddToCart} />
      </div>
    );
  }, [item, type, handleAddToCart]);

  return (
    <Card type={type}>
      <Card.ImgContainer>
        {renderImage}
        {renderTopRight}
      </Card.ImgContainer>

      <Card.Body>
        <Card.Title name={item.name} type={type} />
        <Card.Location location={item.location} type={type} />

        <Card.Middle>{renderMiddle}</Card.Middle>
        {renderFooter}
      </Card.Body>
    </Card>
  );
};

export default React.memo(ItemCard);
