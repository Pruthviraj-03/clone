import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container-col1">
          <span>
            Our goal of positive change is charged by togetherness, building a
            global community of charity-driven purpose via streatwear that
            champions a better world.
          </span>
          <h3>#jointhemovement</h3>
        </div>
        <div className="footer-container-col2">
          <span>shop</span>
          <ul>
            <li>home</li>
            <li>women</li>
            <li>men</li>
            <li>sports</li>
            <li>magazine</li>
          </ul>
        </div>
        <div className="footer-container-col2">
          <span>corporate info</span>
          <ul>
            <li>career</li>
            <li>about us</li>
            <li>contact us</li>
            <li>press</li>
            <li>corporate governance</li>
          </ul>
        </div>
        <div className="footer-container-col2">
          <span>help</span>
          <ul>
            <li>customer service</li>
            <li>legal and privacy</li>
            <li>contact</li>
            <li>report a scam</li>
            <li>cookie notice</li>
            <li>cookie settings</li>
          </ul>
        </div>
      </div>
      <div className="footer-social">
        <div className="socials">
          <FontAwesomeIcon className="icon" icon={faFacebook} />
          <FontAwesomeIcon className="icon" icon={faInstagram} />
          <FontAwesomeIcon className="icon" icon={faYoutube} />
        </div>
        <span>
          The content of this site is copyright-protected and is the property of
          House of Origin.
        </span>
        <h3>house of origin</h3>
      </div>
    </div>
  );
};

export default Footer;
