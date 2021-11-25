import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./CreateAccount.css";

const CreateAccount = () => {
  return (
    <div>
      <Header />
      <div className="create-account-container">
        <p className="account-heading">Create Account</p>
        <form action="" className="create-account-form">
          <input type="text" className="first-name" placeholder="First Name" />
          <input type="text" className="last-name" placeholder="Last Name" />
          <input type="email" className="create-email" placeholder="Email" />
          <input
            type="password"
            className="create-password"
            placeholder="Password"
          />
        </form>
        <p className="create-disclaimer">
          By clicking "CREATE", you agree to ILIA Beauty's{" "}
          <u>Terms of Service</u> and confirm that you have read the{" "}
          <u>Privacy Policy.</u>
        </p>
        <button className="create-button">CREATE</button>
        <div className="create-login">
          <u>LOG IN</u>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreateAccount;
