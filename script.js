let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return `You Win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    return `You Lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function displayResults(result) {
  const resultsDiv = document.getElementById('results');
  resultsDiv.textContent = result;
}

function displayScore() {
  const resultsDiv = document.getElementById('results');
  resultsDiv.textContent += `\n\nPlayer Score: ${playerScore} | Computer Score: ${computerScore}`;

  if (playerScore === 5) {
    resultsDiv.textContent += "\n\nCongratulations! You won the game!";
    resetGame();
  } else if (computerScore === 5) {
    resultsDiv.textContent += "\n\nSorry, you lost the game. Try again!";
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
}

function game(playerSelection) {
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  displayResults(result);
  displayScore();
}

// Attach event listeners to the buttons
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

rockButton.addEventListener('click', () => game('rock'));
paperButton.addEventListener('click', () => game('paper'));
scissorsButton.addEventListener('click', () => game('scissors'));
