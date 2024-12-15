import React from "react";
import "../styles/global.css"
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <p className="date">Updated on Sep 17, 2024</p>
      <h1>ESPORTS LIVE </h1>
      <h1>STREAMIING <span>ONLINE 2025</span></h1>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor
        incididunt labore magna aliqua veniam, quis nostrud exercitation ullamco
        laboris aliquip commodo{" "}
      </p>
      <button>Check Now!</button>
    </div>
  );
};

export default Banner;
