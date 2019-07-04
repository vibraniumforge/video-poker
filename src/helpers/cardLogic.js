const royalFlush = hand => {
  const values = hand.map(card => card.value);
  return flush(hand) && areEqual(values, ["10", "11", "12", "13", "14"]);
};

const straightFlush = hand => {
  return flush(hand) && straight(cardObj);
};

const mostOfAKind = cardObj => {
  const values = Object.values(cardObj);
  return values.sort((a, b) => a - b)[values.length - 1];
};

const fullHouse = cardObj => {
  const values = Object.values(cardObj);
  return values.length === 2;
};

const flush = hand => {
  const suits = hand.map(card => card.suit);
  const set = new Set(suits);
  return set.size === 1;
};

const straight = cardObj => {
  const values = Object.keys(cardObj);
  values.sort((a, b) => a - b);
  if (values.length !== 5) return false;
  else if (areEqual(values, ["2", "3", "4", "5", "14"])) return true;
  else if (values[4] - values[0] === 4) return true;
  else return false;
};

const areEqual = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const twoPairs = cardObj => {
  const values = Object.values(cardObj);
  const countObj = values.reduce((countObj, value) => {
    if (countObj[value]) {
      countObj[value]++;
    } else {
      countObj[value] = 1;
    }
    return countObj;
  }, {});
  return countObj[2] === 2;
};

const twoJacks = cardObj => {
  for (let key in cardObj) {
    if (key >= 11 && cardObj[key] === 2) return true;
  }
  return false;
};

const cardObj = hand => {
  return hand.reduce((cardObj, card) => {
    if (cardObj[card.value]) {
      cardObj[card.value]++;
    } else {
      cardObj[card.value] = 1;
    }
    return cardObj;
  }, {});
};

export default hand => {
  const cards = cardObj(hand);
  if (royalFlush(hand)) {
    return { text: "You have a Royal Flush!", handValue: "Royal Flush" };
  } else if (straightFlush(hand)) {
    return { text: "You have a Straight Flush!", handValue: "Straight Flush" };
  } else if (mostOfAKind(cards) === 4) {
    return { text: "You have a 4 of a Kind!", handValue: "4 of a Kind" };
  } else if (fullHouse(cards)) {
    return { text: "You have a Full House!", handValue: "Full House" };
  } else if (flush(hand)) {
    return { text: "You have a Flush!", handValue: "Flush" };
  } else if (straight(cards)) {
    return { text: "You have a Straight!", handValue: "Straight" };
  } else if (mostOfAKind(cards) === 3) {
    return { text: "You have a 3 of a Kind!", handValue: "3 of a Kind" };
  } else if (twoPairs(cards)) {
    return { text: "You have Two Pairs!", handValue: "Two Pairs" };
  } else if (twoJacks(cards)) {
    return {
      text: "You have a pair of Jacks or Better",
      handValue: "One Pair - Jacks or Better"
    };
  } else return { text: "You have nothing", handValue: "Nothing" };
};

export {
  royalFlush,
  straightFlush,
  mostOfAKind,
  fullHouse,
  flush,
  straight,
  areEqual,
  twoPairs,
  twoJacks,
  cardObj
};
