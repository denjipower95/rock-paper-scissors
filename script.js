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

function playGame() {
  
  function playRound(humanChoice, computerChoice) {

    console.log(`Player pick: ${humanChoice}`);
    console.log(`Computer pick: ${computerChoice}`);

    if (humanChoice === computerChoice) {
      console.log(`It's a tie. Player and Computer both pick ${humanChoice}`);
    } else if ( (humanChoice === 'rock' && computerChoice === 'scissors') ||
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
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Player score: ${humanScore} Computer score: ${computerScore}`);
  }

  console.log(`\nFinal Results:`);
  console.log(`Player: ${humanScore} Computer: ${computerScore}`);
  
  if (humanScore === computerScore) {
    console.log(`It's a tie.`)
  } else if (humanScore > computerScore) {
    console.log('Congrats! You won the game.');
  } else {
    console.log('You lost the game! Better luck next time.');
  }
}

playGame();