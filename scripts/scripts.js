

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