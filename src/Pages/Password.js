import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Password.css";

const Password = () => {
  return (
    <div>
      <Header />
      <div className="pw-reset">
        <p id="pw-header">Forgot your password?</p>
        <p className="reset-text">
          We will send you an email to reset your password.
        </p>
        <form className="pw-reset-form">
          <input
            type="email"
            className="pw-reset-email"
            placeHolder="Email"
          ></input>
          <button className="pw-reset-submit">SUBMIT</button>
        </form>
        <div className="reset-link">
          <p className="pw-reset-cancel">
            <u>CANCEL</u>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Password;
