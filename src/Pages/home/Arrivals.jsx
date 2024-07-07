import React from "react";
import arrivals from "../../assets/Images/arrivals-Photoroom.png";
import Para from "../../Components/Para";
import Button from "../../Components/Button";

const Arrivals = () => {
  return (
    <div className="arrivals">
      <div className="arrivals-img">
        <img className="" src={arrivals} alt="arrivals" />
      </div>
      <span className="arrivals-title">new arrivals</span>
      <div className="arrivals-para">
        <Para color="#ffffff" />
      </div>
      <div className="arrivals-button">
        <Button color="#2e3137" backgroundColor="#ffffff" />
      </div>
    </div>
  );
};

export default Arrivals;
