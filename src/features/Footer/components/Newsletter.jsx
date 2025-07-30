import React from "react";

const Newsletter = () => {
  return (
    <div className="col-lg-4">
      <h6 className="text-white mb-3 fw-bold">Subscribe to our newsletter</h6>
      <form className="position-relative">
        <input
          type="email"
          className="form-control"
          placeholder="Enter Your Email"
        />
        <button
          type="submit"
          className="btn btn-custom"
        >
          <i className="ri-send-plane-line text-white"></i>
        </button>
      </form>
    </div>
  );
};

export default React.memo(Newsletter);
