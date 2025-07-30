import React, { useCallback, useMemo } from "react";
import SectionTitle from "../../../../shared/components/atoms/SectionTitle";

const SpecialOffers = () => {
  const sectionContent = useMemo(
    () => (
      <>
        <p className="about-para">
          At Flynest, we believe unforgettable adventures shouldn’t come with a
          hefty price tag. That’s why we offer exclusive travel deals that
          combine luxury, comfort, and affordability—making your dream
          destinations more accessible than ever.
        </p>
        <p className="about-para">
          Whether you're planning a solo escape, a romantic getaway, or a family
          vacation, our special offers are designed to suit every travel style.
          Let us help you create lasting memories without breaking the bank.
        </p>
      </>
    ),
    []
  );

  const handleLearnMore = useCallback(() => {
    // console.log("Learn More clicked");
  }, []);
  return (
    <>
      <SectionTitle
        title="Special Offers"
        subtitle="Get The Best travel Experience with flynest"
      />

      {sectionContent}

      <button type="button" className="btn about-btn" onClick={handleLearnMore}>
        Learn More <i className="ri-arrow-right-up-line"></i>
      </button>

      <div className="user-icon d-flex gap-3 mt-4 align-items-center">
        <i className="ri-user-line"></i>
        <p className="about-para text-capitalize mb-0">
          2,500 people booked tomorrow land event in the last 24 hours
        </p>
      </div>
    </>
  );
};

export default React.memo(SpecialOffers);
