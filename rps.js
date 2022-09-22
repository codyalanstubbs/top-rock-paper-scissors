// No input
// Randomly select 'Rock', 'Paper', or 'Scissors'
// Return result
const CHOICES = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

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
        tieScore++;
        document.querySelector('.tieScore').textContent  = tieScore;
        return `Tie!`;
    } else if ( // If player wins, add point and return "You Win! ${playerSelection} beats ${computerSelection}"
        (playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')
    ) {
        playerScore++;
        document.querySelector('.playerScore').textContent = playerScore;
        return `You win this round! ${playerSelection} beats ${computerSelection}`;
    } else { // if computer wins, add point and return "You Lose! ${computerSelection} beats ${playerSelection}"
        computerScore++;
        document.querySelector('.computerScore').textContent = computerScore;
        return `You lose this round! ${computerSelection} beats ${playerSelection}`;
    }
}

const buttons = document.querySelectorAll('button');
const body = document.querySelector('body');
let result = document.createElement('div');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        
        if (computerScore === 5) {
            result.textContent = "The computer won the game!";
            body.appendChild(result);
        } else if (playerScore === 5) {
            result.textContent = "YOU WON THE GAME!";
            body.appendChild(result);
        } else {
            result.textContent = playRound(button.id, getComputerChoice());
            body.appendChild(result);
        }
        
    });
})