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
const suits = ["clubs", "diamonds", "hearts", "spades", ];
const icons = ["♣", "♦", "♥", "♠", ];

function generateDeck() {
  let deck = [];
  let counter = 0
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < names.length; j++) {
      deck.push({
        id: ++counter,
        name: names[j],
        suit: suits[i],
        image: images[j],
        value: j + 2,
        icon: icons[i],
        discard: false,
        cardFront:
          j + 2 > 10
            ? `${names[j].toLowerCase()}_of_${suits[i]}.png`
            : `${images[j]}_of_${suits[i]}.png`,
        cardBack: "back.png"
      });
    }
  }
  return deck;
}

function shuffleDeck(deck) {
  // Using Fisher-Yates algo
  for (let i = 0; i < 2000; i++) {
    const index1 = Math.floor(Math.random() * 52);
    const index2 = Math.floor(Math.random() * 52);
    const temp = deck[index1];
    deck[index1] = deck[index2];
    deck[index2] = temp;
  }
  return deck;
}

function sortHand(hand) {
  return hand.sort(function(a, b) {
    return a.value - b.value;
  });
}

export { generateDeck, shuffleDeck, sortHand };
