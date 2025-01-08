function getComputerChoice() {
  
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function getHumanChoice() {
  
  let humanChoice = prompt('rock paper scissors');
  humanChoice = humanChoice.toLowerCase();

  if ( (humanChoice === 'rock') ||
  (humanChoice === 'paper') ||
  (humanChoice === 'scissors') ) {
    return humanChoice;
  } else {
    alert('Invalid');
    getHumanChoice();
  }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

  if (humanChoice === computerChoice) {
    console.log(`It's a tie. Player and Computer both pick ${humanChoice}`);
  } else if ( (humanChoice === 'rock' && computerChoice === 'paper') ||
  (humanChoice === 'paper' && computerChoice === 'rock') ||
  (humanChoice === 'scissors' && computerChoice === 'paper') ) {
    console.log(`You won. ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose. ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();