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
// console.log(td)
// console.log(turn)
// console.log(gameBoard)

/*----- event listeners -----*/
document.getElementById('tictactoe')
    .addEventListener('click', handleTDClick)

/*----- functions -----*/
// init();

function handleTDClick(evt) {
    // track id of clicked td
    let playLetter = document.getElementById(evt.path["0"].id);
    // determine playerX - odd playCount or playerO - even
    playCount.push(evt.target.value);
    // playCount.push(playNum);
    console.log(playCount);
    return (playCount.length % 2 ? playLetter.textContent = "X" : playLetter.textContent = "O");
    // playCombo.push(playLetter.id);

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