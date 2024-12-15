"use client";
import React, { useState } from "react";
import "../styles/navbar.css"; // Import your CSS file for styling

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-container">
          <a href="/pages/home.html" className="logo">
            <img id="desktop-logo" src="/logo.svg" alt="Logo" />
          </a>
          <div className="nav-links">
            <a href="/">Esports Streaming Platforms</a>
            <a href="/bestSubscriptions">Best Subscriptions</a>
            <a href="/bestLive">Best Live Platforms</a>
            <a href="/articles">Articles</a>
            <a href="/faq">FAQs</a>
            <a href="/contact">Contact Us</a>
            <a href="/about">About Us</a>
          </div>

          <div
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            id="hamburger"
            onClick={handleHamburgerClick}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
        id="mobileMenu"
      >
        <a href="/" className="logo">
          <img id="mobile-logo" src="/logo.svg" alt="Logo" />
        </a>
        <a href="/">Esports Streaming Platforms</a>
        <a href="/bestSubscriptions">Best Subscriptions</a>
        <a href="/bestLive">Best Live Platforms</a>
        <a href="/articles">Articles</a>
        <a href="/faq">FAQs</a>
        <a href="/contact">Contact Us</a>
        <a href="/about">About Us</a>
      </div>
    </>
  );
};

export default Navbar;
