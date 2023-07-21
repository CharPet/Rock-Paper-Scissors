let playerCounter = 0;
let computerCounter = 0;

function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    console.log("C:" + choices[randomIndex]);
    return choices[randomIndex];
} 

function getPlayerChoice()
{
    const playerChoice = prompt("Make a choice:", "Rock, Paper or Scissors");
    if (playerChoice !== null)
    {
        let playerChoiceConverted = playerChoice.toLowerCase();
        console.log("P:" + playerChoiceConverted);
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
            computerCounter++;
        }
        else if (playerSelection === "rock" && computerSelection === "scissors")
        {
            console.log("The Player wins! Rock beats Scissors!");
            playerCounter++;
        }
        else if (playerSelection === "paper" && computerSelection === "rock")
        {
            console.log("The Player wins! Paper beats Rock!");
            playerCounter++;
        }
        else if (playerSelection === "paper" && computerSelection === "scissors")
        {
            console.log("The Computer wins! Scissors beats Paper!");
            computerCounter++;
        }
        else if (playerSelection === "scissors" && computerSelection === "rock")
        {
            console.log("The Computer wins! Rock beats Scissors!");
            computerCounter++;
        }
        else
        {
            console.log("The Player wins! Scissors beats Paper!");
            playerCounter++;
        }
                
    }
}


function game()
{
    for (let i = 0; i < 5; i++)
    {   
        const playerSelection = getPlayerChoice();
        if (!playerSelection) 
        {
          console.log("Game canceled by the player.");
          return;  
        }
        const computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
    }
}
 
//console.log("P:" + playerSelection);
//console.log("C:" + computerSelection);
//playRound(playerSelection, computerSelection);
//console.log(playRound(playerSelection, computerSelection));


game();
//console.log(playerCounter + " and " + computerCounter);


if (playerCounter > computerCounter)
{
    console.log(`The player wins ${playerCounter}:${computerCounter}!`);
}
else if (playerCounter < computerCounter)
{
     console.log(`The computer wins ${computerCounter}:${playerCounter}!`);
}
 else
{
    console.log("It's a tie!");
}





