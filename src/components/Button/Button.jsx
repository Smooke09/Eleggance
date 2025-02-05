import React, { Children } from "react";
import "./Button.scss";

const Button = ({ type, className, onChange, onClick, children }) => {
  return (
    <button
      type={type}
      className={className}
      onChange={onChange}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
