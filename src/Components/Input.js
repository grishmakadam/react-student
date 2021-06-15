import React from "react";

const Input = ({
  label,
  type,
  name,
  id,
  value,
  onChange,
  required,
  min,
  max,
  maxLength,
  disabled,
}) => {
  return (
    <div className="input1">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        min={min}
        max={max}
        maxLength={maxLength}
        disabled={disabled}
      />
    </div>
  );
};

export default Input;
