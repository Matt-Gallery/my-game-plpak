/*-------------------------------- Constants --------------------------------*/
// all 32 cards - Perplexity AI

const deck = {
  hearts: [
    { value: "7", suit: "heart" },
    { value: "8", suit: "heart" },
    { value: "9", suit: "heart" },
    { value: "10", suit: "heart" },
    { value: "J", suit: "heart" },
    { value: "Q", suit: "heart" },
    { value: "K", suit: "heart" },
    { value: "A", suit: "heart" },
  ],
  diamonds: [
    { value: "7", suit: "diamond" },
    { value: "8", suit: "diamond" },
    { value: "9", suit: "diamond" },
    { value: "10", suit: "diamond" },
    { value: "J", suit: "diamond" },
    { value: "Q", suit: "diamond" },
    { value: "K", suit: "diamond" },
    { value: "A", suit: "diamond" },
  ],
  clubs: [
    { value: "7", suit: "club" },
    { value: "8", suit: "club" },
    { value: "9", suit: "club" },
    { value: "10", suit: "club" },
    { value: "J", suit: "club" },
    { value: "Q", suit: "club" },
    { value: "K", suit: "club" },
    { value: "A", suit: "club" },
  ],
  spades: [
    { value: "7", suit: "spade" },
    { value: "8", suit: "spade" },
    { value: "9", suit: "spade" },
    { value: "10", suit: "spade" },
    { value: "J", suit: "spade" },
    { value: "Q", suit: "spade" },
    { value: "K", suit: "spade" },
    { value: "A", suit: "spade" },
  ],
};

/*---------------------------- Variables (state) ----------------------------*/
// What cards are remaining in each player's hand
let playerHands = {
    player1: ['' ,'', '', '', '', '', '', ''],
    player2: ['' ,'', '', '', '', '', '', ''],
    player3: ['' ,'', '', '', '', '', '', ''],
    player4: ['' ,'', '', '', '', '', '', ''],
};
// What cards are currently in play
let inPlay = ['', '', '', ''];
// //Each trick and which player took it (or discard after it's been scored?)

// The current score for each player
let score = ['', '', '', ''];
// Is it time to deal a new hand?
let newHand = 'false'
// is the game complete?
let gameEnd = 'false'
// //Display result message? - either who won or who tied

/*------------------------ Cached Element References ------------------------*/
const buttonEl = document.querySelector(".deal");
const cardsEl = document.querySelector()

/*-------------------------------- Functions --------------------------------*/
// Handle player clicking deal and starting the game
// Handle player clicking a card to play
// Logic to determine what card the 3 computer players play
// Display messages to prompt player to play their turn and the result message - either who won or who tied

/*----------------------------- Event Listeners -----------------------------*/
// Player clicks the start/restart button
// Player clicks a card to be played
