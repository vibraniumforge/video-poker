import React from "react";

const StrategyModal = ({
  showStrategyModal,
  toggleModal
}) => {
  const showHideClassName = showStrategyModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName} name="showStrategyModal">
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
          name="showStrategyModal"
          className="close-modal-button"
          onClick={toggleModal}
        >
          close
        </button>
      </section>
    </div>
  );
};

export default StrategyModal;
