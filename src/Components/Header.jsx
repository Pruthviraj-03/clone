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
          <div className="mobile-menu">
            <div className="menu-header">
              <span className="menu-title-text" onClick={handleRefreshPage}>
                house of origin
              </span>
              <FontAwesomeIcon
                className="drawer"
                icon={faBars}
                onClick={toggleDrawer}
              />
            </div>

            <div className="search-bar">
              <FontAwesomeIcon className="search-icon" icon={faSearch} />
              <input
                className="search-input"
                placeholder="SEARCH"
                type="text"
              />
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

          <div className="bottom-navigation">
            <ul className="bottom-nav-list">
              <li className="bottom-nav-item">
                <FontAwesomeIcon icon={faGift} />
                new
              </li>
              <li className="bottom-nav-item">
                <FontAwesomeIcon icon={faFemale} />
                women
              </li>
              <li className="bottom-nav-item">
                <FontAwesomeIcon icon={faMale} />
                men
              </li>
              <li className="bottom-nav-item">
                <FontAwesomeIcon icon={faHome} />
                home
              </li>
              <li className="bottom-nav-item">
                <FontAwesomeIcon icon={faBoxOpen} />
                sale
              </li>
            </ul>
          </div>
        </>
      )}

      {isTablet && (
        <>
          <div className="tablet-menu">
            <div className="tablet-menu-compo">
              <div className="tablet-menu-header">
                <FontAwesomeIcon
                  className="drawer"
                  icon={faBars}
                  onClick={toggleDrawer}
                />
                <span
                  className="tablet-menu-title-text"
                  onClick={handleRefreshPage}
                >
                  house of origin
                </span>
              </div>

              <div className="tablet-search-bar">
                <FontAwesomeIcon
                  className="tablet-search-icon"
                  icon={faSearch}
                />
                <input
                  className="tablet-search-input"
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
