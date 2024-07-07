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
  const [isTablet, setIsTablet] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const closeDrawer = (e) => {
    if (isDrawerOpen) {
      if (
        !e.target.closest(".mobile-menu") &&
        (!isTablet || !e.target.closest(".tablet-menu"))
      ) {
        setIsDrawerOpen(false);
      }
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

  useEffect(() => {
    const checkScreenSize = () => {
      const isTablet = window.matchMedia(
        "(min-width: 768px) and (max-width: 991.98px)"
      ).matches;
      setIsTablet(isTablet);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleRefreshPage = () => {
    window.location.reload();
  };

  return (
    <>
      {!isMobile && !isTablet && (
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
              <span class="menu-title-text" onClick={handleRefreshPage}>
                house of origin
              </span>
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

      {isTablet && (
        <>
          <div class="tablet-menu">
            <div className="tablet-menu-compo">
              <div class="tablet-menu-header">
                <FontAwesomeIcon
                  className="drawer"
                  icon={faBars}
                  onClick={toggleDrawer}
                />
                <span
                  class="tablet-menu-title-text"
                  onClick={handleRefreshPage}
                >
                  house of origin
                </span>
              </div>

              <div class="tablet-search-bar">
                <FontAwesomeIcon
                  className="tablet-search-icon"
                  icon={faSearch}
                />
                <input
                  class="tablet-search-input"
                  placeholder="SEARCH"
                  type="text"
                />
              </div>

              <ul className="tablet-nav-list">
                <li>login</li>
                <li>help</li>
                <li>shopping bag (0)</li>
              </ul>
            </div>

            {isDrawerOpen && (
              <div className="drawer-list">
                <li onClick={toggleDrawer}>
                  <FontAwesomeIcon icon={faGift} />
                  new
                </li>
                <li onClick={toggleDrawer}>
                  <FontAwesomeIcon icon={faFemale} />
                  women
                </li>
                <li onClick={toggleDrawer}>
                  <FontAwesomeIcon icon={faMale} />
                  men
                </li>
                <li onClick={toggleDrawer}>
                  <FontAwesomeIcon icon={faHome} />
                  home
                </li>
                <li onClick={toggleDrawer}>
                  <FontAwesomeIcon icon={faBoxOpen} />
                  sale
                </li>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Header;
