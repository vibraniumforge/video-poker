import React from "react";
import Card from "../Components/Card.js";

const CardContainer =({hand, discardToggle, isFirstDeal}) => {
  return (
  <div id="the-hand" className="flex-container">
    {hand.map((card) => (
      <Card
        key={card.id}
        discardToggle={() => discardToggle(card)}
        {...card}
        card={card}
        isFirstDeal={isFirstDeal}
      />
    ))}
  </div>
  )
}

export default CardContainer