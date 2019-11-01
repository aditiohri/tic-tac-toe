 /*----- constants -----*/
const max_number_plays = 9;
const EMPTY = " ";
const winCombo = [  ["one", "two", "three"], ["four", "five", "six"], ["seven", "eight", "nine"], ["one", "four", "seven"], ["two", "five", "eight"], ["three", "six", "nine"], ["one", "five", "nine"], ["three", "five", "seven"] ];
const playerO = "O";
const playerX = "X";
/*----- app's state (variables) -----*/
let playCount = []; let playerXScore = [];let playerOScore = []; let playSpace = [];
/*----- cached element references -----*/
let message = document.getElementById('message');
let turn = document.getElementById('turn');
let td = document.querySelectorAll('td');
let gameBoard = document.getElementById('tictactoe');
let turnEl = document.getElementById('turn');
let replayButton = document.getElementById('replay');
/*----- event listeners -----*/
gameBoard.addEventListener('click', handleTDClick);
replayButton.addEventListener('click', init);
/*----- functions -----*/
//initialize game variables and board
init();
// handles click, when gameboard event listener is activated
function handleTDClick(evt) {
   if (evt.target.tagName !== "TD") return;
    playSpace = evt.target;
    playCount.push(playSpace);
    play();
}
// play as X or O
function play() {
    if (playSpace.textContent === ("X") || (playSpace.textContent === ("O"))) {
        return 
    } else if (playCount.length % 2 === 1) {
        playSpace.textContent = playerX;
        playerXScore.push(playSpace.id)
        // console.log(playerXScore)
        if (playCount.length > 4) checkWin(playerXScore);
    } else if (playCount.length % 2 === 0) {
        playSpace.textContent = playerO;
        playerOScore.push(playSpace.id)
        // console.log(playerOScore)
        if (playCount.length > 4) checkWin(playerOScore);
    } 
    renderTurnMessage();   
};
// win logic
function checkWin(playerScore) {
    //extract last three values of player's score
    let playCombo = playerScore.slice(playerScore.length-3);
    //turn object into an array
    let playWin = Object.values(playCombo);
    console.log(playWin, ': in checkWin before loop')
    //loop over arrays
for (let idx = 0; idx < winCombo.length; idx++) {
    let winArray = Object.values(winCombo[idx]);
    //loop over arrays within the arrays
    for (let i = 0; i < winCombo[idx].length; i++) {
    //return subarray that matches values of playWin
        playWin.every(function(i) {
        if (playWin[idx][i] === winArray[i]) {
            renderWinMessage(playerScore);
            return console.log('true') ;
        } 
        else { return console.log('false')
    }})}}};
function renderWinMessage(playerScore) {
    console.log('is this working from winMsg')
     if (playerScore === playerXScore) {
        turnEl.innerHTML = `Player X is the winner!`;
     } if (playerScore === playerOScore) {
        turnEl.innerHTML = `Player O is the winner!`; 
} return }
// player turn + win + draw game messages
function renderTurnMessage() {
    if (playerXScore.length > playerOScore.length) {
        turnEl.innerHTML = `Your turn: <br> Player O` 
    } if (playerXScore.length < playerOScore.length) {
        turnEl.innerHTML = `Your turn: <br> Player X`
    } if (playerXScore.length === playerOScore.length) {
        turnEl.innerHTML = `Your turn: <br> Player X`
    } else if (playCount.length === max_number_plays) {
        turnEl.innerHTML = `It's a draw!`
    }
    return;
};      
// initialize gameboard // replay button clears the gameboard
function init() {
    playCount = []; 
    playCombo = []; 
    playerXScore = []; 
    playerOScore = [];
    playSpace = [];
    td.forEach(function(box) {
        box.textContent = EMPTY;
    } );
    renderTurnMessage();
}