import React from "React";

class ResultBox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div id="result">
          <p>{cardLogic(hand)}</p>
          <p>You have {this.props.bankroll} dollars. </p>
        </div>
      </React.Fragment>
    );
  }
}

export default ResultBox;
