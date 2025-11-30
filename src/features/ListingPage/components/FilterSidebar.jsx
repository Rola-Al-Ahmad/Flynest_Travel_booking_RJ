import React from "react";
import toursData from "../../../Data/Tours";
import hotelsData from "../../../Data/Hotel";
import transportsData from "../../../Data/Transport";
import resturantsData from "../../../Data/Restaurant";

// Utility function to get unique values from toursData
const getUnique = (arr, key) => {
  return [...new Set(arr.map((item) => item[key]))];
};

const FilterSidebar = ({ type }) => {
  const data =
    type === "tours"
      ? toursData
      : type === "hotels"
      ? hotelsData
      : type === "transports"
      ? transportsData
      : resturantsData;
  // Get unique values for each field
  const uniqueDestinations = getUnique(data, "location");
  const uniqueTourTypes = getUnique(toursData, "tag");

  const fieldsetData = [
    {
      name: "destination",
      label: "Destination",
      icon: "ri-map-pin-line",
      options: [
        { value: "all", label: "Select Destination" },
        ...uniqueDestinations.map((location) => ({
          value: location,
          label: location,
        })),
      ],
    },
    {
      name: "Tour Type",
      label: "Tour Type",
      icon: "ri-flight-takeoff-line",
      options: [
        { value: "all", label: "Select Tour Type" },
        ...uniqueTourTypes.map((tag) => ({ value: tag, label: tag })),
      ],
    },
    {
      name: "date",
      label: "Date From",
      type: "date",
      icon: "ri-calendar-event-line",
    },
    {
      name: "guests",
      label: "Guests",
      icon: "ri-user-smile-line",
      options: [
        { value: "all", label: "Guests" },
        { value: "1", label: "1" },
        { value: "2", label: "2" },
        { value: "3", label: "3" },
        { value: "4", label: "4" },
        { value: "5+", label: "5+" },
      ],
    },
    {
      name: "rating",
      label: "Rating",
      icon: "ri-star-smile-line",
      type: "star",
    },
  ];
  return (
    <div className="filter-sidebar shadow-sm">
      <h5 className="fw-bold mb-4 d-flex align-items-center">
        <i className="ri-filter-3-fill me-2 text-secondary"></i>Advanced Filter
      </h5>
      {fieldsetData.map((fieldset, index) => (
        <fieldset key={index} className="filter-section">
          <legend className="mb-3">
            <i className={`${fieldset.icon} me-2`}></i> {fieldset.label}
          </legend>
          {fieldset.type === "date" ? (
            <input
              type="date"
              name={fieldset.name}
              id={fieldset.name}
              className="form-control text-white border-secondary"
            />
          ) : fieldset.type === "star" ? (
            <div className="d-flex flex-wrap gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="rating-badge">
                  <i className="ri-star-fill text-warning me-1"></i> {star}
                </span>
              ))}
            </div>
          ) : (
            <select
              name={fieldset.name}
              id={fieldset.name}
              className="form-select text-white border-secondary"
            >
              {fieldset.options.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
              +
            </select>
          )}
        </fieldset>
      ))}
    </div>
  );
};

export default React.memo(FilterSidebar);
