import React from "react";
import CasinoName from "./Components/CasinoName.js";
import PayTable from "./Components/PayTable.js";
import HelpModal from "./Components/HelpModal.js";
import StrategyModal from "./Components/StrategyModal.js";
import { generateDeck, shuffleDeck, sortHand } from "./helpers/cardHelpers.js";
import cardLogic from "./helpers/cardLogic.js";
import ButtonLine from "./Components/ButtonLine.js";
import CardContainer from "./Containers/CardContainer.js";
import Result from "./Components/Result.js"


// prettier-ignore
const payTable= {
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

class App extends React.PureComponent {
  state = {
    deck: [],
    hand: [],
    betAmount: 1,
    bankroll: 100,
    showHelpModal: false,
    showStrategyModal: false,
    isFirstDeal: true,
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
    const sortedHand = sortHand([...newHand, ...prevHand]);
    this.setState({ hand: sortedHand, deck: deck }, () => this.judgeHand());
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

  // refactor this one


  discard = () => {
    const { deck, hand } = this.state;
    const newHand = hand.filter(card => !card.discard);
    const cardsNeeded = 5 - newHand.length;
    this.dealCards(cardsNeeded, newHand, deck);
  };

  toggleModal =(event)=> {
    const name = event.target.name
    this.setState(prevState=>({[name]: !prevState[name]}))
  }

  updateDeal() {
    this.setState(prevState => ({ isFirstDeal: !prevState.isFirstDeal }));
  }

  judgeHand = () => {
    const result = cardLogic(this.state.hand).handValue;
    const overallResult = payTable[result]
    this.setState(
      prevState => ({
        bankroll: prevState.bankroll + overallResult * this.state.betAmount
      })
    );
    this.updateDeal();
  };

  render() {
    const {
      betAmount,
      hand,
      bankroll,
      isFirstDeal,
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
          />
          <Result showResult={showResult} isFirstDeal={isFirstDeal} hand={hand}/>
          <hr className="horizontal-line" />
          <CardContainer
            hand={hand}
            discardToggle={this.discardToggle}
            isFirstDeal={isFirstDeal}
          />
        </div>
        <hr className="horizontal-line" />
        {showHelpModal ? (
          <HelpModal
            showHelpModal={this.state.showHelpModal}
            // toggleHelpModal={this.toggleHelpModal}
            toggleModal={this.toggleModal}
          />
        ) : null}
        {showStrategyModal ? (
          <StrategyModal
            showStrategyModal={this.state.showStrategyModal}
            // toggleStrategyModal={this.toggleStrategyModal}
            toggleModal={this.toggleModal}
          />
        ) : null}
        <ButtonLine
          // toggleStrategyModal={this.toggleStrategyModal}
          // toggleHelpModal={this.toggleHelpModal}
          toggleModal={this.toggleModal}
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
