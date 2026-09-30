function getComputerChoice() {
    const randomNum = Math.random()

    if (randomNum < 1 / 3) {
        return "rock"
    } else if (randomNum < 2 / 3) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    const choice = prompt("Rock, paper, or scissors?")
    return choice
}

function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()

        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
        } else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! Rock beats Scissors")
            humanScore++
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! Paper beats Rock")
            humanScore++
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! Scissors beats Paper")
            humanScore++
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`)
            computerScore++
        }
    }

    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())
    playRound(getHumanChoice(), getComputerChoice())

    console.log(`Human Score: ${humanScore}`)
    console.log(`Computer Score: ${computerScore}`)

    if (humanScore > computerScore) {
        console.log("You win the game!")
    } else if (computerScore > humanScore) {
        console.log("Computer wins the game!")
    } else {
        console.log("The game is a tie!")
    }
}

playGame()