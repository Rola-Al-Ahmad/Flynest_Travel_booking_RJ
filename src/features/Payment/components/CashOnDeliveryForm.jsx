import React from "react";

const CashOnDeliveryForm = () => {
  const inputs = [
    {
      name: "fullName",
      id: "fullName",
      label: "Full Name",
      placeholder: "Rola Al-Ahmad",
    },
    {
      name: "address",
      id: "address",
      label: "Delivery Address",
      placeholder: "123 Main St, City, Country",
    },
    {
      name: "phone",
      id: "phone",
      label: "Phone Number",
      placeholder: "+961 70 000 000",
    },
  ];
  return (
    <div className="row g-3">
      {inputs.map((input) => (
        <div className="col-12" key={input.id}>
          <label htmlFor={input.id} className="form-label">
            {input.label}
          </label>
          <input
            type="text"
            id={input.id}
            name={input.name}
            className="form-control"
            placeholder={input.placeholder}
            required
          />
        </div>
      ))}
    </div>
  );
};

export default React.memo(CashOnDeliveryForm);
