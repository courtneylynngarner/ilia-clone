import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Tos.css";
import reviewsBanner from "../Assets/reviewsBanner.png";
const Tos = () => {
  return (
    <div>
      <Header />
      <div className="reviews-banner-box">
        <img
          className="reviews-banner"
          src={reviewsBanner}
          alt="ilia-products"
        />
      </div>
      <div className="terms-container">
        <p className="title-header">Terms of service</p>
        <p className="tos-privacy-update">Last Updated: July 13, 2020</p>
        <p className="tos-notice">
          IMPORTANT NOTICE: THESE TERMS OF SERVICE CONTAIN A BINDING ARBITRATION
          PROVISION AND CLASS ACTION WAIVER. IT AFFECTS YOUR LEGAL RIGHTS AS
          DETAILED IN THE ARBITRATION AND CLASS ACTION WAIVER SECTIONS BELOW. BY
          ACCEPTING THESE TERMS OF USE, YOU AGREE TO BE BOUND BY THIS
          ARBITRATION PROVISION AND CLASS ACTION WAIVER. PLEASE READ IT
          CAREFULLY.
        </p>
        <p className="terms-header">OVERVIEW</p>
        <p className="terms-text">
          This Service is operated by ILIA Beauty. These Terms of Service
          (“Terms” or “Terms of Service”) govern your use of our website(s),
          products, services and applications (the "Service"). Throughout the
          site, the terms “we”, “us” and “our” refer to ILIA Beauty.
        </p>
        <p className="terms-text">
          Our store is hosted on Shopify Inc. They provide us with the online
          e-commerce platform that allows us to sell our products and services
          to you.
        </p>
        <p className="terms-header">1. ACCEPTANCE OF TERMS</p>
        <p className="terms-text">
          By using our Service, accessing the website, and/ or purchasing
          something from us, you agree to be bound by these Terms, including
          those additional terms and conditions and policies referenced herein
          and/or available by hyperlink. Any new features or tools which are
          added to the current store shall also be subject to the Terms of
          Service. These Terms apply to all users of the Service, including
          without limitation users who are browsers, vendors, customers,
          merchants, and/ or contributors of content. If you do not agree to all
          the terms and conditions of these Terms, then you may not access the
          Service. If these Terms are considered an offer, acceptance is
          expressly limited to these Terms.
        </p>
        <p className="terms-header">2. GENERAL CONDITIONS</p>
        <p className="terms-text">
          We reserve the right to refuse service to anyone for any reason at any
          time.
        </p>
        <p className="terms-text">
          By agreeing to these Terms of Service, you represent that you are over
          13 years old and at least the age of majority in your state or
          province of residence, or that you are the age of majority in your
          state or province of residence and you have given us your consent to
          allow any of your minor dependents to use this site.
        </p>
        <p className="terms-text">
          You warrant and represent that you have all necessary rights, power,
          and authority to agree to these Terms and perform your obligations
          hereunder, and nothing contained in these Terms or in the performance
          of such obligations will place you in breach of any other contract or
          obligation.
        </p>
        <p className="terms-text">
          You understand that your content (not including credit card
          information), may be transferred unencrypted and involve (a)
          transmissions over various networks; and (b) changed to conform and
          adapt to technical requirements of connecting networks or devices.
          Credit card information is always encrypted during transfer over
          networks.
        </p>
        <p className="terms-header">3. ILIA BEAUTY ACCOUNT</p>
        <p className="terms-text">
          You may be required to create an account to use some of the features
          of the Service. You must keep your password confidential and you are
          solely responsible for maintaining the confidentiality and security of
          your account, all changes and updates submitted through your account,
          and all activities that occur in connection with your account. In
          creating an account, you represent to us that all information you
          provide in such process is true, accurate and correct, and that you
          will update your information as necessary to keep it accurate. You may
          not impersonate someone else, create or use an account for anyone
          other than yourself, provide an email address other than your own,
          create multiple accounts except as otherwise authorized by us, or
          provide or use false information. You agree to notify us immediately
          of any unauthorized use of your account by contacting us at the
          information provided below and to change your password. You may not
          transfer your account to anyone else without our prior written
          permission.
        </p>
        <p className="terms-header">26. CHANGES TO TERMS OF SERVICE</p>
        <p className="terms-text">
          We reserve the right, at our sole discretion, to update, change or
          replace any part of these Terms. The most current version of the Terms
          will be posted on the Service and it is your responsibility to check
          our website periodically for changes. If the changes include material
          changes that affect your rights or obligations, we will notify you of
          the changes by reasonable means, which could include notification
          through the Service or via email. Your continued use of the Service
          following the effective date of any changes to these Terms constitutes
          acceptance of those changes. If you do not agree to the new Terms, you
          may not use the Service.
        </p>
        <p className="terms-header">27. CONTACT INFORMATION</p>
        <p className="terms-text-close">
          If you have any questions or concerns with respect to these Terms or
          the Service, or to report any violations of these Terms, please
          contact us at: <u> info@iliabeauty.com</u>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Tos;
