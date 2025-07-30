import React, { useMemo } from "react";

const TstItem = ({ tst }) => {
  const stars = useMemo(() => {
    return [...Array(tst.rating)].map((_, i) => (
      <i key={i} className="ri-star-fill ps-1"></i>
    ));
  }, [tst.rating]);

  return (
    <div className="tst-item">
      <div className="tst-user d-flex align-items-center gap-2">
        <img
          src={tst.image}
          alt="tst-user"
          className="img-fluid rounded-circle border"
          width={50}
          height={50}
        />
        <p className="mb-0 fw-bold text-white fs-6 d-flex flex-column">
          <span>{tst.name}</span>
          <span className="fw-normal">{tst.role}</span>
        </p>
      </div>
      <div className="tst-rating mt-4 mb-4">{stars}</div>
      <p className="fw-semibold fs-5 mb-4">{tst.content}</p>
      <div className="tst-footer d-flex align-items-center justify-content-between">
        <a
          href="#"
          className="tst-link text-white text-decoration-none fw-semibold text-uppercase fs-4 m-0"
        >
          Fly<span style={{ color: "rgb(242, 111, 85)" }}>n</span>
          est
        </a>
        <p className="mb-0"> {tst.date}</p>
      </div>
    </div>
  );
};

export default React.memo(TstItem);
