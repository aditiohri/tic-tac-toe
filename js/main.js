/*----- constants -----*/
const max_number_plays = 9;
const EMPTY = " ";
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



const playerO = "O";
const playerX = "X";

/*----- app's state (variables) -----*/

let playLetter = []; let playCount = []; let playCombo = [];


/*----- cached element references -----*/
let message = document.getElementById('message');
let turn = document.getElementById('turn');
let td = document.querySelectorAll('td');
let gameBoard = document.getElementById('tictactoe');
let turnEl = document.getElementById('turn');


/*----- event listeners -----*/

document.getElementById('tictactoe')
    .addEventListener('click', handleTDClick);

document.getElementById('replay')
    .addEventListener('click', rePlay);

    
/*----- functions -----*/
// init();

function handleTDClick(evt) {
    let playLetter = document.getElementById(evt.path["0"].id);
    playCount.push(evt.target.value);
    renderTurnMessage();
    if (playLetter.textContent === ("X")) {
        return 
    } else if (playLetter.textContent === ("O")) {
        return 
    } 
    else if (playCount.length % 2 === 1) {
        playLetter.textContent = "X";
        console.log(playLetter.textContent);
    } else if (playCount.length % 2 === 0) {
        playLetter.textContent = "O";
        console.log(playLetter.textContent);
    // } else if (playLetter.textContent === "X" || "O") {
    //  return   
    // }

    }
 return   
};
 
    // to resolve:
    // alternating message consistent with clicks
    // tds disappear when player clicks away from td but in grid section
    



function renderTurnMessage() {
    return (playCount.length % 2 ? turnEl.innerHTML = `Your turn: <br> Player O` : turnEl.innerHTML = `Your turn: <br> Player X`)
}
        
// create a message for winner
        
// replay button clears the gameboard
function rePlay() {
    playCount = []; 
    td.forEach(function(box) {
        box.textContent = EMPTY;
    } );
    turnEl.innerHTML = `Your turn: <br> Player X`;
}


// create separate arrays for O and X position plays
// compare with winning count
// cannot strictly compare array
// create loop to compare values 

function render() {
	renderHands();
	renderControls();
	if (winner) {
		renderWinnerMessage();
	} else {
		renderTurnMessage();
	}
}