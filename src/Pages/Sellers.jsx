import React from "react";
import Para from "../Components/Para";
import Products from "../Components/Products";
import Button from "../Components/Button";

const Sellers = () => {
  return (
    <div className="essentials">
      <div className="essentials-title">
        <span>best sellers</span>
        <div className="essentials-line"></div>
      </div>
      <div className="essentials-para">
        <Para />
        <Para />
      </div>
      <div className="essentials-cards">
        <Products />
      </div>
      <div className="essentials-button">
        <Button />
      </div>
    </div>
  );
};

export default Sellers;
