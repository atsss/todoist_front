import React from "react";

const Input = ({ label, value, options, onChange, className }) => (
  <div className={["field u-mt10", className].join(" ")}>
    {label && <label className="label">{label}</label>}
    <div className="select">
      <select value={value} onChange={e => onChange(e.target.value)}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default Input;
