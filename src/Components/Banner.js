import React from "react";
import "./Banner.css";
import holiday from "../Assets/Mobiles/holiday.png";

const Banner = () => {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-whitespace"></div>
        <div className="banner">
          <div className="banner-1">
            <img className="holiday" src={holiday} alt="" />
          </div>
        </div>
        <p className="banner-1-large">From Dawn to Dusk.</p>
        <p className="banner-1-small">
          TWO NEW HOLIDAY SETS YOU'LL ONLY FIND HERE.
        </p>
        <button className="banner-button">SHOP NOW</button>
        <div className="banner-whitespace"></div>
      </div>
    </div>
  );
};

export default Banner;
