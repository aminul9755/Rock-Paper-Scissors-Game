function playGame (playerMove) {
  let computerMove = createComputerMove();
  let result = '';
  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  } else if ( playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }
  document.querySelector('.js-score-update').innerHTML=(`You ${playerMove} - ${computerMove} Computer`)
}

function createComputerMove () {
  let randomNumber = Math.random ();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber <= 1/3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber <= 2/3){
    computerMove = 'paper';
  } else if (randomNumber >= 2/3 && randomNumber <= 3) {
    computerMove = 'scissors';
  }
  return computerMove;
}