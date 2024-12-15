import React from "react";
import "./articles.css";

const Articles = () => {
  return (
    <div>
      <div className="faq_banner">
        <p>Insights, Stories, and Trends in Sports and eSports</p>
        <h1 className="faq_title">Game On </h1>
      </div>

      <div className="game_on">
      <div className="game_on_main">
        <div className="game_on_left">
          <img src="/game_on_main.webp" alt="" />
          <h2>How to Immerse Yourself in the eSports Experience</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            veniam quis nostrud exercitation ullamco
          </p>
          <p className="game_on_date">Updated December 11, 2024</p>
        </div>
        <div className="game_on_right">
          <div className="right_part_card">
            <img src="/game_on_right.webp" alt="" />
            <div>
              <h2>eSports Viewing 101: Essential Tips for New Fans</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>Updated December 11, 2024</p>
            </div>
          </div>
          <div className="right_part_card">
            <img src="/url-2.webp" alt="" />
            <div>
              <h2>The Ultimate eSports Watch Party Guide</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>Updated December 11, 2024</p>
            </div>
          </div>
          <div className="right_part_card">
            <img src="/url-3.webp" alt="" />
            <div>
              <h2>
                From Casual Viewer to Diehard Fan: Your Journey Through the
                eSports Universe
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>Updated December 11, 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
};

export default Articles;
