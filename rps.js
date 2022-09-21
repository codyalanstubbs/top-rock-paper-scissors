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