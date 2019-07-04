import React from "react";

export default ({ suit, icon, image, discard, discardToggle }) => (
  <div className={discard ? "card-selected" : "card"}>
    <h1 className={suit}>{icon}</h1>
    <h1 className={suit}>{image}</h1>
    <br />
    <button
      type="button"
      className={discard ? "discard-btn" : "discard-btn-selected"}
      onClick={discardToggle}
    >
      {discard ? "Keep" : "Discard"}
    </button>
  </div>
);
