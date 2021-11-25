import React from "react";
import "./CheckoutHeader.css";
import ilia from "../Assets/ilia.png";
import cart from "../Assets/cart.png";
const CheckoutHeader = () => {
  return (
    <div className="checkout-header-box">
      <div className="checkout-header">
        <div className="ilia-container">
          <img className="ilia" src={ilia} alt="" />
        </div>
      </div>
      <div className="order-summary-box">
        <div className="cart-icon-container">
          <img className="cart-logo" src={cart} alt="cart" />
        </div>
        <button className="order-summary">SHOW ORDER SUMMARY</button>
        {/* <div className="arrow-down"></div> */}
        <span className="order-summary-total" placeholder="">
          $57.92
        </span>
      </div>
    </div>
  );
};

export default CheckoutHeader;
