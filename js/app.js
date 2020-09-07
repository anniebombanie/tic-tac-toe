// -- HTML elements --
const currentStatus = document.querySelector( '.current-status' );
const resetBtn = document.querySelector( '.reset-button' );
const cells = document.querySelectorAll( '[data-cell]' );

// -- Game Variables --
let gameIsLive = true;
let unicornIsNext = true;
let winner = null;

// -- Functions --
const checkGameStatus = () => {
  const topLeft = cells[0].classList[2];
  const topMiddle = cells[1].classList[2];
  const topRight = cells[2].classList[2];
  const middleLeft = cells[3].classList[2];
  const middleMiddle = cells[4].classList[2];
  const middleRight= cells[5].classList[2];
  const bottomLeft = cells[6].classList[2];
  const bottomMiddle = cells[7].classList[2];
  const bottomRight = cells[8].classList[2];

  // Check for winner
  gameIsLive = false;
}

// -- Event Handlers --
const handleReset = ( e ) => {
  console.log( e );
}

const handleCellClick = ( e ) => {
  const classList = e.target.classList;
  const location = classList[1];

  if ( classList[2] === 'unicorn' || classList[2] === 'dragon' ) {
    // do nothing
    return;
  }

  if ( unicornIsNext ) {
    classList.add( 'unicorn' );
    checkGameStatus();

    unicornIsNext = !unicornIsNext;
  } else {
    classList.add( 'dragon' );
    checkGameStatus();

    unicornIsNext = !unicornIsNext;
  }
}

// -- Event Listeners --
resetBtn.addEventListener( 'click', handleReset );

cells.forEach( cell => {
  cell.addEventListener( 'click', handleCellClick, { once: true });
});
