import React from "react";

const StrategyModal = ({
  showStrategyModal,
  toggleStrategyModal,
  children
}) => {
  const showHideClassName = showStrategyModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <p>
          For a strategy tips, please visit the best gambling site.
          <a
            href="https://wizardofodds.com/games/video-poker/strategy/jacks-or-better/9-6/simple/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Link
          </a>
        </p>
        <button
          type="button"
          className="close-modal-button"
          onClick={toggleStrategyModal}
        >
          close
        </button>
      </section>
    </div>
  );
};

export default StrategyModal;
