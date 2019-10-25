/*----- constants -----*/
const winCombo = {
    
}


/*----- app's state (variables) -----*/

let message = document.getElementById('message');
let turn = document.getElementById('turn');
let gameBoard = document.getElementById('tictactoe')


/*----- cached element references -----*/
/*----- event listeners -----*/
/*----- functions -----*/

// function init();

function render() {
	renderHands();
	renderControls();
	if (winner) {
		renderWinnerMessage();
	} else {
		renderTurnMessage();
	}
}