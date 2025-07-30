import React from "react";
import CardForm from "./CardForm";
import PayPalForm from "./PayPalForm";
import CashOnDeliveryForm from "./CashOnDeliveryForm";

const PaymentForm = ({ selectedMethod }) => {
  return (
    <>
      {selectedMethod === "mastercard" || selectedMethod === "visa" ? (
        <CardForm />
      ) : selectedMethod === "paypal" ? (
        <PayPalForm />
      ) : (
        selectedMethod === "cash" && <CashOnDeliveryForm />
      )}
    </>
  );
};

export default React.memo(PaymentForm);
