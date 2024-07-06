import React from "react";

const Button = ({ text, color, backgroundColor }) => {
  return (
    <div className="button" style={{ backgroundColor }}>
      <span className="button-text" style={{ color }}>
        {text || "Explore More"}
      </span>
    </div>
  );
};

export default Button;
