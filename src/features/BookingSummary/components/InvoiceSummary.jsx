import React, { useMemo } from "react";
import useBookingContext from "../../Cart/hooks/useBookingContext";

const InvoiceSummary = ({
  location,
  name,
  date,
  adults,
  children,
  tourGuide,
  dinner,
  transport,
  restaurant,
  hotel,
  tax,
  subTotal,
  total,
}) => {
  const { selectedTour } = useBookingContext();
  const bookingDetails = useMemo(() => {
    const rows = [
      ["Tour Place", location],
      ["Tour Name", name],
      ["Date", date],
      ["Adults", adults],
      ["Children", children],
      ["Tour Guide", `$${tourGuide.toFixed(2)}`],
      ["Dinner", `$${dinner.toFixed(2)}`],
    ];

    if (transport?.title)
      rows.push([
        "Transport",
        `${transport.title} - $${transport.cost.toFixed(2)}`,
      ]);
    if (restaurant?.title)
      rows.push([
        "Restaurant",
        `${restaurant.title} - $${restaurant.cost.toFixed(2)}`,
      ]);
    if (hotel?.title)
      rows.push(["Hotel", `${hotel.title} - $${hotel.cost.toFixed(2)}`]);

    rows.push(["VAT Tax", `$${tax.toFixed(2)}`]);
    rows.push(["Sub Total", `$${subTotal.toFixed(2)}`]);

    return rows;
  }, [
    location,
    name,
    date,
    adults,
    children,
    tourGuide,
    dinner,
    transport,
    restaurant,
    hotel,
    tax,
    subTotal,
  ]);

  const filteredBookingDetails =
    selectedTour?.type !== "tours"
      ? bookingDetails.filter((f) => f[0] !== "Adults" && f[0] !== "Children")
      : bookingDetails;
  return (
    <div className="col-lg-8 mb-4 mb-lg-0">
      <h3 className="text-warning mb-3 text-capitalize">Booking Complete</h3>
      <p className="text-light mb-4" style={{ maxWidth: "600px" }}>
        Thank you for booking with <strong>Flynest</strong>! Your trip to
        <strong> {location}</strong> has been confirmed. Below is a summary of
        your booking details
      </p>
      <div className="invoice-summary">
        <h5 className="text-white mb-3">Booking Summary</h5>
        {filteredBookingDetails.map(([label, value]) => (
          <div
            key={label}
            className="d-flex justify-content-between py-2 border-bottom border-light"
          >
            <span>{label}</span>
            <span>{value}</span>
          </div>
        ))}
        <div className="d-flex justify-content-between py-3 border-top mt-3 fs-5">
          <strong>Total</strong>
          <strong>${total.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  );
};

export default React.memo(InvoiceSummary);
