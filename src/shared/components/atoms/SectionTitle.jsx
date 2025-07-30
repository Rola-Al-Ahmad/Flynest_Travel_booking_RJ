import React from "react";

const SectionTitle = ({ title, subtitle, className }) => {
  return (
    <div className="container">
      <div className="row text-center mb-5">
        <div className={`section-title ${className}`}>
          <p className="text-uppercase">{title}</p>
          <h2 className="text-capitalize">{subtitle}</h2>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SectionTitle);
