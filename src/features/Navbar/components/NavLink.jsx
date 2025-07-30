import React from "react";

import { NavLink as Link } from "react-router-dom";

const NavLink = ({ path, title, handleClose }) => {
  return (
    <li className="nav-item position-relative">
      <Link className="nav-link" to={path} onClick={handleClose}>
        {title}
      </Link>
    </li>
  );
};

export default React.memo(NavLink);
