# odin-rock-paper-scissor

A simple Rock Paper Scissors game created using JavaScript as part of The Odin Project Foundations course.

The game is played entirely through the browser console and uses prompts to get the player's choice.

## How the Game Works

The player chooses one of the following:

- Rock
- Paper
- Scissors

The computer randomly chooses Rock, Paper, or Scissors.

The winner of each round is determined using the normal Rock Paper Scissors rules:

- Rock beats Scissors
- Paper beats Rock
- Scissors beats Paper

The game plays for 5 rounds. After each round, the winner's score is increased. At the end of the five rounds, the final scores are displayed and the overall winner is announced.

## Features

- Random computer choice using `Math.random()`
- Player input using `prompt()`
- Case-insensitive player input
- Keeps track of the human and computer scores
- Plays 5 rounds
- Announces the result of each round
- Displays the final scores
- Announces the overall winner or a tie

## Technologies Used

- HTML
- JavaScript

## How to Run

1. Open `index.html` in a web browser.
2. Open the browser Developer Tools.
3. Go to the **Console** tab.
4. Enter `rock`, `paper`, or `scissors` when prompted.
5. Play through all 5 rounds.
6. Check the console to see the results and final score.

## Project Structure

```text
rock-paper-scissors/
├── index.html
├── script.js
└── README.md
```

## What I Learned

Through this project, I practiced:

- Creating and calling JavaScript functions
- Using parameters and return values
- Using `if`, `else if`, and `else` statements
- Generating random values with `Math.random()`
- Getting user input with `prompt()`
- Working with strings using `.toLowerCase()`
- Using variables to keep track of scores
- Using comparison and logical operators
- Using template literals
- Breaking a larger problem into smaller steps

## Acknowledgments

This project is part of [The Odin Project](https://www.theodinproject.com/) Foundations curriculum.