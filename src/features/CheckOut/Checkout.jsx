import React from "react";

import Form from "./components/Form";
import BookingSummary from "./components/BookingSummary";
import { useLocation, useNavigate } from "react-router-dom";
import { usePersonalDetailsForm } from "./hooks/usePersonalDetailsForm";

const Checkout = () => {
  let location = useLocation();

  const navigate = useNavigate();
  const isOnPaymentPage = location.pathname === "/cart/payment";

  const { formik, selectedTour } = usePersonalDetailsForm();

  const handleNext = async () => {
    // Only validate on the personal details page
    if (location.pathname === "/cart/checkout") {
      const valid = await formik
        .validateForm()
        .then((errors) => Object.keys(errors).length === 0);
      if (valid) {
        formik.handleSubmit();
        navigate("/cart/payment");
      } else {
        formik.setTouched({
          name: true,
          email: true,
          phone: true,
          altphone: true,
          country: true,
          city: true,
          state: true,
          zip: true,
          adults: true,
          child: true,
        });
      }
    } else if (isOnPaymentPage) {
      navigate("/cart/bookingSummary");
    }
  };

  return (
    <div className="row g-4 mt-4">
      <div className="col-lg-8">
        <Form location={location} formik={formik} selectedTour={selectedTour} />
      </div>
      <div className="col-lg-4">
        <BookingSummary handleNext={handleNext} />
      </div>
    </div>
  );
};

export default React.memo(Checkout);
