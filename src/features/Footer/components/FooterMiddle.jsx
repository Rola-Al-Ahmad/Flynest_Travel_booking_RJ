import React from "react";
import { Link } from "react-router";
import Newsletter from "./Newsletter";

const FooterMiddle = () => {
  return (
    <div className="footer-middle mt-5 px-4 py-4 py-md-5">
      <div className="row align-items-center">
        <div className="col-lg-8">
          <h2 className="navbar-brand text-white fs-2 text-uppercase">
            Fly<span style={{ color: "#f26f55" }}>n</span>est<span></span>
          </h2>
          <p className="small mt-2 w-50">
            Travel is a transformative experience that can open the door to new
            horizons, broaden horizons, and create lasting memories that last a
            lifetime.
          </p>
          <div className="d-flex flex-wrap gap-3 mt-3">
            {["Terms of Use", "Privacy & Cookies", "How the Site Works"].map(
              (item, index) => (
                <Link to="/" key={index} className="footer-link">
                  {" "}
                  {item}
                </Link>
              )
            )}
          </div>
        </div>

        <Newsletter />
      </div>
    </div>
  );
};

export default React.memo(FooterMiddle);
