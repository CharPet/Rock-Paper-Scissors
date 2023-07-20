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


function game()
{
    let playerCounter = 0;
    let computerCounter = 0;

    for (let i = 0; i < 5; i++)
    {      
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

        console.log(playRound(playerSelection, computerSelection));
        const playerSelection = getPlayerChoice();
        console.log(playerSelection);
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
    }

    if (playerCounter > computerCounter)
    {
        console.log("Te player wins!");
    }
    else if (playerCounter < computerCounter)
    {
        console.log("Te computer wins!");
    }
    else
    {
        console.log("It's a tie!");
    }
}




