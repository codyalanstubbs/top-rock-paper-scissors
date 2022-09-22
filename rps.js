// No input
// Randomly select 'Rock', 'Paper', or 'Scissors'
// Return result
const CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let random123 = Math.floor(Math.random() * 3);
    return CHOICES[random123];
}

// Two parameters: playerSelection & computerSelection
// Run only a single round of the game
function playRound(playerSelection, computerSelection) {

    // Process parameters to make case insensitive, e.g.: both to lowercase
    playerSelection = playerSelection.toLowerCase();

    // Compare the two parameters to determine winner
    if (playerSelection === computerSelection) {
        return `Tie!`;
    } else if ( // If player wins, return "You Win! ${playerSelection} beats ${computerSelection}"
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        return `You win this round! ${playerSelection} beats ${computerSelection}`;
    } else { // if computer wins, return "You Lose! ${computerSelection} beats ${playerSelection}"
        return `You lose this round! ${computerSelection} beats ${playerSelection}`;
    }

}


// Constraint 1: Allow user to play a 5 round game
// Constraint 2: Keep score 
// Constraint 3: Report winner or loser at end of game
function game() {
    let roundNumber;
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    let playerSelection;
    let computerSelection;


    playerSelection = prompt(`Choose rock, paper, or scissors.`);

    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    // Process their selection using playRound()
    console.log(playRound(playerSelection, computerSelection));

    // Tally score for user, computer, and tie
    if (playerSelection === computerSelection) { // If a tie, then tally a tie point
        tieScore++;
    } else if ( // If player wins, return give them a point
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        playerScore++;
    } else { // if computer wins, then give it a point
        console.log("C: " + computerSelection + " and P: " + playerSelection);
        computerScore++;
    }

    if (roundNumber === 5) {
        if (playerScore > computerScore) {
            return console.log("YOU WON THE GAME!");
        } else if (playerScore < computerScore) {
            return console.log("The computer won the game!");
        } else {
            return console.log("The game ends in a tie!");
        }
    }

}

