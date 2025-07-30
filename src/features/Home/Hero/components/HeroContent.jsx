import React, { useMemo } from "react";

import user1 from "../../../../assets/user-1.jpeg";
import user2 from "../../../../assets/user-2.png";
import user3 from "../../../../assets/user-3.png";
import user4 from "../../../../assets/user-4.jpeg";

import hand from "../../../../assets/hand.png";

const HeroContent = () => {
  const userImgs = useMemo(() => [user1, user2, user3, user4], []);

  const renderedUsers = useMemo(
    () => (
      <div className="users">
        {userImgs.map((user, index) => (
          <img
            key={index}
            src={user}
            alt={`user-img-${index}`}
            className="user-img"
          />
        ))}
        <span>5K +</span>
      </div>
    ),
    [userImgs]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-6">
          <h1 className="hero-title">
            Plan tours to dream <br />
            locations in just a click!
          </h1>
          <p className="hero-description">
            Whether it’s a tropical escape or a mountain retreat, we make
            planning easy and fun!
          </p>
          <div className="d-flex align-items-center">
            {renderedUsers}
            <p className="m-0 px-3 fs-6 fw-semibold">Happy Customers</p>
            <img
              src={hand}
              alt="hand-img"
              className="img-fluid"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(HeroContent);
