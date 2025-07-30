import React from "react";

const ExploreTab = ({ item, activeIndex, onTabClick, index }) => {
  return (
    <div
      className={`explore-tab mb-4 ${activeIndex === index ? "active" : ""}`}
      onClick={onTabClick}
      style={{ cursor: "pointer" }}
    >
      <h3>
        <img
          src={item.img}
          alt={`${item.title} img`}
          className="img-fluid me-3"
        />
        {item.title}
      </h3>
    </div>
  );
};

export default React.memo(ExploreTab);
