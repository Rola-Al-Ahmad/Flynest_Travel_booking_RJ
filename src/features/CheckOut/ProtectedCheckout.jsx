import React, { useEffect } from "react";
import useCartContext from "../Cart/hooks/useCartContext";
import { Outlet, useNavigate } from "react-router";

const ProtectedCheckout = () => {
  const { cartItems } = useCartContext();
  const navigate = useNavigate();
  useEffect(() => {
    if (cartItems.length === 0) {
      navigate("/cart", { replace: true });
    }
  }, [cartItems, navigate]);

  return <Outlet />;
};

export default React.memo(ProtectedCheckout);
