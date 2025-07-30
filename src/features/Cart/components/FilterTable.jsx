import React from "react";

const FilterTable = ({ selectedType, setSelectedType }) => {
  const typeOptions = {
    all: "All",
    tours: "Tours",
    hotels: "Hotels",
    transports: "Transports",
    restaurants: "Restaurants",
  };
  return (
    <fieldset className="filter-section mb-0 w-50">
      <select
        name="type"
        id="type"
        className="form-select text-white border-secondary"
        value={selectedType}
        onChange={(e) => setSelectedType(e.target.value)}
      >
        {Object.keys(typeOptions).map((type) => (
          <option key={type} value={type}>
            {typeOptions[type]}
          </option>
        ))}
      </select>
    </fieldset>
  );
};

export default FilterTable;
