import React, { useMemo } from "react";
import { Link } from "react-router";

import useCartContext from "../../Cart/hooks/useCartContext";

const TopHeader = () => {
  const { cartItems } = useCartContext();
  const cartCount = useMemo(() => cartItems.length, [cartItems]);
  return (
    <div className="top-header-right d-flex align-items-center gap-4">
      <div className="lang d-flex align-items-center gap-2 fs-6">
        <span className="ri-global-line"></span>
        <p className="m-0">English</p>
      </div>
      <div className="divider gradient-divider"></div>
      <Link to="/cart" className="cartpage-cart-link position-relative">
        <i className="bi bi-cart text-white fs-5"></i>
        <span className="cart-count">{cartCount}</span>
      </Link>
      <button className="btn signup-btn btn-custom text-white rounded-5 px-4 py-2 fs-6 fw-semibold d-none d-lg-block">
        Sign Up
      </button>
    </div>
  );
};

export default React.memo(TopHeader);
