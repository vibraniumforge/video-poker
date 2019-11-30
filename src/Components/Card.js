import React from "react";

const Card =({discard, discardToggle, isFirstDeal, card}) => {
  return ( <div>
    <img
        src={require(`../playing-cards/${card.cardFront}`)}
        alt={`The ${card.name} of ${card.suit}`}
        className="playing-card"
      />
      <button
        type="button"
        disabled={isFirstDeal}
        className={discard ? "discard-btn-selected" : "discard-btn"}
        onClick={discardToggle}
      >
        {discard ? "Keep" : "Discard"}
      </button>
    </div>)
 
  }

  export default Card