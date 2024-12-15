import React from 'react'


import "../styles/top_10.css"

const Top_10_card = () => {
  return (
    <div>
          <div className="top_10_card">
          <div className="top_10_up">
            <img src="/game_on_main.webp" alt="" />
            <div className="top_10_right">
              <div className="top_10_up_left">
                <p className="esport_spec">#1 ESPORTS SPECIALIST</p>
                <h1>GG BET</h1>
                <p>Reprehenderit In Voluptate Velit Esse</p>
              </div>

              <div className="top_10_up_right">
                <button>Check Now</button> <br />
                <a href="">Read GG BET Review</a>
              </div>
            </div>
          </div>
          <hr />
          <div className="top_10_bottom">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequ aute irure dolor in
              reprehenderit
            </p>
          </div>
        </div>
    </div>
  )
}

export default Top_10_card