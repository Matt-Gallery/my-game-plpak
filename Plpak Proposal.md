# Plpak
![playing cards](https://images.unsplash.com/photo-1541278107931-e006523892df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheWluZyUyMGNhcmRzfGVufDB8fDB8fHww)

## Project Description

#### My game is called Plpak. It is a Czech card game similar to Spades or Hearts. My web version will be a single player game with a running score and a winner determined at the end (the human player or one of the 3 computer players or a tie).

## Game Description

### Game Setup:

1. 4 players are required
2. The game is played with reqular playing cards with cards numbered 2 - 6 of each suit removed from the deck (no jokers)
3. The remaining 32 cards are all dealt out to the players for each hand - 8 per player
4. Each player deals 5 consecutive hands and then the deal rotates to the player to the left, for a total of 20 hands in the game

### Objective of the Game

* The objectvie is to end up with the fewest points
* Points are awarded based on the outcome of each hand

### Defenitions

* **Round of Play** - Each cycle of each player playing 1 card
* **Trick** - In each **round of play** the group of 4 cards played is a `Trick`
* **Lead Suit** - The suit of the first card played in each round of play

### Rules of Play:

#### MVP
* Each of the 5 hands that each player deals has its own rules and objective:
1. Don't take any `Tricks`- the objective is to avoid taking any tricks
        * Each `trick` is worth *1 point*
        * The player to the left of the dealer leads off play
        * Each subsequent player must play a card of the **lead suit** if they have a card of that suit in their hand
        * If a player doesn't have a card of the **lead suit** they may play a card of any suit
        * Whichever player plays the highest card of the **lead suit** takes the `trick`
        * Whichever player took the `trick` leads of the next **round of play**
        * The round is scored by assigning *1 point* per `trick` taken by each player
        * After all 8 rounds have been played the dealer deals the next hand

#### Stretch Goals
2. Don't take any `Hearts` - the objective is to avoid taking any cards in the heart suit
        * Each `heart` is worth *1 point*
        * The player to the left of the dealer leads off play
        * Each subsequent player must play a card of the **lead suit** if they have a card of that suit in their hand
        * If a player doesn't have a card of the **lead suit** they may play a card of any suit
        * Whichever player plays the highest card of the **lead suit** takes the `trick`
        * Whichever player took the `trick` leads of the next **round of play**
        * The round is scored by assigning *1 point* per `heart` taken by each player (taking tricks is irrelevant for scoring as long as they contain no `hearts`)
        * After all 8 rounds have been played the dealer deals the next hand
3. Don't take any `Queens` - the objective is to avoid taking any queen cards
        * Each `queen` is worth *2 points*
        * The player to the left of the dealer leads off play
        * Each subsequent player must play a card of the **lead suit** if they have a card of that suit in their hand
        * If a player doesn't have a card of the **lead suit** they may play a card of any suit
        * Whichever player plays the highest card of the **lead suit** takes the `trick`
        * Whichever player took the `trick` leads of the next **round of play**
        * The round is scored by assigning *2 points* per `queen` taken by each player (taking tricks is irrelevant for scoring as long as they contain no `queens`)
        * After all 8 rounds have been played the dealer deals the next hand
4. Don't take the `King of Hearts` - the objective is to avoid taking the `king of hearts`
        * The `king of hearts` is worth *8 points*
        * The player to the left of the dealer leads off play
        * The player leading off my not lead with a heart
        * Each subsequent player must play a card of the **lead suit** if they have a card of that suit in their hand
        * If a player doesn't have a card of the **lead suit** they may play a card of any suit
        * Whichever player plays the highest card of the **lead suit** takes the `trick`
        * Whichever player took the `trick` leads of the next **round of play**
        * The hand ends after a **round of play** where the `king of hearts` is played is complete
        * The round is scored by assigning *8 points* to the player who took the `king of hearts` (taking tricks is irrelevant for scoring as long as they don't contain the `king of hearts`)
        * After the **round of play** where the `king of hearts` is played is complete the dealer deals the next hand
5. `Solitaire` - the objective is to get rid of all the cards in your hand as quickly as possible
        * The player with the jack of spades leads off play
        * Play rotates to the left
        * The next player can play another one of the jacks (laid out next to the jack of spades), a 10 of spades or a queen of spades (build down/up from the jack of spades)
        * Each subsequent player can play a jack or can build up or down on the 4 sets of suited cards already played (ultimately building each complete suit up and down from the 4 jacks until all cards are played)
        * A player who is unable to play (because they have no jack and are blocked from building on the cards that have been played) is skipped
        * The round is scored by:
            * Subtracting 5 points from the player who got rid of all their cards first
            * Subtracting 3 points from the player who got rid of all their cards second
            * Subtracting 1 points from the player who got rid of all their cards third

* The game ends after all 20 hands have been played.  The winner is the the player with the fewest points

## User Stories

### MVP Goals
- As a player, I want to be able to play a game consisting of the 1st hand of Plpak (`tricks`), played for 4 hands
- As a player, I want to a playing area to be displayed in the center of the screen where the cards that are played in each round of play are rendered
- As a player, I want the first dealer to be selected randomly from the 4 players.
- As a player, I want each hand of the game to start with each player having 8 randomly dealt cards between 7 - A.  The human players cards are rendered face up at the bottom of the screen and the 3 computer players hands are rendered face down, 1 hand on each of the other 3 sides of the screen.
- As a player, I want game play to follow the correct sequence for each hand:
    - the first dealer deals 1 hand and then each subsequent player to the left becomes the dealer and deals 1 hand.
    - Once all 4 hands have been dealt the game ends.
- As a player, I want each player to play in the correct order:
    - the player to the left of the dealer starts each hand
    - after the first round of play in each hand the player who took the previous `trick` leads off the next round of play
    - Play continues until all cards have been played
- As a player, I want my 3 computer opponents to use basic logic for their strategy:
    - When leading off a round of play, the player randomly plays the 1st or 2nd lowest card of the suit of which they have the most cards
    - When not leading off a round of play:
        - if the player has cards of the **lead suit**, they play their higest card of that suit that is lower than the cards that have already been played
        - if the player doesn't have any cards of the **lead suit**:
            - if they have any A or K they play one randomly, else
            - if they have a single card 9 or greater of one suit they play it, else
            - they play their highest card 
- As a player, I want to know when it is my turn to play, and I want to click one of my cards to select it to be played.
- As a player, I want the game to be scored correctly and a running score to be kept and rendered on screen throughout the game:
    - 1 point per `trick` is aggregated to the player who takes it
- As a player, I want the player with the lowest score to be declared the winner at the end of the game, or a tie to be declared in the event of a tie
- As a player, I want a button to start a new game

### Stretch Goals
- As a player, I want my computer opponents to use advanced strategies that mimick human players as much as possible
- As a player, I want to be able to play hand number 2 (`hearts`) the Plpak card game to my web app.
- As a player, I want the following differences from MVP:
    - Each player will deal 2 hands, 1 of `tricks` and 1 of `hearts` for a total of 8 hands in the game
    - As a player, for each `hearts` hand I want I want my 3 computer opponents to use basic logic for their strategy:
        - When leading off a round of play, if the player has the 7, 8, or 9 of hearts, they play the lowest one
        - When not leading off a round of play:
            - if the player has cards of the **lead suit**, they play their higest card of that suit that is lower than the cards that have already been played
         - if the player doesn't have any cards of the **lead suit**:
            - they play the highest heart that they have, else
            - they play the highest card they have
- As a player, I want the game to be scored correctly and a running score to be kept and rendered on screen throughout the game:
    - 1 point per `trick` is aggregated to the player who takes it
    - 1 point per `heart` is aggregated to the player who takes it

## Wire Frames
### Game play look
![image](https://github.com/Matt-Gallery/my-game-plpak/blob/main/static%20assets/Plpak%20Game%20Board.png?raw=true)

## Pseudocode
```js
/*-------------------------------- Constants --------------------------------*/
// all 32 cards

/*---------------------------- Variables (state) ----------------------------*/
// What cards are remaining in each player's hand
// What cards are currently in play
// Each trick and which player took it (or discard after it's been scored?)
// The current score for each player
// which player's turn is it?
// Is it time to deal a new hand?
// is the game complete?
// Display result message? - either who won or who tied

/*-------------------------------- Functions --------------------------------*/
// Handle player clicking deal and starting the game
// Handle player clicking a card to play
// Logic to determine what card the 3 computer players play
// Display messages to prompt player to play their turn and the result message - either who won or who tied

/*----------------------------- Event Listeners -----------------------------*/
// Player clicks the start/restart button
// Player clicks a card to be played

```

## Timeline

| Day        |   | Task                               | Blockers | Notes/ Thoughts |
|------------|---|------------------------------------|----------|-----------------|
| Monday     |   | Create and present proposal        |          |                 |
| Tuesday    |   | Create HTML & CSS                  |          |                 |
| Wedenesday |   | Work on JavaScript                 |          |                 |
| Thursday   |   | Work on JavaScript                 |          |                 |
| Friday     |   | Test and finalize MVP              |          |                 |
| Saturday   |   | Work on stretch goals              |          |                 |
| Sunday     |   | Final testing and styling          |          |                 |
| Monday     |   | Present                            |          |                 |