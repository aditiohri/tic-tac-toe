/*----- constants -----*/
const max_number_plays = 9;
const winCombo = {
   
    
}
const playerX = 1;
const playerO = -1;

/*----- app's state (variables) -----*/



/*----- cached element references -----*/
let message = document.getElementById('message');
let turn = document.getElementById('turn');
let td = document.querySelectorAll('td');
let gameBoard = document.getElementById('tictactoe');
console.log(td)
// console.log(turn)
// console.log(gameBoard)

/*----- event listeners -----*/
document.getElementById('tictactoe')
    .addEventListener('click', handleTDClick)

/*----- functions -----*/

// function init();

function handleTDClick(evt) {
    console.log(evt.path["0"].id);
}

function render() {
	renderHands();
	renderControls();
	if (winner) {
		renderWinnerMessage();
	} else {
		renderTurnMessage();
	}
}