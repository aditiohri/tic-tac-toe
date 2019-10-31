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

let playCount = []; 
let playCombo = []; 
let playerXScore = []; 
let playerOScore = [];
let playId = [];
let playSpace = [];


/*----- cached element references -----*/
let message = document.getElementById('message');
let turn = document.getElementById('turn');
let td = document.querySelectorAll('td');
let gameBoard = document.getElementById('tictactoe');
let turnEl = document.getElementById('turn');
let replayButton = document.getElementById('replay');


/*----- event listeners -----*/

// document.getElementById('tictactoe')
//     
gameBoard.addEventListener('click', handleTDClick);
replayButton.addEventListener('click', init);

    
/*----- functions -----*/
//initialize game variables and board
init();

// when gameboard event listener is activated
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
        checkWin(playerXScore);
    } else if (playCount.length % 2 === 0) {
        playSpace.textContent = playerO;
        playerOScore.push(playSpace.id)
        checkWin(playerOScore);
    } renderTurnMessage();   
};

function checkWin(playerScore) {
if (playCount.length > 2) {
    for (let idx = 0; idx < winCombo.length; i++) {
        for (let i = 0; i < winCombo[idx].length; i++)
            if (playerScore.includes(winCombo[idx][i])) {
            console.log('ran' +i);
            winMsg();
        } else { return }
    }
}
};
    //look through the winCombo arrays 
    //check each array to see if playerXScore incldues the items of the arrays
    //check above for playerOScore too
    //if matches print win message for winning player
    // cannot strictly compare array //flatmap //mapfilter //reduce //check arrays lab


    // alternating message consistent with player
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
    return
} 

//displays winning message
function winMsg() {
    if (playerOScore.length > playerXScore.length) {
        turnEl.innerHTML = `Player O is the winner!`
    }
    if (playerXScore.length > playerOScore.length) {
        turnEl.innerHTML = `Player X is the winner!`
    }
    return
}

        
// initialize gameboard
// replay button clears the gameboard
function init() {
    playCount = []; 
    playCombo = []; 
    playerXScore = []; 
    playerOScore = [];
    playId = [];
    playSpace = [];
    td.forEach(function(box) {
        box.textContent = EMPTY;
    } );
    renderTurnMessage();
}

