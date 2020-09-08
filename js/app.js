// -- HTML elements --
const board = document.querySelector( '#board' );
const currentStatus = document.querySelector( '#currentStatus' );
const resetButton = document.querySelector( '#resetButton' );
const cells = document.querySelectorAll( '[data-cell]' );

// -- Game Variables --
let gameIsLive = true;
let unicornIsNext = true;
let winner = null;

// -- Functions --
// const checkGameStatus = () => {
//   const topLeft = cells[0].classList[2];
//   const topMiddle = cells[1].classList[2];
//   const topRight = cells[2].classList[2];
//   const middleLeft = cells[3].classList[2];
//   const middleMiddle = cells[4].classList[2];
//   const middleRight= cells[5].classList[2];
//   const bottomLeft = cells[6].classList[2];
//   const bottomMiddle = cells[7].classList[2];
//   const bottomRight = cells[8].classList[2];

//   // Check for winner
//   gameIsLive = false;
// }

const startGame = () => {
  cells.forEach( cell => {
    cell.addEventListener( 'click', handleCellClick, { once: true });
  });

  setBoardHoverClass();
}

const placeBeast = ( cell, currentBeast ) => {
  cell.classList.add( currentBeast );
}

const swapTurns = () => {
  unicornIsNext = !unicornIsNext;
}

const setBoardHoverClass = () => {
  board.classList.remove( 'unicorn' );
  board.classList.remove( 'dragon' );

  if ( unicornIsNext ) {
    board.classList.add( 'unicorn' );
  } else {
    board.classList.add( 'dragon' );
  }
}


// -- Event Handlers --
const handleReset = ( e ) => {
  console.log( e );
}

const handleCellClick = ( e ) => {
  const cell = e.target;
  const currentBeast = unicornIsNext ? 'unicorn' : 'dragon';

  // Place mark
  placeBeast( cell, currentBeast );

  // Check for win
  // Check for draw
  // Switch turns
  swapTurns();
  setBoardHoverClass();
}

// -- Event Listeners --
resetButton.addEventListener( 'click', handleReset );

startGame();
