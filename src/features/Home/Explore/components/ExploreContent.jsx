import React from "react";

const ExploreContent = ({ title, desc, img, details }) => {
  return (
    <div className="col-lg-6 explore-content text-white mt-lg-0 mt-4">
      <h2 className="pb-3">{title}</h2>
      <p className="mb-4">{desc}</p>
      {details.map((item, index) => (
        <span key={index}>
          <p className="m-0 mb-2 ps-2">{item}</p>
        </span>
      ))}

      <div className="explore-img">
        <img src={img} alt="explore-img" className="img-fluid rounded-4 mt-4" />
      </div>
    </div>
  );
};

export default React.memo(ExploreContent);
