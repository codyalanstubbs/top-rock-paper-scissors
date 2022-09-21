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
// Process parameters to make case insensitive, e.g.: both to lowercase
// Compare the two parameters to determine winner
// If player wins, return "You Lose! ${playerSelection} beats ${computerSelection}"
// if computer wins, return "You Lose! ${computerSelection} beats ${playerSelection}"