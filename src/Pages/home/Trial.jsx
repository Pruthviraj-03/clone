import React from "react";
import trial from "../../Images/trialroom-Photoroom.png";
import Para from "../../Components/Para";
import Button from "../../Components/Button";

const Trial = () => {
  return (
    <div className="trial">
      <div className="trial-img">
        <img className="" src={trial} alt="arrivals" />
      </div>
      <span className="trial-title1">personalised</span>
      <span className="trial-title2">trial room</span>
      <div className="trial-para">
        <Para />
      </div>
      <div className="trial-button">
        <Button text="try On" />
      </div>
    </div>
  );
};

export default Trial;
