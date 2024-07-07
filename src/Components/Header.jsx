import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-one">
        <input type="text" placeholder="SEARCH"></input>
      </div>
      <div className="header-two">
        <ul className="header-nav-list">
          <li>login</li>
          <li>help</li>
          <li>shopping bag (0)</li>
        </ul>
      </div>
      <span className="center-span">house of origin</span>
    </div>
  );
};

export default Header;
