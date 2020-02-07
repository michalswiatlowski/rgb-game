let rgbGuess = document.querySelector(".rgb"),
	squares = document.querySelectorAll(".square"),
	modes = document.querySelectorAll(".mode"),
	numSquares = squares.length,
	squareGuess,
	rgbSquareGuess;

// restart button behavior
document.querySelector(".panel--reset").addEventListener("click", function(){
	start();
});

init();

function init(){
	modeBehavior(); //Listener on mode selection
	squaresBehavior(); //Listener on squares
	start();	//start aplication
}

function start(){
	(document.querySelector(".active").textContent == "EASY") ? numSquares = 3 : numSquares = 6;	// setting difficulty
	reset();
	hideSquares();
	rollColors();
	pickUnknown();
}

function reset(){
	document.querySelector(".panel--message").textContent = "";
	document.querySelector(".header").style.backgroundColor = "rgb(0, 128, 128)";
}

function modeBehavior(){
	//Listener on mode selection
	for(let i = 0; i < modes.length ; i++){
		modes[i].addEventListener("click", function(){
			for(let i = 0; i < modes.length ; i++){
				modes[i].classList.remove("active");
				}
			this.classList.add("active");
			start();
		});
	}
}

function squaresBehavior(){
	for(let i = 0; i < numSquares; i++){
		squares[i].addEventListener("click", function(){
			if(this.style.backgroundColor == rgbSquareGuess){
				correct();
			} else {
				this.style.opacity = 0;
				setTimeout(this.classList.add("hidden"), 500);
			}
		});
	}
}

function correct(){
	document.querySelector(".panel--message").textContent = "Great!!!";
	document.querySelector(".header").style.backgroundColor = rgbSquareGuess;
	for(let i = 0; i < numSquares; i++){
		squares[i].style.backgroundColor = rgbSquareGuess;
	}
}

function hideSquares(){
	for(let i = 0 ; i < squares.length; i++){
		squares[i].style.opacity = 0;
		setTimeout(squares[i].classList.add("hidden"), 500);
	}
}

function rollColors(){ //also shows squares if need
	for(let i = 0 ; i < numSquares; i++){
		squares[i].style.backgroundColor = "rgb(" + rollRGB() + ", " + rollRGB() + ", " + rollRGB() + ")";
		squares[i].style.opacity = 1;
		squares[i].classList.remove("hidden");
	}
}

function rollRGB(){
	return Math.floor(Math.random() * 256);
}

function pickUnknown(){
	squareGuess = squares[Math.floor(Math.random() * numSquares)];
	rgbSquareGuess = squareGuess.style.backgroundColor;
	rgbGuess.textContent = rgbSquareGuess;
}