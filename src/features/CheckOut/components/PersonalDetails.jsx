import React from "react";

import InputField from "../../../shared/components/atoms/InputField";

const PersonalDetails = ({ formik, selectedTour }) => {
  const fields = [
    { name: "name", placeholder: "Full Name" },
    { name: "email", type: "email", placeholder: "Email Address" },
    {
      name: "phone",
      type: "tel",
      placeholder: "Phone Number",
      onKeyPress: (e) => !/[0-9]/.test(e.key) && e.preventDefault(),
    },
    {
      name: "altphone",
      type: "tel",
      placeholder: "Alternate Phone Number",
      onKeyPress: (e) => !/[0-9]/.test(e.key) && e.preventDefault(),
    },
    { name: "country", placeholder: "Country" },
    { name: "city", placeholder: "City" },
    { name: "state", placeholder: "State" },
    { name: "zip", placeholder: "Zip Code" },
    { name: "adults", type: "number", placeholder: "Adults", min: 1 },
    { name: "child", type: "number", placeholder: "Children", min: 0 },
  ];

  // Filter out adults and child fields if selectedTour.type is 'tours'
  const filteredFields =
    selectedTour?.type !== "tours"
      ? fields.filter((f) => f.name !== "adults" && f.name !== "child")
      : fields;

  return (
    <>
      <h5 className="mb-4 text-center">Personal Details</h5>

      <form onSubmit={formik.handleSubmit}>
        <div className="row g-3">
          {filteredFields.map(
            ({ name, placeholder, type = "text", min, onKeyPress }) => (
              <div className="col-md-6" key={name}>
                <InputField
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  min={min}
                  value={formik.values[name]}
                  onChange={formik.handleChange}
                  onKeyPress={onKeyPress}
                  onBlur={formik.handleBlur}
                />
                {formik.touched[name] && formik.errors[name] && (
                  <small className="text-danger">{formik.errors[name]}</small>
                )}
              </div>
            )
          )}

          {/* Form-level error for adult+child mismatch */}
          {typeof formik.errors === "string" && (
            <div className="col-12">
              <small className="text-danger">{formik.errors}</small>
            </div>
          )}

          {selectedTour?.type === "tours" && (
            <p style={{ color: "#c97463", fontSize: "14px" }} className="mb-0">
              Tip: Make sure the number of adults and child adds up to the total
              travelers for this tour (<strong>{selectedTour?.person}</strong>).
            </p>
          )}

          <div className="col-12 mt-3">
            <textarea
              name="notes"
              id="notes"
              rows="3"
              className="form-control bg-transparent"
              placeholder="Additional Notes (Optional)"
              onChange={formik.handleChange}
            ></textarea>
          </div>
        </div>
      </form>
    </>
  );
};

export default React.memo(PersonalDetails);
