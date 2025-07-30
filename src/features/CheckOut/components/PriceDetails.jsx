import React, { useMemo } from "react";
import useBookingContext from "../../Cart/hooks/useBookingContext";

const PriceDetails = ({ location }) => {
  const { selectedTour, TourPrices, personalDetails } = useBookingContext();
  const isOnPaymentPage = location.pathname === "/cart/payment";
  const priceDetails = useMemo(() => {
    const basePrices =
      isOnPaymentPage && selectedTour
        ? [
            { label: "Tour Price", value: selectedTour.price },
            { label: "Tour Guide", value: selectedTour.guidePrice },
            { label: "Dinner", value: selectedTour.dinnerPrice },
            {
              label: "Adults",
              value: personalDetails?.adults || 0,
              isNumberOnly: true,
            },
            {
              label: "Children",
              value: personalDetails?.child || 0,
              isNumberOnly: true,
            },
          ]
        : [];

    const totals = [
      { label: "Sub Total", value: TourPrices?.tourSubTotal || 0 },
      { label: "VAT (5%)", value: TourPrices?.Tax || 0 },
      { label: "Total", value: TourPrices?.tourTotal || 0, highlight: true },
    ];

    return [...basePrices, ...totals];
  }, [isOnPaymentPage, selectedTour, personalDetails, TourPrices]);

  // Filter out adults and child fields if selectedTour.type is 'tours'
  const filteredPriceDetails =
    selectedTour?.type !== "tours"
      ? priceDetails.filter(
          (f) => f.label !== "Adults" && f.label !== "Children"
        )
      : priceDetails;
  return (
    <div className="p-3 rounded mb-3 border border-secondary text-white">
      {filteredPriceDetails.map(({ label, value, isNumberOnly, highlight }) => (
        <p key={label} className={highlight ? "fw-bold fs-5" : ""}>
          {label}
          <span className={`float-end ${highlight ? "text-success" : ""}`}>
            {isNumberOnly ? value : `$${value.toFixed(2)}`}
          </span>
        </p>
      ))}
      {isOnPaymentPage && <hr className="border-secondary" />}
    </div>
  );
};

export default React.memo(PriceDetails);
