import React from "react";

const Button = ({ text }) => {
  return (
    <div className="button">
      <span className="button-text">{text || "Explore More"}</span>
    </div>
  );
};

export default Button;
