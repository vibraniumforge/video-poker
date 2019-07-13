import React from "react";
import Card from "../Components/Card.js";

export default ({ hand, discardToggle, isFirstDeal }) => (
  <div id="the-hand" className="flex-container">
    {hand.map((card, cardIndex) => (
      <Card
        key={cardIndex}
        discardToggle={() => discardToggle(card)}
        {...card}
        card={card}
        isFirstDeal={isFirstDeal}
      />
    ))}
  </div>
);
