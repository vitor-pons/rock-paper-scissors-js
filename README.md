# Rock, Paper, Scissors Game

A browser-based Rock, Paper, Scissors game built using plain JavaScript. It lets a user play multiple rounds against an automated computer opponent, tracking wins, losses, and draws dynamically across an interactive game session.

## Features

- **Score Tracking**: The application persistently updates and shows your total wins, losses, and draws directly inside the menu prompt.
- **Randomized AI Opponent**: Uses statistical logic splits (`Math.random()`) to divide a 0-100 range into equal 33.3% probabilities for Rock, Paper, or Scissors.
- **Input Filtering**: Includes a validation gate (`isDataValid`) that safely flags typos or invalid text inputs, bypassing the end-of-game prompt so you don't lose your score progress.
- **Modular Architecture**: Built with highly focused single-responsibility functions (`getComputerPick`, `getUserPick`, `comparePicks`), making the control loop incredibly straightforward to read.

## How It Works Under the Hood

1. **The Game Loop**: Runs on a `while (playAgain !== false)` statement. It initializes a validation flag to `true` at the start of every single round.
2. **Graceful Cancellation**: If you click **Cancel** on the main weapon choice prompt, `choice` reads as `null`. The game senses this instantly, alerts a custom thank you message, and safely triggers a loop `break`.
3. **Typo Handling**: If you type an invalid input (like `"rocc"`), the switch statement hits its `default` safety net, updates `isDataValid = false`, alerts you of the mistake, and skips right past the "Do you want to play again?" window to let you retry immediately.
