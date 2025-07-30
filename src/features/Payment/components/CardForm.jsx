import React from "react";

const CardForm = () => {
  const inputs = [
    {
      name: "name",
      id: "name",
      label: "Name on Card",
      placeholder: "Rola Al-Ahmad",
    },
    {
      name: "cardNumber",
      id: "cardNumber",
      label: "Card Number",
      placeholder: "XXXX-XXXX-XXXX-XXXX",
    },
    {
      className: "col-md-6",
      type: "date",
      name: "expiryDate",
      id: "expiryDate",
      label: "Expiry Date",
      placeholder: "MM/YY",
      pattern: "^(0?[1-9]|1[0-2])$",
    },
    {
      className: "col-md-6",
      name: "cvv",
      id: "cvv",
      label: "CVV Number",
      placeholder: "CVV Number",
    },
  ];
  return (
    <div className="row g-3">
      {inputs.map((input, index) => (
        <div
          key={index}
          className={input.className ? input.className : "col-12"}
        >
          <label htmlFor={input.id} className="form-label">
            {input.label}
          </label>
          <input
            type={input.type ? input.type : "text"}
            className="form-control"
            id={input.id}
            placeholder={input.placeholder}
            required
            name={input.name}
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(CardForm);
