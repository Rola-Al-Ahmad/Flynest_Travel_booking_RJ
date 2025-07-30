import React from "react";
import { Link } from "react-router";
import PageBreadcrumb from "../../../shared/components/PageBreadcrumb";

const CheckoutHeader = () => {
  return (
    <PageBreadcrumb className="text-center mb-5">
      <PageBreadcrumb.Title>Checkout</PageBreadcrumb.Title>
      <PageBreadcrumb.Breadcrumb>
        {" "}
        <Link to="/">Home</Link> -&gt; <Link to="/cart">Cart</Link> -&gt;
        Checkout
      </PageBreadcrumb.Breadcrumb>
      <PageBreadcrumb.Steps />
    </PageBreadcrumb>
  );
};

export default React.memo(CheckoutHeader);
