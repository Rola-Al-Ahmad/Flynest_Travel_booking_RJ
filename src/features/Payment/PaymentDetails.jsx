import React, { useState } from "react";

import "./Payment.css";

import Logos from "./components/Logos";
import PaymentForm from "./components/PaymentForm";

const PaymentDetails = () => {
  const [selectedMethod, setSelectedMethod] = useState("mastercard");
  const cardName =
    selectedMethod === "mastercard"
      ? "Master Card"
      : selectedMethod === "visa"
      ? "Visa Card"
      : selectedMethod === "paypal"
      ? "PayPal"
      : "Cash";
  return (
    <section className="mb-4 shadow-sm bg-section-light rounded p-4">
      <h4 className="fw-bold mb-4">Choose Payment Method</h4>
      <Logos
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
      />
      <h5 className="my-4">{cardName} Details</h5>
      <PaymentForm selectedMethod={selectedMethod} />
    </section>
  );
};

export default React.memo(PaymentDetails);
