# Rock, Paper, Scissors Game

A browser-based Rock, Paper, Scissors game built using plain JavaScript. It lets a user play multiple rounds against an automated computer opponent, tracking wins, losses, and draws across an interactive game session.

## Features

* **Score Tracking**: Wins, losses, and draws are tallied and displayed after every round via `showResults()`.
* **Randomized AI Opponent**: Uses `Math.random()` split into three ~33.3% ranges (0–100) to pick Rock, Paper, or Scissors.
* **Input Filtering**: User input is trimmed and lowercased before comparison, so minor formatting differences (extra spaces, capitalization) don't count as invalid. Genuinely invalid entries are caught by a lookup miss and prompt the user to try again without ending the game.
* **Pure Outcome Logic**: Win/loss/draw resolution is driven by a single `OUTCOMES` lookup table rather than repeated conditional branches, making the rules easy to read and verify at a glance.
* **Modular Architecture**: Built with small, focused, mostly pure functions (`getComputerPick`, `getUserPick`, `comparePicks`) that return values instead of mutating shared state — making each piece independently testable.

## How It Works Under the Hood

1. **The Game Loop**: Runs on `while (playAgain)`, initialized to `true`. Each iteration prompts for a pick, gets the computer's pick, compares them, and asks whether to continue.
2. **Graceful Cancellation**: If the user clicks Cancel on the pick prompt, `getUserPick()` returns `null`. The loop detects this and breaks immediately, skipping straight to the goodbye message.
3. **Outcome Resolution**: `comparePicks(userPick, computerPick)` looks up the result in the `OUTCOMES` matrix and returns `'won'`, `'lost'`, `'draw'`, or `undefined` for an invalid pick. `runGame` branches on that return value to update the score, show a message, and decide whether to re-prompt.
4. **Invalid Input Handling**: If the user's pick isn't a valid key in `OUTCOMES` (e.g. a typo), `comparePicks` returns `undefined`. The game alerts the user and loops back to re-prompt immediately, without asking "play again?" or affecting the score.
