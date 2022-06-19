let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 10)
}

const compareGuesses = (human, computer, secret) => {
    let userGuess = Math.abs(human - secret);
    let compGuess = Math.abs(computer - secret)
    if (userGuess < compGuess){
        return true
    } else if (userGuess > compGuess) {
        return false
    } else if (userGuess === compGuess) {
        return true
    }
}

const updateScore = (winner) => {
    if ('human' === winner){
        humanScore++
    } else if ('computer' === winner){
        computerScore++
    }
}

const advanceRound = () => {
    currentRoundNumber++
}