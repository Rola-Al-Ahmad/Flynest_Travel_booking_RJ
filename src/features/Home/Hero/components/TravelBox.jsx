import React, { useMemo } from "react";

import TravelInfo from "./TravelInfo";

const TravelBox = () => {
  const borderStyle = useMemo(
    () => ({ borderBottom: "1px solid rgba(248, 250, 252, 0.08)" }),
    []
  );

  const selectDestination = useMemo(
    () => [
      "Istanbul, Turkey",
      "Paris, France",
      "Tokyo, Japan",
      "Rome, Italy",
      "Cairo, Egypt",
    ],
    []
  );

  const tourTypes = useMemo(
    () => ["Pre-book Type", "Instant Booking", "Custom Package"],
    []
  );

  const travellerOptions = useMemo(() => ["1", "2", "3", "4", "4+"], []);

  //   const handleSearch = useCallback(() => {
  //     console.log("Search clicked!");
  //     if (onSearch) onSearch();
  //   }, [onSearch]);

  return (
    <div className="container w-100 travel-box p-4 bg-dark text-white rounded z-0">
      <div className="row align-items-center justify-content-between w-100 ">
        <TravelInfo
          label="Destination"
          iconClass="bi bi-geo-alt-fill"
          name="destination"
          options={selectDestination}
          borderStyle={borderStyle}
        />
        <TravelInfo
          label="Tour Type"
          iconClass="bi bi-airplane-fill"
          name="tourType"
          options={tourTypes}
          borderStyle={borderStyle}
        />
        <TravelInfo
          label="Date From"
          iconClass="bi bi-clock-fill"
          name="dateFrom"
          type="date"
          borderStyle={borderStyle}
        />
        <TravelInfo
          label="Travellers"
          iconClass="bi bi-person-fill"
          name="travellers"
          options={travellerOptions}
          borderStyle={borderStyle}
        />
        <div className="col-xl-2 col-12 mt-3 travel-info">
          <button
            className="travel-btn py-3 px-5 fs-6 btn btn-primary fw-semibold"
            style={{ backgroundColor: "#f26f55", border: "none" }}
            // onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(TravelBox);
