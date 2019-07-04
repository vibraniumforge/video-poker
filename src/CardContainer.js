import React from "react";
import Card from "./Card.js";

export default ({ hand, discardToggle }) => (
  <div id="the-hand" className="flex-container">
    {hand.map((card, cardIndex) => (
      <Card
        key={cardIndex}
        discardToggle={() => discardToggle(card)}
        {...card}
      />
    ))}
  </div>
);
