// HTML elements
const currentStatus = document.querySelector( '.current-status' );
const resetBtn = document.querySelector( '.reset' );
const cells = document.querySelectorAll( '.cell' );

// Game Variables
let gameIsLive = true;
let unicornIsNext = true;

// Event Handlers
const handleReset = ( e ) => {
  console.log( e );
}

const handleCellClick = ( e ) => {
  const classList = e.target.classList;
  const location = classList[ 1 ];

  if ( classList[ 2 ] === 'unicorn' || classList[ 2 ] === 'dragon' ) {
    // do nothing
    return;
  }

  if ( unicornIsNext ) {
    classList.add( 'unicorn' );
    unicornIsNext = !unicornIsNext;
  } else {
    classList.add( 'dragon' );
    unicornIsNext = !unicornIsNext;
  }
}

// Event Listeners
resetBtn.addEventListener( 'click', handleReset );

for ( const cell of cells ) {
  cell.addEventListener( 'click', handleCellClick );
}
