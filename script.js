function getComputerChoice()
{
    const choices = ["Rock", "Paper" , "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
} 

const randomChoice = getComputerChoice();
console.log(randomChoice);