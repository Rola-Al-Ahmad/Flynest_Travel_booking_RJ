import React from "react";

const InputField = ({
  type = "text",
  name,
  id,
  placeholder,
  onChange,
  value,
  min,
  onKeyPress,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      className="form-control bg-transparent"
      placeholder={placeholder}
      onChange={onChange}
      value={value || ""}
      min={min}
      onKeyPress={onKeyPress}
    />
  );
};

export default React.memo(InputField);
