/*----- constants -----*/
const max_number_plays = 9;
const winCombo = [  
    ["one", "two", "three"],
    ["four", "five", "six"],
    ["seven", "eight", "nine"],
    ["one", "four", "seven"],
    ["two", "five", "eight"],
    ["three", "six", "nine"],
    ["one", "five", "nine"],
    ["three", "five", "seven"],
 ];
//compare playCombo with winCombo to determine winner
// cannot strictly compare array
// create loop to compare values with playCombo
const playerO = "O";
const playerX = "X";

/*----- app's state (variables) -----*/

let playCount = [];
let playCombo = [];


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
    // determine playerX - odd playCount or playerO - even
    // let playNum = playCount.push()
    let playLetter = document.getElementById(evt.path["0"].id);
    playLetter.textContent = "X";
    playCombo.push(playLetter.id);

}

// function renderHands(); {

// }
// function renderControls();{

// }

// function renderWinnerMessage() {

// }

// function renderTurnMessage() {

// }

function render() {
	renderHands();
	renderControls();
	if (winner) {
		renderWinnerMessage();
	} else {
		renderTurnMessage();
	}
}