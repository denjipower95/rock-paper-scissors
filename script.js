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

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame() {
  
  function playRound(humanChoice, computerChoice) {

    console.log(`Player pick: ${humanChoice}`);
    console.log(`Computer pick: ${computerChoice}`);

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

  for (let i = 1; i <= 5; i++) {
    console.log(`\nRound ${i}`);
    playRound(humanSelection, computerSelection);
  }
}