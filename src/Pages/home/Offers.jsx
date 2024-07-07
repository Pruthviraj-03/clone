import React from "react";
import Button from "../../Components/Button";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-title">
        <span className="offers-title1">do not miss out</span>
        <span className="offers-title2">on offers</span>
      </div>
      <div className="offers-para">
        <p className="offers-para1">
          Sign up now and be the first to know about exclusive offers,
        </p>
        <p className="offers-para2">latest fashion news and style tips!</p>
      </div>
      <div className="subscribe-now">
        <div className="subscibe-container">
          <input type="text" placeholder="Enter Your Email Address"></input>
          <Button text="subscribe now" textTransform="capitalize" />
        </div>
        <span className="privacy">
          We respect your privacy. Unsubscribe anytime.
        </span>
      </div>
    </div>
  );
};

export default Offers;
