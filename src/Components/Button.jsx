import React from "react";

const Button = ({ text, color, backgroundColor, textTransform }) => {
  return (
    <div className="button" style={{ backgroundColor }}>
      <span className="button-text" style={{ color, textTransform }}>
        {text || "Explore More"}
      </span>
    </div>
  );
};

export default Button;
