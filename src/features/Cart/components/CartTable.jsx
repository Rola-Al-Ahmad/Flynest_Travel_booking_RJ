import React from "react";
import useCartContext from "../hooks/useCartContext";
import useBookingContext from "../hooks/useBookingContext";
import FilterTable from "./FilterTable";

const CartTable = ({ selectedType, setSelectedType }) => {
  const { cartItems, removeFromCart, itemQuantity, filterCartItems } =
    useCartContext();

  const { findSelectedTourInBooking } = useBookingContext();

  const filteredItems = filterCartItems(selectedType);

  const items = selectedType === "all" ? cartItems : filteredItems;

  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover cart-table">
        <thead className="">
          <tr className="align-middle">
            <th className="d-flex align-items-center gap-3">
              <span>Package</span>{" "}
              <FilterTable
                selectedType={selectedType}
                setSelectedType={setSelectedType}
              />
            </th>
            <th>Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <React.Fragment key={`${item.id}-${item.type}`}>
                <tr className="align-middle">
                  <td className="d-flex align-items-center gap-3">
                    <img
                      src={item.image}
                      alt={`${item.name} --image`}
                      width={80}
                      height={80}
                      className="img-fluid cartpage-img"
                      onError={(e) => {
                        e.target.src = "/default-hotel.jpg";
                      }}
                    />
                    <div>
                      <strong>{item.name}</strong>
                      <br />
                      <small>
                        {item.person} {item.person > 1 ? "people" : "person"}
                      </small>
                      <br />
                      <small className="text-capitalize">{item.tag}</small>
                    </div>
                  </td>
                  <td>${(item.price * itemQuantity(item)).toFixed(2)}</td>
                  <td className="text-center">
                    <i
                      className="ri-delete-bin-line text-danger fs-5"
                      role="button"
                      aria-label="Remove item from cart"
                      title="Remove item from cart"
                      onClick={() => removeFromCart(item.id, item.type)}
                    ></i>
                  </td>
                </tr>
                {findSelectedTourInBooking(item.id, item.type) && (
                  <tr className="text-center package-booked">
                    <td
                      colSpan="4"
                      className="text-danger fw-semibold fs-6 text-uppercase"
                    >
                      This package is already booked
                    </td>
                  </tr>
                )}
              </React.Fragment>
            );
          })}
          {items.length === 0 && (
            <tr>
              <td
                colSpan={3}
                className="text-center fw-semibold text-capitalize py-4 text-muted"
              >
                Your cart has no {selectedType.toLowerCase()} packages
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default React.memo(CartTable);
