import React from "react";
import { assets } from "../../assets/assets";
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Experience delicious food, delivered fast.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />

            <a className="linkedin-icon" href="https://www.linkedin.com/in/arpit-raj-dev" target="_blank" rel="noopener noreferrer">
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>

          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <a href="#navbar"><li>Home</li></a>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2> Get In Touch</h2>
          <ul>
            <li>6204494167</li>
            <li>
              <a href="mailto:arpitraj166@gmail.com">arpitraj166@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Zayka.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
