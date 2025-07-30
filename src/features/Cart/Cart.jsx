import React, { useState } from "react";

import "./Cart.css";

import useCartContext from "./hooks/useCartContext";
import Empty from "./components/Empty";
import CartTable from "./components/CartTable";
import CartPageSummary from "./components/CartPageSummary";

const Cart = () => {
  const { cartItems } = useCartContext();

  const [selectedType, setSelectedType] = useState("all");

  return (
    <div className="row cartpage-content">
      {cartItems.length === 0 ? (
        <Empty />
      ) : (
        <>
          <div className="col-md-8 cartpage-cart">
            <h4 className="text-center mb-4">Your Cart Details</h4>
            <CartTable
              selectedType={selectedType}
              setSelectedType={setSelectedType}
            />
          </div>
          <div className="col-md-4 mt-4 mt-md-0">
            <CartPageSummary selectedType={selectedType} />
          </div>
        </>
      )}
    </div>
  );
};

export default React.memo(Cart);
