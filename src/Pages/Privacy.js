import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import "./Privacy.css";
import reviewsBanner from "../Assets/reviewsBanner.png";

const Privacy = () => {
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
        <p className="title-header">Privacy Policy</p>
        <p className="tos-privacy-update">Last Updated: July 13, 2020</p>
        <p className="terms-text">
          ILIA Beauty (“ILIA,” “we,” “us,” or “our”) provides this Privacy
          Policy (“Policy” or “Privacy Policy”) to describe the information we
          collect, how we use it, and when and with whom we share it. This
          Policy applies to this website (www.iliabeauty.com), other websites,
          mobile applications, and online services we provide, and to personal
          information collected offline, such as through a purchase of our
          products or subscription to our mailing lists or newsletters
          (collectively the “Service”). By accessing or using the Service, you
          agree to this Policy. If you do not agree to this Policy, please do
          not access or use the Service.
        </p>
        <p className="terms-header">1. THE INFORMATION WE COLLECT</p>
        <p className="terms-text">
          We collect information about you when you use our Service. The types
          of information we collect depends on the services and the features you
          use on the Service. Please note that we need certain types of
          information to provide the Service to you. If you do not provide us
          with such information, or if you ask us to delete that information,
          you may no longer be able to access or use certain Service.
        </p>
        <p className="terms-text">
          We may collect information about you or others through our affiliates
          or through non-affiliated third parties. For example, we may
          communicate with you on platforms operated by third parties and
          collect feedback. We may combine information that we collect from you
          through the Service with information that we obtain from such third
          parties and information derived from other products or services we
          provide.
        </p>
        <p className="terms-text">
          Device/Usage Information. We and our third-party service providers,
          which include ad networks and analytics companies such as Google
          Analytics, may use cookies, web beacons, and other tracking
          technologies to collect information about the computers or devices
          (including mobile devices) you use to access the Service. As described
          further below, we may collect and analyze information including but
          not limited to (a) browser type; (b) ISP or operating system; (c)
          domain name; (d) access time; (e) referring or exit pages; (f) page
          views; (g) IP address; (h) unique device identifiers (e.g. IDFA or
          Android ID); and (i) the type of device that you use. We may also
          track when and how frequently you access or use the Service, including
          how you engage with or navigate our website or mobile application. We
          use this information (including the information collected by our
          third-party service providers) for analytics (including to determine
          which portions of the Service are used most frequently and what our
          users like/do not like), to assist in determining relevant advertising
          (both on and off the Service), to evaluate the success of our
          advertising campaigns, and as otherwise described in this Policy.
        </p>
        <p className="terms-header">2. HOW WE USE THE INFORMATION WE COLLECT</p>
        <p className="terms-text">
          We use your information for business and commercial purposes, such as:
        </p>
        <div className="terms-ul">
          <ul>
            <li className="terms-list">
              To provide you with the Service, including to register you for an
              account and process transactions;
            </li>
            <li className="terms-list">
              To respond to your questions or inquiries, including to provide
              support and troubleshooting assistance;
            </li>
            <li className="terms-list">
              To administer and troubleshoot the Service.
            </li>
          </ul>
        </div>
        <p className="terms-text">
          We may combine information that we collect from you through the
          Service with information that we obtain from affiliated and
          nonaffiliated third parties, and information derived from any other
          products or Service we provide.
        </p>
        <p className="terms-text">
          We may aggregate and/or de-identify information collected through the
          Service. We may use de-identified or aggregated data for any purpose,
          including without limitation for research and marketing purposes and
          may also share such data with any third parties, including without
          limitation, advertisers, promotional partners, sponsors, event
          promoters, and/or others.
        </p>
        <p className="terms-text-close">
          We describe our information sharing practices in our Privacy Policy.
          We may share certain categories of personal information with third
          parties for business purposes. For example, we may share any of the
          categories described above with our subsidiaries or affiliates. If you
          connect your account with social media services or interact with
          social media plugins or links on the Service, we may share
          identifiers, commercial information, internet or other network or
          device activity, or general location with those social media services.
          We may also share your information with our retailer partners to help
          address your customer service requests.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
