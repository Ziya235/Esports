import React from "react";
import "../styles/global.css";
import "../styles/banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <p className="date">Updated on Sep 17, 2024</p>
      <h1>ESPORTS LIVE </h1>
      <h1>
        STREAMIING <span>ONLINE 2025</span>
      </h1>
      <p className="text">
        Experience the thrill of esports like never before! Our platform brings
        you live streaming of the most exciting esports tournaments and matches
        from around the world. Whether you're a fan of competitive gaming or
        just looking to stay updated with the latest action, we've got you
        covered.
      </p>
      <button>Check Now!</button>
    </div>
  );
};

export default Banner;
