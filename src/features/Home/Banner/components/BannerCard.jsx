import React, { useCallback, useMemo } from "react";

const BannerCard = ({
  id,
  title,
  subtitle,
  location,
  discount,
  showHighlight,
  className,
}) => {
  //Memoize JSX fragments like highlightText, mainTitle, and discountMessage since they depend only on props.
  const highlightText = useMemo(() => {
    return showHighlight ? (
      <p className="highlight-text fs-3">Save up to</p>
    ) : null;
  }, [showHighlight]);

  const mainTitle = useMemo(() => {
    if (subtitle) {
      return <p className="para fs-4 fw-bold">{subtitle}</p>;
    } else if (title) {
      return <h4 className="fs-1 fw-semibold">{title}</h4>;
    }
    return null;
  }, [title, subtitle]);

  const discountMessage = useMemo(() => {
    if (!subtitle && discount) {
      return (
        <p className="para">
          Up to <span className="discount">{discount}</span> Off
        </p>
      );
    }
    return null;
  }, [subtitle, discount]);

  const handleBooking = useCallback(() => {
    // console.log("Booking button clicked for:", location);
    // navigate to booking page or open modal
  }, [location]);
  return (
    <div className={`col-lg-6 mb-4 ${className}`}>
      <div
        className={`banner-content z-1 py-5 px-4 rounded-3 banner-bg banner-bg-${id} text-white`}
      >
        {highlightText}
        {discount && showHighlight && (
          <h4 className="fs-1 fw-semibold discount">{discount}</h4>
        )}
        {mainTitle}
        {discountMessage}
        <div className="location d-flex align-items-center gap-2">
          <i className="bi bi-geo-alt"></i>
          <p className="name mb-0">{location}</p>
        </div>
        <button
          type="button"
          className="btn banner-btn px-4"
          onClick={handleBooking}
        >
          Booking Now
        </button>
      </div>
    </div>
  );
};

export default React.memo(BannerCard);
