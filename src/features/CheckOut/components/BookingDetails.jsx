import React, { useMemo } from "react";
import useBookingContext from "../../Cart/hooks/useBookingContext";

const BookingDetails = () => {
  const { checkInDate, checkOutDate, selectedTour, bookingInfo } =
    useBookingContext();
  const bookingDetails = useMemo(
    () => [
      {
        icon: "ri-calendar-line",
        label: "Check In",
        value: checkInDate || bookingInfo?.checkInDate,
      },
      {
        icon: "ri-calendar-line",
        label: "Check Out",
        value: checkOutDate,
      },
      {
        icon: "ri-map-pin-line",
        label: "Destination",
        value: selectedTour?.name,
      },
    ],
    [checkInDate, checkOutDate, selectedTour?.name, bookingInfo?.checkInDate]
  );
  return (
    <div className="d-flex justify-content-evenly gap-1 mb-3 flex-column">
      {bookingDetails.map(({ icon, label, value }) => (
        <p key={label} className="text-white mb-2">
          <i className={`${icon} me-2 text-warning`}></i>
          {label}: {value}
        </p>
      ))}
    </div>
  );
};

export default React.memo(BookingDetails);
