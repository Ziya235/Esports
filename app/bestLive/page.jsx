import React from "react";
import "../styles/bestLive.css";
import Explore from "../components/explore";
import Best_card from "../components/best_card";

const BestLive = () => {
  return (
    <div>
      <div className="banner">
        <p className="date">Updated on Sep 17, 2024</p>
        <h1>ESPORTS LIVE </h1>
        <h1>
          STREAMIING <span>ONLINE 2025</span>
        </h1>
        <p className="text">
          Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor
          incididunt labore magna aliqua veniam, quis nostrud exercitation
          ullamco laboris aliquip commodo{" "}
        </p>
        <button>Check Now!</button>
      </div>
      <Explore />

      <h1 className="best_subscription_title">
        Top 10 Online Esports Subscriptions 2025
      </h1>
      <div className="best_cards">
        <Best_card />
        <Best_card />
        <Best_card />
        <Best_card />
        <Best_card />
        <Best_card />
      </div>
    </div>
  );
};

export default BestLive;
