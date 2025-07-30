import React, { useMemo, useRef } from "react";
import NavLink from "./NavLink";
import { Link } from "react-router";
import TopHeader from "./TopHeader";

const Nav = ({ isMenuOpen, handleClose }) => {
  const containerRef = useRef(null);

  const navLinks = useMemo(
    () => [
      { title: "Home", path: "/" },
      { title: "Tours", path: "/tours" },
      { title: "Hotels", path: "/hotels" },
      { title: "Transports", path: "/transports" },
      { title: "Restaurants", path: "/restaurants" },
      { title: "About", path: "/about" },
      { title: "News", path: "/news" },
      { title: "Contact", path: "/contact" },
    ],
    []
  );

  return (
    <div
      ref={containerRef}
      className={`container menu${isMenuOpen ? " menu-open" : ""}`}
      id="navtoggle"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="row py-0 py-lg-4 w-100 d-flex justify-content-center align-items-center"
        style={{ height: "100%" }}
      >
        <div
          className="d-flex align-items-center justify-content-center col-lg-9 col-xl-9"
          style={{ height: "100%" }}
        >
          <div
            className={`collapse navbar-collapse w-100 ${
              isMenuOpen ? "show" : ""
            }`}
            id="navtoggle"
            onClick={(e) => e.stopPropagation()}
          >
            <ul
              className="nav-menu list-unstyled m-0 d-flex flex-column flex-lg-row
            align-items-start align-items-lg-center gap-3 gap-lg-4 gap-xl-5"
            >
              {navLinks.map((link, index) => (
                <NavLink
                  key={index}
                  path={link.path}
                  title={link.title}
                  handleClose={handleClose}
                />
              ))}
            </ul>
          </div>
        </div>

        <div className="col-xl-3 d-block d-lg-none d-xl-block">
          <div className="nav-input-box w-100 d-none d-lg-flex align-items-center justify-content-start gap-2">
            <i className="bi bi-search"></i>
            <input
              type="text"
              name="nav-search"
              id="nav-search"
              className="form-control form-control-sm w-100"
              placeholder="Destination..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Nav);
