/*-------------------------------- Constants --------------------------------*/
// Perplexity AI
const deck = [
  { value: "7", suit: "♥" },
  { value: "8", suit: "♥" },
  { value: "9", suit: "♥" },
  { value: "10", suit: "♥" },
  { value: "J", suit: "♥" },
  { value: "Q", suit: "♥" },
  { value: "K", suit: "♥" },
  { value: "A", suit: "♥" },
  { value: "7", suit: "♦" },
  { value: "8", suit: "♦" },
  { value: "9", suit: "♦" },
  { value: "10", suit: "♦" },
  { value: "J", suit: "♦" },
  { value: "Q", suit: "♦" },
  { value: "K", suit: "♦" },
  { value: "A", suit: "♦" },
  { value: "7", suit: "♣" },
  { value: "8", suit: "♣" },
  { value: "9", suit: "♣" },
  { value: "10", suit: "♣" },
  { value: "J", suit: "♣" },
  { value: "Q", suit: "♣" },
  { value: "K", suit: "♣" },
  { value: "A", suit: "♣" },
  { value: "7", suit: "♠" },
  { value: "8", suit: "♠" },
  { value: "9", suit: "♠" },
  { value: "10", suit: "♠" },
  { value: "J", suit: "♠" },
  { value: "Q", suit: "♠" },
  { value: "K", suit: "♠" },
  { value: "A", suit: "♠" },
];

const cardStyle ={
  "♥": "hearts",
  "♦": "diamonds",
  "♣": "clubs",
  "♠": "spades"
}

/*---------------------------- Variables (state) ----------------------------*/
// What cards are remaining in each player's hand
let playerHands = {
  player1: [],
  player2: [],
  player3: [],
  player4: [],
};
// What cards are currently in play
let inPlay = ["", "", "", ""];
// //Each trick and which player took it (or discard after it's been scored?)

// The current score for each player
let score = ["", "", "", ""];
// Is it time to deal a new hand?
let newHand = false;
// is the game complete?
let gameEnd = false;
// //Display result message? - either who won or who tied

/*------------------------ Cached Element References ------------------------*/
const dealButtonEl = document.querySelector(".deal");
const cardsEl = document.querySelector(".human");
// const handEl =

/*-------------------------------- Functions --------------------------------*/
// Handle player clicking deal and starting the game

// init();

// function init() {
//   dealCards();
//   newHand = false;
//   gameEnd = false;
// }

//Perplexity AI
function dealCards() {
  if (playerHands.player1.length !== 0) {
    return
  }
  // Shuffle the deck using Fisher-Yates algorithm
  for (let i = deck.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  // Distribute cards to players
  const players = Object.keys(playerHands);
  let cardIndex = 0;

  while (cardIndex < deck.length) {
    for (let player of players) {
      if (cardIndex < deck.length && playerHands[player].length < 8) {
        playerHands[player].push(deck[cardIndex]);
        cardIndex++;
      }
    }
  }

  displayCardsOnTable();
};

function displayCardsOnTable() {
  const topHand = document.querySelector(".tophand");
  playerHands["player3"].forEach((hand) => {
    const html = `<img class="back card" src="static assets/playing card back.png" alt="face down card image" data-value=${hand.value} data-suit=${hand.suit}/>`;
    topHand.insertAdjacentHTML("beforeend", html);
  });

  const player2Hand = document.querySelector(".hand-2");
  playerHands["player2"].forEach((hand) => {
    const html = `<img class="back card" src="static assets/playing card back.png" alt="face down card image" data-value=${hand.value} data-suit=${hand.suit}/>`;
    player2Hand.insertAdjacentHTML("beforeend", html);
  });

  const player4Hand = document.querySelector(".hand-4");
  playerHands["player4"].forEach((hand) => {
    const html = `<img class="back card" src="static assets/playing card back.png" alt="face down card image" data-value=${hand.value} data-suit=${hand.suit}/>`;
    player4Hand.insertAdjacentHTML("beforeend", html);
  });

  const humanHand = document.querySelector(".human");
  playerHands["player1"].forEach((hand) => {
    const html = `<div class="card ${cardStyle[hand.suit]}" data-value=${hand.value}><span>${hand.value}</span>${hand.suit}</div>`
    humanHand.insertAdjacentHTML("beforeend", html);
  });
}

// function render() {
//   updateBoard();
//   updateMessage();
// }

// function updateBoard() {
//   board.forEach((cell, idx) => {
//     squareEls[idx].textContent = cell;
//   });
// }

// function updateMessage() {
//   if (winner) {
//     messageEl.textContent = `${winner} wins!`;
//   } else if (tie) {
//     messageEl.textContent = "It's a tie!";
//   } else {
//     messageEl.textContent = `${turn}'s turn`;
//   }
// }

// Handle player clicking a card to play
// Logic to determine what card the 3 computer players play
// Display messages to prompt player to play their turn and the result message - either who won or who tied

/*----------------------------- Event Listeners -----------------------------*/
// Player clicks the start/restart button
dealButtonEl.addEventListener("click", dealCards);

// Player clicks a card to be played
cardsEl.forEach((card) => {
  card.addEventListener("click", handleClick);
});
