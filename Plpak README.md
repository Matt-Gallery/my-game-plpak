# Plpak
![playing cards](https://images.unsplash.com/photo-1541278107931-e006523892df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheWluZyUyMGNhcmRzfGVufDB8fDB8fHww)

## Project Description

#### My game is called Plpak. It is a Czech card game similar to Spades or Hearts. My web version will be a single player game with a running score and a winner determined at the end (the human player or one of the 3 computer players).

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

* Each of the 5 hands that each player deals has its own rules and objective:

## MVP Built
1. Don't take any `Tricks`- the objective is to avoid taking any tricks
    * Each `trick` is worth *1 point*
    * The player to the left of the dealer leads off play
    * Each subsequent player must play a card of the **lead suit** if they have a card of that suit in their hand
    * If a player doesn't have a card of the **lead suit** they may play a card of any suit
    * Whichever player plays the highest card of the **lead suit** takes the `trick`
    * Whichever player took the `trick` leads of the next **round of play**
    * The round is scored by assigning *1 point* per `trick` taken by each player
    * After all 8 rounds have been played the dealer deals the next hand

### Game Logic
* Simulate players decide what card to play based on the following logic
    * If they have a single card of any suit(s) that is a 10 or lower they may randomly choose between playing that, or
    * the lowest card of the suit of which they have the most cards


## Future Development
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