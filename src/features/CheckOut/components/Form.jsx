import React from "react";
import PersonalDetails from "./PersonalDetails";
import TourSelection from "./TourSelection";

import PaymentDetails from "../../Payment/PaymentDetails";

const Form = ({ location, formik, selectedTour }) => {
  if (location.pathname === "/cart/checkout") {
    return (
      <div className="checkout-form rounded p-4 shadow bg-section-light">
        <TourSelection />

        <PersonalDetails formik={formik} selectedTour={selectedTour} />
      </div>
    );
  } else if (location.pathname === "/cart/payment") {
    return <PaymentDetails />;
  }
};

export default React.memo(Form);
