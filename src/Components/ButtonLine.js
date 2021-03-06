import React from "react";

const ButtonLine = ({
  // toggleHelpModal,
  // toggleStrategyModal,
  toggleModal,
  incrementBetAmount,
  initialDeal,
  discard,
  betAmount,
  bankroll,
  isFirstDeal
}) => {
  return (
    <div>
      <div id="buttons" className="flex-container">
        <button id="help-btn" name="showHelpModal" onClick={toggleModal}>
          Help
        </button>
        <button
          id="strategy-btn"
          name="showStrategyModal"
          onClick={toggleModal}
        >
          Strategy
        </button>
        <button
          id="bet-one-btn"
          className={isFirstDeal ? "bet-one-btn" : "bet-one-btn-disabled"}
          onClick={isFirstDeal ? incrementBetAmount : null}
        >
          Bet One
        </button>
        <span id="bet-amount">
          Bet {betAmount} Coin
          {betAmount === 1 ? "" : "s"}
        </span>
        <button
          id="draw-btn"
          className={isFirstDeal ? "draw-btn" : "draw-btn-selected"}
          onClick={isFirstDeal ? initialDeal : discard}
        >
          {isFirstDeal ? "Deal" : "Submit"}
        </button>{" "}
        <span id="bankroll">{bankroll} Coins</span>
      </div>
    </div>
  );
};

export default ButtonLine;

// export default ({
//   toggleHelpModal,
//   toggleStrategyModal,
//   incrementBetAmount,
//   initialDeal,
//   discard,
//   betAmount,
//   bankroll,
//   isFirstDeal
// }) => (
//   <div>
//     <div id="buttons" className="flex-container">
//       <button id="help-btn" onClick={toggleHelpModal}>
//         Help
//       </button>
//       <button id="strategy-btn" onClick={toggleStrategyModal}>
//         Strategy
//       </button>
//       <button
//         id="bet-one-btn"
//         className={isFirstDeal ? "bet-one-btn" : "bet-one-btn-disabled"}
//         onClick={isFirstDeal ? incrementBetAmount : null}
//       >
//         Bet One
//       </button>
//       <span id="bet-amount">
//         Bet {betAmount} Coin
//         {betAmount === 1 ? "" : "s"}
//       </span>
//       <button
//         id="draw-btn"
//         className={isFirstDeal ? "draw-btn" : "draw-btn-selected"}
//         onClick={isFirstDeal ? initialDeal : discard}
//       >
//         {isFirstDeal ? "Deal" : "Submit"}
//       </button>{" "}
//       <span id="bankroll">{bankroll} Coins</span>
//     </div>
//   </div>
// );
