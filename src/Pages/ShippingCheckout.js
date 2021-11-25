import React from "react";
import CheckoutHeader from "../Components/CheckoutHeader";
import "./ShippingCheckout.css";
const ShippingCheckout = () => {
  return (
    <div>
      <CheckoutHeader />
      <div className="shipping-checkout-container">
        <div className="checkout-path">
          <p className="path-text">CART</p>
          <p className="path-text">INFORMATION</p>
          <p className="path-text">
            <strong>SHIPPING</strong>
          </p>
          <p className="path-text">PAYMENT</p>
        </div>
        <div className="review-box">
          <div className="shipping-review">
            <div className="contact-container">
              <p className="shipping-review-header">Contact</p>
              <button className="change-button">CHANGE</button>
            </div>
            <div
              className="ship-to-review"
              placeholder="courtneylynn108@gmail.com"
            >
              courtneylynn108@gmail.com
            </div>

            <div className="contact-line"></div>
            <div className="contact-container">
              <p className="shipping-review-header">Ship to</p>
              <button className="change-button">CHANGE</button>
            </div>
            <div
              className="ship-to-review"
              placeholder="1143 Paradise Lane, Uintah UT 87493, United States"
            >
              427 East 875 North Street, Ogden UT <br></br> 84404, United States
            </div>
          </div>
        </div>
        <p className="shipping-header">Shipping method</p>

        <div className="shipping-method-container">
          <div className="shipping-method">
            <input type="radio" className="radio" />
            <div className="shipping-options-text">
              {" "}
              DHL SmartMail Free US Shipping (4-6 business days)
            </div>
            <p className="shipping-price">FREE</p>
          </div>
          <div className="shipping-method">
            <input type="radio" className="radio" />
            <div className="shipping-options-text">
              {" "}
              FedEx 2day US Shipping (2 business days after processing)
            </div>
            <p className="shipping-price">$18.95</p>
          </div>
          <div className="shipping-method">
            <input type="radio" className="radio" />
            <div className="shipping-options-text">
              {" "}
              FedEx Next Day US Shipping (1 business day after processing)
            </div>
            <p className="shipping-price">$30.00</p>
          </div>
        </div>
        <button className="continue-to-shipping">CONTINUE TO PAYMENT</button>
        <button className="return-to-cart">Return to cart</button>
        <div className="checkout-copyright">
          <span>&#169;</span>
          2021 ILIA Beauty All rights reserved
        </div>
      </div>
    </div>
  );
};

export default ShippingCheckout;
