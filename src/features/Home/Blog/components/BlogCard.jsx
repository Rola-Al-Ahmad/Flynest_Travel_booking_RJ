import React, { useMemo } from "react";

import user1 from "../../../../assets/user-1.jpeg";
import user2 from "../../../../assets/user-2.png";
import user3 from "../../../../assets/user-3.png";
import user4 from "../../../../assets/user-4.jpeg";

const BlogCard = ({ newsImg, newsSpan, cardTitle, cardDescription }) => {
  const userImgs = useMemo(() => [user1, user2, user3, user4], []);

  //memoize to avoid re-rendering unless the list changes.
  const renderedUsers = useMemo(
    () =>
      userImgs.map((user, index) => (
        <img key={index} src={user} alt={`user-img-${index}`} />
      )),
    [userImgs]
  );
  return (
    <div className="col-lg-4">
      <div className="blog-card">
        <div className="blog-img">
          <img src={newsImg} alt="" className="card-img-top" />
        </div>
        <div className="blog-card-body">
          <h6 className="mb-2">{cardTitle}</h6>
          <h5 className="card-title text-white">{cardDescription}</h5>
          <div className="d-flex align-items-center justify-content-between my-4">
            <div className="authors d-flex">{renderedUsers}</div>
            <span>{newsSpan}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(BlogCard);
