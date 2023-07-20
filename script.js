function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
} 

const randomChoice = getComputerChoice();
// console.log(randomChoice);

function aRound()
{
    let playerSelection = prompt("Make a choice:", "Rock, Paper, Scissors");
    if (playerSelection !== null)
    {
        return playerSelection.toLowerCase();
    }

}

const playerChoice = aRound();
console.log(playerChoice);