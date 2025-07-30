import React from "react";

const PayPalForm = () => {
  return (
    <div className="row g-3">
      <div className="col-12">
        <label htmlFor="paypalEmail" className="form-label">
          PayPal Email (optional)
        </label>
        <input
          type="email"
          className="form-control"
          id="paypalEmail"
          name="paypalEmail"
          placeholder="you@example.com"
        />
      </div>

      <div className="col-12">
        <small className="small">
          Make sure your PayPal email is correct if you want to receive a
          confirmation.
        </small>
      </div>
    </div>
  );
};

export default React.memo(PayPalForm);
