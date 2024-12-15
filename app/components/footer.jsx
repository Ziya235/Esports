import React from "react";

import "../styles/footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer_left">
          <div className="footer_left_1">
            <a href="/" className="logo">
              <img id="mobile-logo" src="/logo.svg" alt="Logo" />
            </a>
            <p className="footer_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <p>All Rights Reserved (C)</p>
          </div>
          <div className="footer_left_2">
            <a href="/">Esports Streaming Platforms</a>
            <a href="/bestSubscriptions">Best Subscriptions</a>
            <a href="/bestLive">Best Live Platforms</a>
            <a href="/articles">Articles</a>
            <a href="/faq">FAQs</a>
          </div>
        </div>
        <div className="footer_right">
          <div className="footer_right_1">
            <a href="/contact">Contact Us</a>
            <a href="/about"> About Us</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/">Advertising Disclosure</a>
          </div>

          <div className="footer_right_2">
            <div className="footer_images">
              <img src="/footer_1.webp" alt="" />
              <img src="/footer_2.webp" alt="" />
              <img src="/footer_3.webp" alt="" />
            </div>
            <div className="footer_images_2">
              <img src="/footer_4.webp" alt="" /> <br />
              <img src="/footer_5.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
