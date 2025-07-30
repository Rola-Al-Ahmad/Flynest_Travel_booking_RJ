import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import TopHeader from "./TopHeader";

const NavHeader = ({ toggleMenu }) => {
  const borderStyle = useMemo(
    () => ({ borderBottom: "1px solid rgba(248, 250, 252, 0.08)" }),
    []
  );

  const phoneBgStyle = useMemo(() => ({ backgroundColor: "#222839" }), []);

  return (
    <div className="container d-flex justify-content-center align-items-center nav-header">
      <div className="row w-100 py-3" style={borderStyle}>
        <div className="col-lg-12">
          <div className="w-100 top-header d-flex justify-content-between align-items-center">
            <div className="call d-none d-lg-flex align-items-center">
              <span
                className="bi bi-telephone me-3"
                style={phoneBgStyle}
              ></span>
              <div className="call-text">
                <p className="m-0">Call Anytime</p>
                <h4 className="fs-6 m-0 fw-semibold">(+961) 71 000 000</h4>
              </div>
            </div>
            <div className="logo">
              <h1 className="p-0 m-0 fw-semibold text-uppercase">
                <Link
                  to="/"
                  className="text-white text-decoration-none navbar-brand fs-2 m-0"
                >
                  Fly<span style={{ color: "#f26f55" }}>n</span>est
                </Link>
              </h1>
            </div>
            <TopHeader />
            <button
              id="navbar-toggler"
              className="navbar-toggler nav-toggle d-block d-lg-none box-shadow-none"
              type="button"
              aria-label="Toggle navigation"
              onClick={(e) => {
                e.stopPropagation();
                toggleMenu();
              }}
            >
              <span className="bi bi-list fs-1 text-white"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(NavHeader);
