import React from "react";
import CartPageHeader from "../features/Cart/components/CartPageHeader";

import { Outlet } from "react-router";

const CartLayout = () => {
  return (
    <div className="cartpage-wrapper">
      <div className="container cartpage-container">
        <CartPageHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default React.memo(CartLayout);
