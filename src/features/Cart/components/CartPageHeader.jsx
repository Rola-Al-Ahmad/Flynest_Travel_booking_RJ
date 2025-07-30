import React from "react";
import PageBreadcrumb from "../../../shared/components/PageBreadcrumb";
import { useLocation } from "react-router";
import useCartContext from "../hooks/useCartContext";

const CartPageHeader = () => {
  let location = useLocation();

  const { cartItems } = useCartContext();

  return (
    <PageBreadcrumb>
      <PageBreadcrumb.Title location={location} />
      <PageBreadcrumb.Breadcrumb className="cart" location={location} />
      {cartItems.length > 0 && <PageBreadcrumb.Steps location={location} />}
    </PageBreadcrumb>
  );
};

export default React.memo(CartPageHeader);
