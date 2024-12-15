import React from "react";

import "../styles/global.css";
import "../styles/top_10.css";
import Top_10_card from "./top_10_card";

const Top_10 = () => {
  return (
    <div className="top_10">
      <h1 className="top_10_title">
        Top 10 Esports Live Streaming Online 2025
      </h1>
      <div className="top_10_cards">
        <Top_10_card/>
        <Top_10_card/>
        <Top_10_card/>
      </div>
    </div>
  );
};

export default Top_10;
