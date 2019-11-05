import React from "react";

const Input = ({ label, value, onChange, placeholder = "", className }) => (
  <div className={["field u-mt10", className].join(" ")}>
    {label && <label className="label">{label}</label>}
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      type="text"
      className="input"
      placeholder={placeholder}
    />
  </div>
);

export default Input;
