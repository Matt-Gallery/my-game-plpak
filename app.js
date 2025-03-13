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

const cardStyle = {
  "♥": "hearts",
  "♦": "diamonds",
  "♣": "clubs",
  "♠": "spades",
};
const cardRanks = {
  7: 1,
  8: 2,
  9: 3,
  10: 4,
  J: 5,
  Q: 6,
  K: 7,
  A: 8,
};
/*---------------------------- Variables (state) ----------------------------*/
// What cards are remaining in each player's hand
let playerHands = {
  player1: [],
  player2: [],
  player3: [],
  player4: [],
};

let orderOfPlay = [];
// What cards are currently in play
let inPlay = [];
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
const cardEls = document.querySelector(".human").childNodes;
const player1El = document.querySelector(".player1");
// const handEl =

/*-------------------------------- Functions --------------------------------*/
// Handle player clicking deal and starting the game

// init();

// function init() {
//   dealCards();
//   newHand = false;
//   gameEnd = false;
//   orderOfPlay = ['1', '2', '3', '0'];
// }

function dealCards() {
  if (playerHands.player1.length !== 0) {
    return;
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
        const card = {...deck[cardIndex], player: player};  // Add 'player' key
        playerHands[player].push(card);
        cardIndex++;
      }
    }
  }

  displayCardsOnTable();
}

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
    const html = `<div class="card ${cardStyle[hand.suit]}" data-value=${
      hand.value
    }><span>${hand.value}</span>${hand.suit}</div>`;
    humanHand.insertAdjacentHTML("beforeend", html);
  });

  /*---- Player 2 plays first card - lowest card of the suit they have the most of -----*/
  function findLowestCardFromMostCommonSuits(playerHands) {
    const player2Cards = playerHands.player2;

    // Create a suit counter object
    const suitCount = {
      "♣": 0,
      "♠": 0,
      "♥": 0,
      "♦": 0,
    };
    // Count occurrences of each suit
    for (const card of player2Cards) {
      suitCount[card.suit]++;
    }
    // Find the maximum count
    const maxCount = Math.max(...Object.values(suitCount));

    // Find all suits with the maximum count
    const suitsWithMostElements = Object.entries(suitCount)
      .filter(([suit, count]) => count === maxCount)
      .map(([suit]) => suit);

    // Find the lowest card from the most common suits
    let lowestCard = null;
    let lowestRank = Infinity;

    for (const card of player2Cards) {
      if (suitsWithMostElements.includes(card.suit)) {
        const rank = cardRanks[card.value];
        if (rank < lowestRank) {
          lowestRank = rank;
          lowestCard = card;
        }
      }
    }
    return {
      lowestCard: lowestCard,
    };
  }
  // Example usage:
  const firstPlay = findLowestCardFromMostCommonSuits(playerHands);
  console.log("Result:", firstPlay);

  /*---- Remove the first card that Player 2 played from their hand -----*/
  function removeCardFromPlayer2Hand(playerHands, firstPlay) {
    const player2Hand = playerHands.player2;
    const cardToRemove = firstPlay.lowestCard;

    const index = player2Hand.findIndex(
      (card) =>
        card.value === cardToRemove.value && card.suit === cardToRemove.suit
    );

    if (index !== -1) {
      player2Hand.splice(index, 1);
      inPlay.push(firstPlay.lowestCard);
      console.log(`Removed card: ${cardToRemove.value}${cardToRemove.suit}`);
    }
  }
  // Example usage:
  removeCardFromPlayer2Hand(playerHands, firstPlay);
  console.log("Updated player2 hand:", playerHands.player2);

  /*---- Player 3 plays first card - the lowest card of the same suit that player 2 played,
  else their highest card -----*/
  function selectCardFromPlayer3(playerHands, firstPlay) {
    console.log(firstPlay);
    const player3Cards = playerHands.player3;
    const targetSuit = firstPlay.lowestCard.suit;

    // Filter cards with the same suit
    const sameRankCards = player3Cards.filter(
      (card) => card.suit === targetSuit
    );

    if (sameRankCards.length > 0) {
      // Find the lowest card of the same suit
      return sameRankCards.reduce((lowest, current) =>
        cardRanks[current.value] < cardRanks[lowest.value] ? current : lowest
      );
    } else {
      // If no matching suit, return the highest value card
      return player3Cards.reduce((highest, current) =>
        cardRanks[current.value] > cardRanks[highest.value] ? current : highest
      );
    }
  }

  const player3Card = selectCardFromPlayer3(playerHands, firstPlay);
  console.log("Player 3 selected card:", player3Card);

  /*---- Remove the first card that Player 3 played from their hand -----*/
  // Example usage:
  function removeCardFromPlayer3Hand(playerHands, player3Card) {
    const player3Hand = playerHands.player3;

    const index = player3Hand.findIndex(
      (card) =>
        card.value === player3Card.value && card.suit === player3Card.suit
    );

    if (index !== -1) {
      player3Hand.splice(index, 1);
      inPlay.push(player3Card);
      console.log(
        `Removed card: ${player3Card.value}${player3Card.suit} from Player 3's hand`
      );
    }
  }

  // Example usage:
  removeCardFromPlayer3Hand(playerHands, player3Card);
  console.log("Updated player3 hand:", playerHands.player3);

  /*---- Player 4 plays first card - the lowest card of the same suit that player 2 played,
  else their highest card -----*/
  function selectCardFromPlayer4(playerHands, firstPlay) {
    const player4Cards = playerHands.player4;
    const targetSuit = firstPlay.lowestCard.suit;

    // Filter cards with the same suit
    const sameRankCards = player4Cards.filter(
      (card) => card.suit === targetSuit
    );

    if (sameRankCards.length > 0) {
      // Find the lowest card of the same suit
      return sameRankCards.reduce((lowest, current) =>
        cardRanks[current.value] < cardRanks[lowest.value] ? current : lowest
      );
    } else {
      // If no matching suit, return the highest value card
      return player4Cards.reduce((highest, current) =>
        cardRanks[current.value] > cardRanks[highest.value] ? current : highest
      );
    }
  }
  const player4Card = selectCardFromPlayer4(playerHands, firstPlay);
  console.log("Player 4 selected card:", player4Card);

  /*---- Remove the first card that Player 4 played from their hand -----*/
  function removeCardFromPlayer4Hand(playerHands, player4Card) {
    const player4Hand = playerHands.player4;

    const index = player4Hand.findIndex(
      (card) =>
        card.value === player4Card.value && card.suit === player4Card.suit
    );
    if (index !== -1) {
      player4Hand.splice(index, 1);
      inPlay.push(player4Card);
      console.log(
        `Removed card: ${player4Card.value}${player4Card.suit} from Player 4's hand`
      );
    }
  }
  // Example usage:
  removeCardFromPlayer4Hand(playerHands, player4Card);
  console.log("Updated player4 hand:", playerHands.player4);

  console.log(inPlay);

  function handleClick(event) {
    // UI
    const clickedCard = event.target;
    const humanHand = document.querySelector(".human");
    const player1Board = document.querySelector(".board .player1");
    humanHand.removeChild(clickedCard);
    player1Board.appendChild(clickedCard);
    clickedCard.style.pointerEvents = "none";

    // Game Logic
    const cardValue = clickedCard.dataset.value; // Value of card selected from HTML Element
    let cardType; // Generated by using the class from the HTML element

    for (let key in cardStyle) {
      console.log(cardStyle[key] === clickedCard.classList[1]);
      if (cardStyle[key] === clickedCard.classList[1]) {
        cardType = key;
      }
    }

    console.log(cardValue, cardType);
    // Need to find the index of the card value and type from player 1's hand
    const playerCardIndex = playerHands.player1.findIndex((currentCard) => {
      return currentCard.value === cardValue && currentCard.suit === cardType;
    });

    console.log(playerCardIndex);

    const playedCard = playerHands.player1.splice(playerCardIndex, 1)[0];

    playedCard.player = "player1"

    inPlay.push(playedCard);

    // Usage example:
    const highestInSuit = findHandLoser(inPlay, firstPlay);
    console.log("Highest card in suit:", highestInSuit);

  }

  /*---- Determine which Player lost the hand (who takes the trick) -----*/
  function findHandLoser(inPlay, firstPlay) {
    const targetSuit = firstPlay.lowestCard.suit;
    const sameSuitCards = inPlay.filter((card) => card.suit === targetSuit);

    return sameSuitCards.reduce((highest, current) => {
      return cardRanks[current.value] > cardRanks[highest.value]
        ? current
        : highest;
    });
  }

  // TODO: move this into its own function
  Array.from(cardEls).forEach((card) => {
    console.log(card);
    card.addEventListener("click", handleClick);
  });
}

/*----------------------------- Event Listeners -----------------------------*/
// Player clicks the start/restart button
dealButtonEl.addEventListener("click", dealCards);

// Player clicks a card to be played
