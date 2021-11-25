import React from "react";
import CheckoutHeader from "../Components/CheckoutHeader";
import "./ContactCheckout.css";
const ContactCheckout = () => {
  return (
    <div>
      <CheckoutHeader />

      {/* <div className="or-line">
          <span className="or-text">OR</span>
        </div> */}
      <div className="contact-checkout-container">
        <div className="checkout-path">
          <p className="path-text">CART</p>
          <p className="path-text">
            <strong>INFORMATION</strong>
          </p>
          <p className="path-text">SHIPPING</p>
          <p className="path-text">PAYMENT</p>
        </div>
        <div className="contact-line">
          <div className="next">CHECKOUT</div>
        </div>
        <p className="contact-header">Contact information</p>
        <div className="checkout-login">
          Already have an account?
          <aside className="checkout-login-link"> Log in</aside>
        </div>
        <form className="checkout-contact-form" action="">
          <input type="email" className="contact-input" value="EMAIL" />
          <div className="email-me-box">
            <input type="checkbox" className="checkbox" id="email-me" />
            <label className="email-me" htmlFor="email-me">
              Email me with news and offers
            </label>
          </div>
          <p className="contact-header">Shipping address</p>
          <input className="contact-input" value="FIRST NAME" />
          <input className="contact-input" value="LAST NAME" />
          <input className="contact-input" value="COMPANY (OPTIONAL)" />
          <input className="contact-input" value="ADDRESS" />
          <input
            className="contact-input"
            value="APARTMENT, SUITE, ETC. (OPTIONAL)"
          />
          <input className="contact-input" value="CITY" />
          {/* <input className="contact-input" value="COUNTRY/REGION" /> */}
          <input className="contact-input" value="STATE" />
          <input className="contact-input" value="ZIP CODE" />
          <input className="contact-input" value="PHONE (OPTIONAL)" />
          <button className="continue-to-shipping">CONTINUE TO SHIPPING</button>
          <button className="return-to-cart">Return to cart</button>
        </form>
        <div className="checkout-copyright">
          <span>&#169;</span>
          2021 ILIA Beauty All rights reserved
        </div>
      </div>
    </div>
  );
};

export default ContactCheckout;
