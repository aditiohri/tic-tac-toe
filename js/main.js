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
  ["three", "five", "seven"]
];
const playerO = "O";
const playerX = "X";
/*----- app's state (variables) -----*/
let playCount = [];
let playerXScore = [];
let playerOScore = [];
let playSpace = [];
/*----- cached element references -----*/
let message = document.getElementById("message");
let turn = document.getElementById("turn");
let td = document.querySelectorAll("td");
let gameBoard = document.getElementById("tictactoe");
let turnEl = document.getElementById("turn");
let replayButton = document.getElementById("replay");
/*----- event listeners -----*/
gameBoard.addEventListener("click", handleTDClick);
replayButton.addEventListener("click", init);
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
  if (playSpace.textContent === "X" || playSpace.textContent === "O") {
    return;
  } else if (playCount.length % 2 === 1) {
    playSpace.textContent = playerX;
    playerXScore.push(playSpace.id);
    // console.log(playerXScore)
    renderTurnMessage();
    if (playCount.length > 4) checkWin(playerXScore);
  } else if (playCount.length % 2 === 0) {
    playSpace.textContent = playerO;
    playerOScore.push(playSpace.id);
    // console.log(playerOScore)
    renderTurnMessage();
    if (playCount.length > 4) checkWin(playerOScore);
  }
}
// win logic
function checkWin(playerScore) {
    console.log('sanity check')
  let isWinning = null;
  winCombo.forEach(function(arr) {
    //   for (let idx = 0; idx < winCombo[idx]; idx++) { 
      console.log('sanity check2') 
      // loop winCombo
      console.log('arr:', arr);
      let matches = [];
    arr.forEach(function(value){
        // run thourgh winCombo subArray and 
        // this might need to keep track of the the three to make sure all are present
        playerScore.forEach(function(move){
            //forEach index make sure each item in the subArray
            // check that it is present in the playerCombo
            if (move === value) {
                matches.push(true);
                console.log('matches.length:', matches.length)
            }
            if (matches.length === 3) {
                isWinning = true;
                return console.log('isWinning:', isWinning);
            }
        })
    })
    if (isWinning === true) {
      return renderWinMessage(playerScore);
    } else {
      return false;
    }
  })
};
function renderWinMessage(playerScore) {
    console.log('is this working from winMsg')
     if (playerScore === playerXScore) {
         console.log('winner: player x');
        turnEl.innerHTML = `Player X is the winner!`;
     } if (playerScore === playerOScore) {
        console.log('winner: player o')
        turnEl.innerHTML = `Player O is the winner!`;
} return }
// player turn + win + draw game messages
function renderTurnMessage() {
  if (playerXScore.length > playerOScore.length) {
    turnEl.innerHTML = `Your turn: <br> Player O`;
  }
  if (playerXScore.length < playerOScore.length) {
    turnEl.innerHTML = `Your turn: <br> Player X`;
  }
  if (playerXScore.length === playerOScore.length) {
    turnEl.innerHTML = `Your turn: <br> Player X`;
  } else if (playCount.length === max_number_plays) {
    turnEl.innerHTML = `It's a draw!`;
  }

}
// initialize gameboard // replay button clears the gameboard
function init() {
  playCount = [];
  playCombo = [];
  playerXScore = [];
  playerOScore = [];
  playSpace = [];
  td.forEach(function(box) {
    box.textContent = EMPTY;
  });
  renderTurnMessage();
} 
