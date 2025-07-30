import React from "react";
import useCartContext from "../hooks/useCartContext";
import { useNavigate } from "react-router";

const CartPageSummary = ({ selectedType }) => {
  const { cartDetails } = useCartContext();

  const navigate = useNavigate();

  return (
    <div className="cartpage-summary text-light">
      <h5>
        Total {""}
        <span className="float-end text-success">
          ${cartDetails(selectedType).cartTotal.toFixed(2)}
        </span>
      </h5>

      <div className="border-top pt-2 mt-2">
        <p>
          SubTotal{" "}
          <span className="float-end">
            ${cartDetails(selectedType).cartSubTotal.toFixed(2)}
          </span>
        </p>
        <p>
          Vat{" "}
          <span className="float-end">
            ${cartDetails(selectedType).Tax.toFixed(2)}
          </span>
        </p>
        <hr />
        <h6>
          Grand Total{" "}
          <span className="float-end">
            ${cartDetails(selectedType).cartTotal.toFixed(2)}
          </span>
        </h6>
      </div>
      <button
        className="btn next-btn w-100 mt-3 fw-bold"
        onClick={() => navigate("/cart/checkout")}
      >
        Continue & Next
      </button>
      <div className="mt-3 small">
        <i className="bi bi-check-circle-fill me-1 text-success"></i>
        Free cancellation up to 24 hours in advance
      </div>
    </div>
  );
};

export default React.memo(CartPageSummary);
