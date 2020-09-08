// -- HTML elements --
const board = document.querySelector( '#board' );
const cells = document.querySelectorAll( '[data-cell]' );
const currentStatus = document.querySelector( '#currentStatus' );
const winningMessageText = document.querySelector( '[data-winning-message-text]' );
const resetButton = document.querySelector( '#resetButton' );
const gameEndOverlay = document.querySelector( '#gameEndOverlay' );

// -- Game Variables --
let gameIsLive = true;
let unicornIsNext = true;
let winner = null;
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// -- Functions --
const setBoardHoverClass = () => {
  board.classList.remove( 'unicorn' );
  board.classList.remove( 'dragon' );

  if ( unicornIsNext ) {
    board.classList.add( 'unicorn' );
  } else {
    board.classList.add( 'dragon' );
  }
}

const placeBeastImg = ( cell, currentBeast ) => {
  cell.classList.add( currentBeast );
}

const swapTurns = () => {
  unicornIsNext = !unicornIsNext;
}

const checkWin = ( currentBeast ) => {
  return winningCombinations.some( combination => {
    return combination.every( i => {
      return cells[i].classList.contains( currentBeast );
    })
  });
}

const isDraw = () => {
  return [...cells].every( cell => {
    return cell.classList.contains( 'unicorn' ) || cell.classList.contains( 'dragon' );
  })
}

const startGame = () => {
  cells.forEach( cell => {
    cell.classList.remove( 'unicorn' );
    cell.classList.remove( 'dragon' );
    cell.removeEventListener( 'click', handleCellClick );
    cell.addEventListener( 'click', handleCellClick, { once: true });
  });

  setBoardHoverClass();

  gameEndOverlay.classList.remove( 'show' );
}

const endGame = ( draw ) => {
  if ( draw ) {
    winningMessageText.innerText = `Draw!`;
  } else {
    winningMessageText.innerText = `${ unicornIsNext ? 'Unicorn' : 'Dragon' } reigns supreme!!!`
  }

  gameEndOverlay.classList.add( 'show' );
}

// -- Event Handlers --
const handleReset = ( e ) => {
  console.log( e );
}

const handleCellClick = ( e ) => {
  const cell = e.target;
  const currentBeast = unicornIsNext ? 'unicorn' : 'dragon';

  placeBeastImg( cell, currentBeast );

  if ( checkWin( currentBeast )) {
    endGame( false );
  } else if ( isDraw()) {
    endGame( true );
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

// -- Event Listeners --
resetButton.addEventListener( 'click', startGame );

// -- Start Game --
startGame();
