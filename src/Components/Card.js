import React from "react";

// export default ({
//   suit,
//   icon,
//   image,
//   discard,
//   discardToggle,
//   isFirstDeal,
//   card
// }) => (
//   // <div className={discard ? "card-selected" : "playing-card"}>
//   <div>
//     {/* <div className={discard ? "card-selected" : "card"}> */}
//     {/* <h1 className={suit}>{icon}</h1>
//     <h1 className={suit}>{image}</h1> */}
//     <img
//       src={require(`../playing-cards/${card.cardFront}`)}
//       alt={`The ${card.image} of ${card.suit}`}
//       className="playing-card"
//     />
//     <br />
//     <button
//       type="button"
//       disabled={isFirstDeal}
//       className={discard ? "discard-btn-selected" : "discard-btn"}
//       onClick={discardToggle}
//     >
//       {discard ? "Keep" : "Discard"}
//     </button>
//   </div>
// );

const Card =({discard, discardToggle, isFirstDeal, card}) => {
  return ( <div>
    <img
        src={require(`../playing-cards/${card.cardFront}`)}
        alt={`The ${card.name} of ${card.suit}`}
        className="playing-card"
      />
      <br />
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