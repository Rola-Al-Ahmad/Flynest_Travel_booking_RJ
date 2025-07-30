import React from "react";
import useBookingContext from "../../Cart/hooks/useBookingContext";
import { useNavigate } from "react-router";

const GetInvoice = ({ handleDownloadInvoice }) => {
  const { onSubmit, tourData } = useBookingContext();
  const navigate = useNavigate();
  const handleSubmit = () => {
    onSubmit(tourData, navigate);
  };

  return (
    <div className="col-lg-4">
      <div className="get-invoice text-white border border-secondary">
        <h5 className="text-white mb-3 text-capitalize">get your invoice</h5>
        <p className="small text-light">
          Click the button below to generate a PDF invoice with all your booking
          details. You can download or print this invoice at any time.
        </p>
        <ul className="list-unstyled small text-light my-3 mb-4">
          <li>
            <i className="ri-phone-line me-2 text-warning"></i>
            (+961) 712 34567
          </li>
          <li>
            <i className="ri-mail-line me-2 text-warning"></i>
            example@example.com
          </li>
        </ul>

        <button
          className="btn btn-warning w-100"
          onClick={() => {
            handleDownloadInvoice();
            handleSubmit();
          }}
        >
          Get Your Invoice
        </button>
      </div>
    </div>
  );
};

export default React.memo(GetInvoice);
