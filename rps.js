// No input
// Randomly select 'Rock', 'Paper', or 'Scissors'
// Return result
const CHOICES = ['Rock', 'Paper', 'Scissors'];
function getComputerChoice() {
    let random123 = Math.floor(Math.random() * 3);
    return CHOICES[random123];
}

// Two parameters: playerSelection & computerSelection
// Run only a single round of the game
function playRound(playerSelection, computerSelection) {
    
    // Process parameters to make case insensitive, e.g.: both to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    // Compare the two parameters to determine winner
    if (playerSelection === computerSelection) {
        return `Tie!`;
    } else if ( // If player wins, return "You Win! ${playerSelection} beats ${computerSelection}"
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else { // if computer wins, return "You Lose! ${computerSelection} beats ${playerSelection}"
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } 

}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

// Constraint 1: Allow user to play a 5 round game
// Constraint 2: Keep score 
// Constraint 3: Report winner or loser at end of game
// Give user directions
// Ask user for their selection
// Process their selection using playRound()
// Tally score for user, computer, and tie
// Return result of round and total scores tally
// After 5 rounds declare a tie or winner  