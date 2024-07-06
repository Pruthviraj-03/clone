import React from "react";
import Home1 from "../Images/Home1.png";
import Home2 from "../Images/Home2.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home-one">
        <img className="" src={Home1} alt="home1" />
        <div className="home-box">
          <span>women</span>
        </div>
      </div>
      <div className="home-two">
        <img className="" src={Home2} alt="home2" />
        <div className="home-box">
          <span>men</span>
        </div>
      </div>
      <ul className="home-navlist">
        <li>new</li>
        <li>women</li>
        <li>men</li>
        <li>home</li>
        <li>sale</li>
      </ul>
    </div>
  );
};

export default Home;
