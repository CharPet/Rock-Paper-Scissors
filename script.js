function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
} 

const computerChoice = getComputerChoice();
// console.log(computerChoice);


function getPlayerChoice()
{
    const playerSelection = prompt("Make a choice:", "Rock, Paper or Scissors");
    if (playerSelection !== null)
    {
        let playerSelectionConverted =  playerSelection.toLowerCase();
        // console.log(playerSelectionConverted);
        return playerSelectionConverted;
    }
}

const playerChoice = getPlayerChoice();
// console.log(playerChoice);


// function aRound(cs, ps)
// {
//     if (computerChoice === playerChoice)

// }

