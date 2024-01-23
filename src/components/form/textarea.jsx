import React from "react";

const TextArea = ({ value, label, name, placeholder, children }) => (
  <div className="form-group">
    <div>
      {label && (
        <label className="input-label" htmlFor="input-field">
          {label}
        </label>
      )}
    </div>
    <textarea
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
    >
      {children}
    </textarea>
  </div>
);

export default TextArea;
