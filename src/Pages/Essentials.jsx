import React from "react";
import Para from "../Components/Para";
import Products from "../Components/Products";
import Button from "../Components/Button";

const Essentials = () => {
  return (
    <div className="essentials">
      <div className="essentials-title">
        <span>essentials</span>
        <div className="essentials-line"></div>
      </div>
      <div className="essentials-para">
        <Para />
        <Para />
      </div>
      <div className="essentials-cards">
        <Products />
        <Products />
      </div>
      <div className="essentials-button">
        <Button />
      </div>
    </div>
  );
};

export default Essentials;
