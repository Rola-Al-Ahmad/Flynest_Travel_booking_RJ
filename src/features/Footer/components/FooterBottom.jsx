import React from "react";

const FooterBottom = () => {
  return (
    <div className="footer-bottom text-center border-top pt-3 pb-3">
      <div className="row">
        <div className="col-md-6 text-start">
          <h6 className="mb-0 small">
            &copy; 2025 Flynest, All rights reserved
          </h6>
        </div>
        <div className="col-md-6 text-end">
          <h6 className="mb-0 small">
            Powered by @<span style={{ color: "#f26f55" }}>Flynest</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FooterBottom);
