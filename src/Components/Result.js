import React from "react";
import cardLogic from "../helpers/cardLogic.js";

const Result = ({ isFirstDeal, hand, showResult }) => {
  return (
    <div
      id="hand-result"
      className={showResult ? "flex-container" : "flex-container hidden"}
    >
      {isFirstDeal && showResult ? cardLogic(hand).text : null}
    </div>
  );
};

export default Result;
