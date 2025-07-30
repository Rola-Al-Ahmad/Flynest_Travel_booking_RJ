import React, { useMemo } from "react";

import aboutBanner from "../../../../assets/about-banner-three.png";

const AboutBanner = () => {
  const stats = useMemo(
    () => [
      {
        id: 1,
        count: "150K",
        title: "Happy Travellers",
      },
      {
        id: 2,
        count: "95.7%",
        title: "Satisfaction Rate",
      },
      {
        id: 3,
        count: "5000+",
        title: "Tour completed",
      },
    ],
    []
  );

  const renderedStats = useMemo(
    () =>
      stats.map((stat) => (
        <div className="col-md-4 mb-4" key={stat.id}>
          <h4>{stat.count}</h4>
          <span className="text-capitalize">{stat.title}</span>
        </div>
      )),
    [stats]
  );

  return (
    <>
      <div className="about-img">
        <img
          src={aboutBanner}
          alt="about-banner"
          className="img-fluid rounded-4"
        />
      </div>
      <div className="row stats-box mt-5 text-center">{renderedStats}</div>
    </>
  );
};

export default React.memo(AboutBanner);
