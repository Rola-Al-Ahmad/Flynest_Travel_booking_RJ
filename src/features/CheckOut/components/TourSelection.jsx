import React from "react";
import useCartContext from "../../Cart/hooks/useCartContext";

import { useTourSelection } from "../hooks/useTouSelection";
import InputField from "../../../shared/components/atoms/InputField";

const TourSelection = () => {
  const {
    checkInDate,
    checkOutDate,
    selectedTour,
    selectedTourOnChange,
    checkInDateOnChange,
    checkOutDateOnChange,
  } = useTourSelection();

  const { cartItems } = useCartContext();

  const inputGroup = [
    {
      text: "Tour Place",
      name: "tourSelection",
      id: "tourSelection",
      select: true,
      icon: "ri-map-pin-line",
      onChange: (e) => selectedTourOnChange(e),
    },
    {
      type: "date",
      text: "Check In",
      name: "checkInDate",
      id: "checkInDate",
      placeholder: "Check In Date",
      value: checkInDate,
      icon: "ri-calendar-check-line",
      onChange: (e) => checkInDateOnChange(e),
    },
    {
      type: "date",
      text: "Check Out",
      name: "checkOutDate",
      id: "checkOutDate",
      placeholder: "Check Out Date",
      value: checkOutDate,
      icon: "ri-calendar-check-line",
      min: checkInDate,
      onChange: (e) => checkOutDateOnChange(e),
    },
  ];
  return (
    <>
      <h5 className="text-white text-center mb-3">Tour Selection</h5>

      {inputGroup.map((input, index) => (
        <div className="mb-3" key={index}>
          <label className="form-label text-white">{input.text}</label>
          <div className="input-group">
            <i
              className={`${input.icon} input-group-text bg-transparent border-0 text-warning`}
            ></i>
            {input.select ? (
              <select
                name={input.name}
                className="form-control bg-transparent text-white"
                onChange={input.onChange}
                value={`${selectedTour.id}-${selectedTour.type}`}
              >
                {cartItems.map((item, index) => (
                  <option
                    key={index}
                    value={`${item.id}-${item.type}`}
                    className="bg-dark"
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            ) : (
              <InputField {...input} />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default React.memo(TourSelection);
