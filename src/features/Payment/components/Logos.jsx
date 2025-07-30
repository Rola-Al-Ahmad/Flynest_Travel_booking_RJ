import React from "react";

const Logos = ({ selectedMethod, setSelectedMethod }) => {
  const logos = [
    { text: "mastercard", icon: "../../../../public/logos/mastercard.png" },
    { text: "visa", icon: "../../../../public/logos/visa.png" },
    { text: "paypal", icon: "../../../../public/logos/paypal.png" },
    { text: "cash", icon: "../../../../public/logos/cash.png" },
  ];

  return (
    <div className="d-flex justify-content-center align-items-center gap-4">
      {logos.map((logo, key) => (
        <div
          key={key}
          className="img-container rounded rounded-4 border group bg-transparent position-relative"
          onClick={() => setSelectedMethod(logo.text)}
        >
          <img
            src={logo.icon}
            width="100"
            height="60"
            alt={logo}
            className={`d-block mx-auto img-fluid grayscale-img ${
              selectedMethod === logo.text ? "selected" : ""
            }`}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(Logos);
