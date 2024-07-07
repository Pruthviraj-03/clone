import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faGift,
  faBoxOpen,
  faSearch,
  faBars,
  faFemale,
  faMale,
  faSignInAlt,
  faQuestionCircle,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = (event) => {
    if (isDrawerOpen && !event.target.closest(".mobile-menu")) {
      setIsDrawerOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDrawer);
    return () => {
      document.removeEventListener("click", closeDrawer);
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);
  return (
    <>
      {!isMobile && (
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
      )}

      {isMobile && (
        <>
          <div class="mobile-menu">
            <div class="menu-header">
              <span class="menu-title-text">house of origin</span>
              <FontAwesomeIcon
                className="drawer"
                icon={faBars}
                onClick={toggleDrawer}
              />
            </div>

            <div class="search-bar">
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
              <input class="search-input" placeholder="SEARCH" type="text" />
            </div>

            {isDrawerOpen && (
              <div className="drawer-list">
                <li onClick={toggleDrawer}>
                  <FontAwesomeIcon icon={faSignInAlt} /> login
                </li>
                <li onClick={toggleDrawer}>
                  <FontAwesomeIcon icon={faQuestionCircle} /> help
                </li>
                <li onClick={toggleDrawer}>
                  <FontAwesomeIcon icon={faShoppingBag} /> shopping bag (0)
                </li>
              </div>
            )}
          </div>

          <div class="bottom-navigation">
            <ul class="bottom-nav-list">
              <li class="bottom-nav-item">
                <FontAwesomeIcon icon={faGift} />
                new
              </li>
              <li class="bottom-nav-item">
                <FontAwesomeIcon icon={faFemale} />
                women
              </li>
              <li class="bottom-nav-item">
                <FontAwesomeIcon icon={faMale} />
                men
              </li>
              <li class="bottom-nav-item">
                <FontAwesomeIcon icon={faHome} />
                home
              </li>
              <li class="bottom-nav-item">
                <FontAwesomeIcon icon={faBoxOpen} />
                sale
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
