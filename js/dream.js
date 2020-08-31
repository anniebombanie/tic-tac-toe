const
	starsPerHundredPixelsSquare = 1,
	documentElement = document.documentElement,
	documentHeight = documentElement.offsetHeight,
	documentWidth = documentElement.offsetWidth
;

let
	starsCount = (
		( Math.floor( documentHeight / 100 ) * Math.floor( documentWidth / 100 ))
		* starsPerHundredPixelsSquare
	),
	delay = Math.round( starsCount / 5000 );

	if ( delay < 1 ) {
			delay = 1;
	}

const intervalId = window.setInterval(() => {
	const star = document.createElement( 'i' );

	star.classList.add( 'star' );
	star.classList.add(
		Math.floor(( Math.random() * 10 ) % 2 ) === 0
			? 'small'
			: 'medium'
		);

		star.style.left = ( Math.random() * 99 ).toFixed( 2 ) + '%';
		star.style.top = ( Math.random() * 99 ).toFixed( 2 ) + '%';

		document.body.appendChild( star );

		if ( --starsCount === 0 ) {
			window.clearInterval( intervalId );
		}
	},
	delay
);

// Star bg credit: https://codepen.io/cliffgurney/pen/GNpzdx
