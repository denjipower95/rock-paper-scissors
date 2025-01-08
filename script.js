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