import React from "react";
import Banner from "../components/banner";
import Explore from "../components/explore";
import "../styles/best_subscription.css";
import Best_card from "../components/best_card";

const Best = () => {
  return (
    <div>
      <Banner />
      <Explore />
      <div className="best_subscription">
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
    </div>
  );
};

export default Best;
