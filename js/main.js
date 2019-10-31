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

let playLetter = []; 
let playCount = []; 
let playCombo = []; 
let playerXScore = []; 
let playerOScore = [];


/*----- cached element references -----*/
let message = document.getElementById('message');
let turn = document.getElementById('turn');
let td = document.querySelectorAll('td');
let gameBoard = document.getElementById('tictactoe');
let turnEl = document.getElementById('turn');


/*----- event listeners -----*/

document.getElementById('tictactoe')
    .addEventListener('click', handleTDClick);
    
// document.querySelectorAll('td').addEventListener('click', handleTDClick);

document.getElementById('replay')
    .addEventListener('click', rePlay);

    
/*----- functions -----*/

function handleTDClick(evt) {
   if (evt.target.tagName !== "TD") return;
    let playLetter = document.getElementById(evt.path["0"].id);
    console.log(evt.path["0"].id);
    console.log(evt.target);
    console.log(evt);
    playCount.push(evt.target.value);
    // create turn function
    // renderTurnMessage();
    if (playLetter.textContent === ("X") || (playLetter.textContent === ("O"))) {
        return 
    } 
    else if (playCount.length % 2 === 1) {
        playLetter.textContent = playerX;
        playerXScore.push(playLetter.id)
        // console.log(playLetter.textContent);
        // console.log(playLetter.id);
    } else if (playCount.length % 2 === 0) {
        playLetter.textContent = playerO;
        playerOScore.push(playLetter.id)
        // console.log(playLetter.textContent);
        // console.log(playLetter.id);
  


    }
 return   
};
 
    // to resolve:
    // alternating message consistent with player
    // tds disappear when player clicks away from td but in grid section
  
function renderTurnMessage() {
    if (playLetter.textContent = playerX) {
        turnEl.innerHTML = `Your turn: <br> Player O` 
    } if (playLetter.textContent = playerO) {
        turnEl.innerHTML = `Your turn: <br> Player X`

    }
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

// solution to double clicking: onclick this disabled true in html
// create separate arrays for O and X position plays // sort
// compare with winning count
// cannot strictly compare array //flatmap //mapfilter //reduce //check arrays lab
// create loop to compare values 
// call all functions in init

function init() {
    //
}