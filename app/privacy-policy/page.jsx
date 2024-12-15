import React from "react";
import "./privacy.css";

const Privacy = () => {
  return (
    <div>
      <div className="privacy_banner">
        <h1 className="privacy_title"> PRIVACY POLICY </h1>
      </div>

      <div className="privacy-container">
        <div className="privacy-box">
          <h1>Privacy Policy</h1>
          <p>
            Your privacy is important to us. It is our policy to respect your
            privacy regarding any information we may collect from you across our
            website.
          </p>
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information when you interact with our site,
            such as your name, email address, and any other details you provide
            voluntarily.
          </p>
          <h2>How We Use Information</h2>
          <p>
            We use the information we collect to provide, operate, and improve
            our services, communicate with you, and ensure a seamless user
            experience.
          </p>
          <h2>Third-Party Services</h2>
          <p>
            We may employ third-party services to facilitate our service,
            perform service-related tasks, or assist in analyzing how our
            service is used. These third parties have access to your data only
            to perform tasks on our behalf.
          </p>
          <h2>Data Security</h2>
          <p>
            We take reasonable precautions to protect your personal information
            and ensure that it is not lost, misused, accessed, disclosed,
            altered, or destroyed.
          </p>
          <h2>Changes to This Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We encourage you
            to review this page periodically for any changes.
          </p>
          <p>
            If you have any questions about our Privacy Policy, feel free to
            contact us at: <strong>yourprivacy@email.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
