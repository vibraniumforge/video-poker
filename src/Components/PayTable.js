import React from "react";

const PayTable = props => {
  const coinAmounts= [1, 2, 3, 4, 5]
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
  const { betAmount } = props;
  const Amount = ({ betAmount, baseAmount, amount }) => (
    <td
      className={
        betAmount === amount ? "paytable-selected" : "paytable-not-selected"
      }
    >
      {baseAmount * amount}
    </td>
  );

  const Row = ({ hand, baseAmount, betAmount }) => (
    <tr>
      <td className="paytable-hand-name">{hand}</td>
      <Amount
        amount={coinAmounts[0]}
        betAmount={betAmount}
        baseAmount={baseAmount}
      />
      <Amount
        amount={coinAmounts[1]}
        betAmount={betAmount}
        baseAmount={baseAmount}
      />
      <Amount
        amount={coinAmounts[2]}
        betAmount={betAmount}
        baseAmount={baseAmount}
      />
      <Amount
        amount={coinAmounts[3]}
        betAmount={betAmount}
        baseAmount={baseAmount}
      />
      <Amount
        amount={coinAmounts[4]}
        betAmount={betAmount}
        baseAmount={baseAmount}
      />
    </tr>
  );

  // export default ({ betAmount }) => (
  return (
    <div id="pay-table" className="flex-container">
      <table>
        <thead>
          <tr>
            <th className="paytable-hand-name">Hand</th>
            <th
              className={
                betAmount === coinAmounts[0]
                  ? "paytable-selected"
                  : "paytable-not-selected"
              }
            >
              <p>
                {coinAmounts[0]} Coin{coinAmounts[0] === 1 ? "" : "s"}
              </p>
            </th>
            <th
              className={
                betAmount === coinAmounts[1]
                  ? "paytable-selected"
                  : "paytable-not-selected"
              }
            >
              <p>{coinAmounts[1]} Coins</p>
            </th>
            <th
              className={
                betAmount === coinAmounts[2]
                  ? "paytable-selected"
                  : "paytable-not-selected"
              }
            >
              <p>{coinAmounts[2]} Coins</p>
            </th>
            <th
              className={
                betAmount === coinAmounts[3]
                  ? "paytable-selected"
                  : "paytable-not-selected"
              }
            >
              <p>{coinAmounts[3]} Coins</p>
            </th>
            <th
              className={
                betAmount === coinAmounts[4]
                  ? "paytable-selected"
                  : "paytable-not-selected"
              }
            >
              <p>{coinAmounts[4]} Coins</p>
            </th>
          </tr>
        </thead>

        <tbody>
          <Row
            hand={Object.keys(payTable)[0]}
            baseAmount={Object.values(payTable)[0]}
            betAmount={betAmount}
          />
          <Row
            hand={Object.keys(payTable)[1]}
            baseAmount={Object.values(payTable)[1]}
            betAmount={betAmount}
          />
          <Row
            hand={Object.keys(payTable)[2]}
            baseAmount={Object.values(payTable)[2]}
            betAmount={betAmount}
          />
          <Row
            hand={Object.keys(payTable)[3]}
            baseAmount={Object.values(payTable)[3]}
            betAmount={betAmount}
          />
          <Row
            hand={Object.keys(payTable)[4]}
            baseAmount={Object.values(payTable)[4]}
            betAmount={betAmount}
          />
          <Row
            hand={Object.keys(payTable)[5]}
            baseAmount={Object.values(payTable)[5]}
            betAmount={betAmount}
          />
          <Row
            hand={Object.keys(payTable)[6]}
            baseAmount={Object.values(payTable)[6]}
            betAmount={betAmount}
          />
          <Row
            hand={Object.keys(payTable)[7]}
            baseAmount={Object.values(payTable)[7]}
            betAmount={betAmount}
          />
          <Row
            hand={Object.keys(payTable)[8]}
            baseAmount={Object.values(payTable)[8]}
            betAmount={betAmount}
          />
        </tbody>
      </table>
    </div>
  );
};

export default PayTable;
