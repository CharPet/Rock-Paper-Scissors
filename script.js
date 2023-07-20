function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
} 

function getPlayerChoice()
{
    const playerChoice = prompt("Make a choice:", "Rock, Paper or Scissors");
    if (playerChoice !== null)
    {
        let playerChoiceConverted = playerChoice.toLowerCase();
        // console.log(playerChoiceConverted);
        return playerChoiceConverted;
    }
}

function playRound(playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        console.log("It's a tie!");
    }
    else if (playerSelection !== computerSelection)
    {
        if (playerSelection === "rock" && computerSelection === "paper")
        {
            console.log("The Computer wins! Paper beats Rock!");
        }
        else if (playerSelection === "rock" && computerSelection === "scissors")
        {
            console.log("The Player wins! Rock beats Scissors!");
        }
        else if (playerSelection === "paper" && computerSelection === "rock")
        {
            console.log("The Player wins! Paper beats Rock!");
        }
        else if (playerSelection === "paper" && computerSelection === "scissors")
        {
            console.log("The Computer wins! Scissors beats Paper!");
        }
        else if (playerSelection === "scissors" && computerSelection === "rock")
        {
            console.log("The Computer wins! Rock beats Scissors!");
        }
        else
        {
            console.log("The Player wins! Scissors beats Paper!");
        }
        
    }

}

const playerSelection = getPlayerChoice();
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

