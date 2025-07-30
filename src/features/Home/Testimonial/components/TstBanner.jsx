import React from "react";

const TstBanner = ({ tstBanner }) => {
  return (
    <div className="col-md-6">
      <div className="tst-banner position-relative rounded-5 overflow-hidden">
        <img src={tstBanner} alt="tst-banner-img" className="img-fluid" />
        <span className="bi bi-play-fill"></span>
      </div>
    </div>
  );
};

export default React.memo(TstBanner);
