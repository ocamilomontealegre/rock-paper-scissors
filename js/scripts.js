// Rock-Paper-Scissors Game

let gameChoices = ["Rock", "Paper", "Scissors"];
let round = 0;
let playerScore = 0;
let computerScore = 0;

const playRound = () => {
  while (computerScore < 5 && playerScore < 5) {
    const playerSelection = prompt("Please type one the following options: Rock, Paper, Scissors");
    let computerSelection = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    if (
      playerSelection === "Rock" && computerSelection === "Scissors" ||
      playerSelection === "Scissors" && computerSelection === "Paper" ||
      playerSelection === "Paper" && computerSelection === "Rock"
    ) {
      playerScore += 1;
    } else if (
      playerSelection === "Rock" && computerSelection === "Paper" ||
      playerSelection === "Scissors" && computerSelection === "Rock" ||
      playerSelection === "Paper" && computerSelection === "Scissors"
    ) {
      computerScore += 1;
    } else {
      playerScore += 0;
      computerScore += 0;
    }
    round += 1;
    console.log(`Player picks ${playerSelection} and Player Score is ${playerScore}`);
    console.log(`Computer picks ${computerSelection} and Computer Score is ${computerScore}`);
    console.log(`Round ${round}`);
  }
  console.log((playerScore === 5)? "Player Wins" : "Computer wins");
}

document.getElementById("button").onclick = () => {
  playRound();
}



