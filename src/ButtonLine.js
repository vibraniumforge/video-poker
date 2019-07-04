import React from "react";

export default ({
  toggleHelpModal,
  toggleStrategyModal,
  betOne,
  betAmount,
  initialDeal,
  discard,
  bankroll,
  isFirstDeal
}) => (
  <div>
    <div id="buttons" className="flex-container">
      <button id="help-btn" onClick={toggleHelpModal}>
        Help
      </button>
      <button id="strategy-btn" onClick={toggleStrategyModal}>
        {/* <button id="strategy-btn" onClick={toggleStrategyModal}> */}
        Strategy
      </button>
      <button
        id="bet-one-btn"
        className={isFirstDeal ? "bet-one-btn" : "bet-one-btn-disabled"}
        onClick={isFirstDeal ? betOne : null}
      >
        Bet One
      </button>
      <span id="bet-amount">
        Bet {betAmount} Coin
        {betAmount === 1 ? "" : "s"}
      </span>
      <button
        id="draw-btn"
        className={isFirstDeal ? "draw-btn" : "draw-btn-clicked"}
        onClick={isFirstDeal ? initialDeal : discard}
      >
        {isFirstDeal ? "Deal" : "Submit"}
      </button>{" "}
      <span id="bankroll">{bankroll} Coins</span>
    </div>
  </div>
);

/* <HelpModal
          showHelpModal={this.state.showHelpModal}
          toggleHelpModal={this.toggleHelpModal}
        /> */

/* <StrategyModal
          showStrategyModal={this.state.showStrategyModal}
          toggleHelpModal={this.toggleStrategyModal}
        /> */
