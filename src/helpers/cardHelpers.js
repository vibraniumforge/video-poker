const names = [
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Jack",
  "Queen",
  "King",
  "Ace"
];
// prettier-ignore
const images = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
const suits = ["hearts", "diamonds", "spades", "clubs"];
const icons = ["♥", "♦", "♠", "♣"];

function generateDeck() {
  let deck = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < names.length; j++) {
      deck.push({
        name: names[j],
        suit: suits[i],
        image: images[j],
        value: j + 2,
        icon: icons[i],
        discard: false,
        cardFront: `${suits[i]}_${images[j]}.png`,
        cardBackDark: "back_dark.png",
        cardBackLight: "back_light.png"
      });
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  // Using Fisher-Yates algo
  for (let i = 0; i < 2000; i++) {
    let index1 = Math.floor(Math.random() * 52);
    let index2 = Math.floor(Math.random() * 52);
    let temp = deck[index1];
    deck[index1] = deck[index2];
    deck[index2] = temp;
  }
  return deck;
}

function sortHand(hand) {
  return hand.sort(function(a, b) {
    if (a.value > b.value) return 1;
    else if (a.value < b.value) return -1;
    return 0;
  });
}

export { generateDeck, shuffleDeck, sortHand };
