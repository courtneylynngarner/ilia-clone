import React from "react";
import "./Footer.css";
import instagram from "../Assets/instagram.png";
import facebook from "../Assets/facebook.png";
import tiktok from "../Assets/tiktok.png";
import youtube from "../Assets/youtube.png";
import pinterest from "../Assets/pinterest.png";
import twitter from "../Assets/twitter.png";
import member_image from "../Assets/member_image.svg";
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-1-box">
          <p className="footer-1-large"> Clean, skin-centric beauty.</p>
          <p className="footer-1-small">
            We challenge the conventions of clean beauty to create something
            radically new—through safe, potent formulas that protect and revive
            your skin.
          </p>
        </div>
        <div className="footer-2-box">
          <p className="sign-up-header">10% OFF YOUR FIRST ORDER</p>
          <p className="sign-up-content">
            Be the first to hear about product launches, exclusive sales, and
            more news.
          </p>
          <form action="">
            <input type="email" className="email" placeholder="Email" />
            <button className="submit-button" type="submit">
              SEND
            </button>
          </form>
          <div className="sm-container">
            <div className="sm-icons">
              <img className="instagram" src={instagram} alt="instagram" />
              <img className="facebook" src={facebook} alt="facebook" />
              <img className="tiktok" src={tiktok} alt="tiktok" />
              <img className="youtube" src={youtube} alt="youtube" />
              <img className="pinterest" src={pinterest} alt="pinterest" />
              <img className="twitter" src={twitter} alt="twitter" />
            </div>
          </div>
        </div>
        <div className="footer-3-box">
          <p className="member">MEMBER OF</p>
          <div className="one-percent-container">
            <img className="one-percent" src={member_image} alt="" />
          </div>
          <div className="copyright">
            <span>&#169;</span>
            2021 ILIA Beauty All rights reserved
          </div>
          <div className="footer-end">
            <div className="privacy">
              {" "}
              Privacy <span className="dot">&#183;</span>
            </div>
            <div className="terms">
              {" "}
              Terms <span className="dot">&#183;</span>
            </div>
            <div className="ca-privacy">
              {" "}
              CA Privacy <span className="dot">&#183;</span> Accessibility
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
