import React from "react";

const { spade, heart, diamond, club } = {
  spade: "\u2660",
  diamond: "\u2666",
  heart: "\u2665",
  club: "\u2663"
};

const Icon = ({ type, color }) => (
  <span className={`icon ${color}`}>{type}</span>
);

export default () => (
  <div id="casino-name">
    <h2>
      <Icon type={spade} color="black" />
      <Icon type={heart} color="red" />
      <Icon type={club} color="black" />
      <Icon type={diamond} color="red" />
      <span className="yellow">Casino Video Poker </span>
      <Icon type={spade} color="black" />
      <Icon type={heart} color="red" />
      <Icon type={club} color="black" />
      <Icon type={diamond} color="red" />
    </h2>
  </div>
);
