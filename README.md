# Memory Game

This is a simple memory card matching game built with HTML, CSS, and JavaScript. The objective is to match pairs of cards with identical images by flipping them.

## Features
- Interactive card-flipping animation
- Shuffle functionality for random card order
- Match detection and visual effects for matched cards
- "Reset Game" button to restart with a reshuffled deck

## Technologies Used
- HTML
- CSS
- JavaScript

## Game Rules
1. Click on a card to flip it over.
2. Flip a second card to find a matching pair.
3. If the cards match, they remain face up with a green border.
4. If the cards do not match, they flip back after a short delay.
5. Continue until all pairs are matched.

## Folder Structure
- `index.html` - Main HTML file containing the structure of the game.
- `styles.css` - CSS file for game styling and animations.
- `index.js` - JavaScript file for game logic, including shuffle, flip, and match checking functions.
- `imgs/` - Folder containing images used on the card backs.

## Installation and Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/memory-game.git
   
2. Open `index.html` in a browser to start playing the game.

## How It Works
- **Shuffle Function**: Randomizes card positions at the start and on reset.
- **Flip Logic**: Adds a `.is-flipped` class to reveal card backs.
- **Match Detection**: Compares the data IDs of flipped cards. Matched pairs are styled with a green border.
- **Reset Game**: Clears all matches and reshuffles cards.

## Screenshots
![image](https://github.com/user-attachments/assets/836304dc-cc7e-4f8e-928d-d03b4a9b1304)

