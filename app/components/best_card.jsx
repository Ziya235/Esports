import React from "react";

import "../styles/best_subscription.css";

const Best_card = () => {
  return (
    <div>
      <div className="best_card">
        <div className="best_card_up">
          <img src="/game_on_main.webp" alt="" />
          <div className="best_card_right">
            <div className="best_card_up_left">
              <p className="esport_spec">#1 ESPORTS SPECIALIST</p>
              <h1>GG BET</h1>
              <p>Reprehenderit In Voluptate Velit Esse</p>
            </div>
          </div>
        </div>
        <div className="best_card_bottom">
          <button>Check Now</button> <br />
        </div>
      </div>
    </div>
  );
};

export default Best_card;
