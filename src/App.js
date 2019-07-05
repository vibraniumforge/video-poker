import React from "react";
import CasinoName from "./CasinoName.js";
import PayTable from "./PayTable.js";
import HelpModal from "./HelpModal.js";
import StrategyModal from "./StrategyModal.js";
import { generateDeck, shuffleDeck, sortHand } from "./helpers/cardHelpers.js";
import cardLogic from "./helpers/cardLogic.js";
import ButtonLine from "./ButtonLine.js";
import CardContainer from "./CardContainer.js";

class App extends React.Component {
  state = {
    deck: [],
    hand: [],
    betAmount: 1,
    bankroll: 100,
    showHelpModal: false,
    showStrategyModal: false,
    isFirstDeal: true,
    coinAmounts: [1, 2, 3, 4, 5],
    // prettier-ignore
    payTable: {
      "Royal Flush": 800,
      "Straight Flush": 50,
      "4 of a Kind": 25,
      "Full House": 9,
      "Flush": 6,
      "Straight": 4,
      "3 of a Kind": 3,
      "Two Pairs": 2,
      "One Pair - Jacks or Better": 1,
      "Nothing": -1
    }
  };

  incrementBetAmount = () => {
    this.setState(prevState => {
      const betAmount = prevState.betAmount < 5 ? prevState.betAmount + 1 : 1;
      return { betAmount };
    });
  };

  initialDeal = () => {
    const newDeck = shuffleDeck(generateDeck());
    this.dealCards(5, [], newDeck);
  };

  dealCards = (count, prevHand, prevDeck) => {
    const newHand = prevDeck.slice(0, count);
    const deck = prevDeck.slice(count, 52);
    const sortedHand = sortHand([...newHand]);
    this.setState({ hand: sortedHand, deck: deck }, () => this.judgeHand());
    // this.setState(
    //   prevState => ({
    //     newHand,
    //     deck
    //     // isFirstDeal: !prevState.isFirstDeal
    //   }),
    //   () => this.judgeHand()
    //   // () => this.updateDeal()
    // );
  };

  discardToggle = discardCard => {
    const hand = this.state.hand.map(card => {
      if (card === discardCard) {
        return { ...card, discard: !card.discard };
      } else {
        return card;
      }
    });
    this.setState({ hand });
  };

  discard = () => {
    const { deck, hand } = this.state;
    let newHand = hand.filter(card => !card.discard);
    let cardsNeeded = 5 - newHand.length;
    this.dealCards(cardsNeeded, newHand, deck);
  };

  toggleHelpModal = () => {
    this.setState(prevState => ({
      showHelpModal: !prevState.showHelpModal
    }));
  };

  toggleStrategyModal = () => {
    this.setState(prevState => ({
      showStrategyModal: !prevState.showStrategyModal
    }));
  };

  updateDeal() {
    this.setState(prevState => ({ isFirstDeal: !prevState.isFirstDeal }));
  }

  judgeHand = () => {
    if (!this.state.isFirstDeal) {
      let result = cardLogic(this.state.hand).handValue;
      console.log(result);
      let resultIndex = Object.keys(this.state.payTable).indexOf(result);
      console.log("resultIndex=", resultIndex);
      console.log(
        "Object.values(this.state.payTable)[resultIndex]=",
        Object.values(this.state.payTable)[resultIndex]
      );
      let overallResult = Object.values(this.state.payTable)[resultIndex];
      console.log("overallResult=", overallResult);
      console.log("t.s.b=", this.state.bankroll);
      this.setState(
        prevState => ({
          bankroll: prevState.bankroll + overallResult * this.state.betAmount
        }),
        () => console.log("t.s.b=", this.state.bankroll),
        () => console.log("++++++++++++++++++++++++++++++++")
      );
    }
    this.updateDeal();
  };

  render() {
    const {
      betAmount,
      hand,
      bankroll,
      isFirstDeal,
      coinAmounts,
      payTable,
      showHelpModal,
      showStrategyModal
    } = this.state;
    const showResult = !!hand.length;
    return (
      <React.Fragment>
        <CasinoName />
        <hr className="horizontal-line" />
        <div id="top" className="flex-container">
          <PayTable
            betAmount={betAmount}
            coinAmounts={coinAmounts}
            payTable={payTable}
          />
          {showResult && (
            <div id="hand-result">
              {isFirstDeal ? cardLogic(hand).text : null}
            </div>
          )}
          <hr className="horizontal-line" />
          <CardContainer hand={hand} discardToggle={this.discardToggle} />
        </div>
        <hr className="horizontal-line" />
        {showHelpModal ? (
          <HelpModal
            showHelpModal={this.state.showHelpModal}
            toggleHelpModal={this.toggleHelpModal}
          />
        ) : null}
        {showStrategyModal ? (
          <StrategyModal
            showStrategyModal={this.state.showStrategyModal}
            toggleStrategyModal={this.toggleStrategyModal}
          />
        ) : null}
        <ButtonLine
          toggleStrategyModal={this.toggleStrategyModal}
          toggleHelpModal={this.toggleHelpModal}
          incrementBetAmount={this.incrementBetAmount}
          initialDeal={this.initialDeal}
          discard={this.discard}
          betAmount={betAmount}
          bankroll={bankroll}
          isFirstDeal={isFirstDeal}
        />
      </React.Fragment>
    );
  }
}

export default App;
