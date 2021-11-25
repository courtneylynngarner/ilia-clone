import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <Header />
      <div className="login">
        <p className="login-heading">Log In</p>
        <form className="login-form" action="">
          <input type="email" className="email-address" placeholder="Email" />
          <input type="password" className="password" placeholder="Password" />
          <p className="disclaimer">
            By clicking "SIGN IN" you agree to ILIA Beauty's{" "}
            <u>Terms of Service</u> and confirm that you have read the{" "}
            <u>Privacy Policy.</u>
          </p>
          <button className="sign-in-button">SIGN IN</button>
        </form>
        <div className="links">
          <p className="forgot-password">
            {" "}
            <u>FORGOT PASSWORD?</u>
          </p>
          <p className="create-account">
            <u>CREATE ACCOUNT</u>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
