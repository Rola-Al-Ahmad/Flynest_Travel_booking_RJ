import React from "react";

const PricingCard = ({ plans }) => {
  return (
    <div className="col-lg-4">
      <div className={`pricing-card ${plans.id === 2 && "active"}`}>
        <h5 className="text-capitalize">{plans.name}</h5>
        <p className="mb-3">{plans.desc}</p>
        {plans.priceContent && (
          <div className="pricing-content d-flex align-items-center gap-2">
            <h2>{plans.priceContent.price}</h2>
            <span>{plans.priceContent.type}</span>
          </div>
        )}

        <ul className="list-unstyled mt-4">
          {plans.features.map((item, index) => (
            <li
              key={index}
              className={`mb-4 text-capitalize${
                item.disabled ? " disabled-li" : ""
              }`}
            >
              <i className="ri-check-line"></i> {item.name}
            </li>
          ))}
        </ul>
        <button type="button" className="btn text-white text-capitalize w-100">
          {plans.name === "Enterprise" ? "Contact us" : "Try now"}
          <i className="ri-arrow-right-up-line"></i>
        </button>
        <p className="text-white mt-3 text-capitalize">{plans.note}</p>
      </div>
    </div>
  );
};

export default React.memo(PricingCard);
