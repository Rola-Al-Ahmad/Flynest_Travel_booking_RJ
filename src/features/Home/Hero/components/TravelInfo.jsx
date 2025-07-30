import React, { useMemo } from "react";

const TravelInfo = ({
  label,
  iconClass,
  name,
  options = [],
  type = "select",
  borderStyle = {},
  className = "",
}) => {
  const renderedOptions = useMemo(() => {
    return options.map((option, index) => (
      <option key={index} value={option.value || option}>
        {option.label || option}
      </option>
    ));
  }, [options]);
  return (
    <div
      className={`col-xl-2 col-lg-4 col-sm-6 my-2 travel-info ${className}`}
      style={borderStyle}
    >
      <label htmlFor={name} className="form-label fw-semibold fs-5 text-white">
        <i className={`${iconClass} me-2 fs-6`}></i> {label}
      </label>

      {type === "select" ? (
        <select
          name={name}
          className="form-select form-control bg-dark text-white"
        >
          {renderedOptions}
        </select>
      ) : (
        <input
          type="date"
          name={name}
          className="form-control bg-dark text-white w-100"
        />
      )}
    </div>
  );
};

export default React.memo(TravelInfo);
