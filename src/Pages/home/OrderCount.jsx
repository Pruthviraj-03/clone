import React from "react";
import order from "../../assets/Images/orderCount-Photoroom.png";
import Para from "../../Components/Para";

const OrderCount = () => {
  return (
    <div className="order">
      <div className="order-img">
        <img className="" src={order} alt="arrivals" />
      </div>
      <span className="order-title">every order counts</span>
      <div className="order-para">
        <Para color="#ffffff" />
        <Para color="#ffffff" />
      </div>
    </div>
  );
};

export default OrderCount;
