import React from "react";

const InputField = ({ value, label, name, placeholder, type, ...props }) => (
  <div className="form-group">
    {label && (
      <label className="input-label" htmlFor="input-field">
        {label}
      </label>
    )}
    <input
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      {...props}
    />
  </div>
);

export default InputField;
