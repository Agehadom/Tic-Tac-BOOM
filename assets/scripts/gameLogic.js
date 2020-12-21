const api = require('./api')
const ui = require('./ui')
const store = require('./store')


let turnCount = 1;
let gameActive = 0;

const checkBoard = function () {

  const winner =
    (store.game.cells[0] === store.game.cells[1] && store.game.cells[1] === store.game.cells[2] && store.game.cells[0] !== '') ||
    (store.game.cells[3] === store.game.cells[4] && store.game.cells[4] === store.game.cells[5] && store.game.cells[4] !== '') ||
    (store.game.cells[6] === store.game.cells[7] && store.game.cells[7] === store.game.cells[8] && store.game.cells[7] !== '') ||
    (store.game.cells[0] === store.game.cells[4] && store.game.cells[4] === store.game.cells[8] && store.game.cells[0] !== '') ||
    (store.game.cells[2] === store.game.cells[4] && store.game.cells[4] === store.game.cells[6] && store.game.cells[2] !== '') ||
    (store.game.cells[0] === store.game.cells[3] && store.game.cells[3] === store.game.cells[6] && store.game.cells[0] !== '') ||
    (store.game.cells[1] === store.game.cells[4] && store.game.cells[4] === store.game.cells[7] && store.game.cells[1] !== '') ||
    (store.game.cells[2] === store.game.cells[5] && store.game.cells[5] === store.game.cells[8] && store.game.cells[2] !== '')

    if (winner === true) {
      if (turnCount === 1) {
      gameActive = 0
      $('.game_container h1').text("X wins!");
      gameEnable();
    }
      if (turnCount === 2) {
        gameActive = 0
        $('.game_container h1').text("O wins!");
        gameEnable()
      }
    }
  }

const cells = document.querySelectorAll('#box')
const newGame = document.querySelectorAll('.actualPlayButton')

const cellSelect = function (event) {
  console.log(event.target);
  console.log(event.target.classList);

  if (turnCount === 1) {
    event.target.classList.add('X');
    const index = $(event.target).data('cell-index')
    store.game.cells[index] = 'X'
    checkBoard()
    api.updateGame()
    turnCount = 2;

  } else {
    event.target.classList.add('O');
    const index = $(event.target).data('cell-index')
    store.game.cells[index] = 'O'
    checkBoard()
    api.updateGame()
    turnCount = 1;

  }

  if (event.target.classList === "X" || "O") {
    event.target.removeEventListener('click', cellSelect);
  }
}

function gameEnable () {
  for (const cell of cells) {
    if (gameActive === 1) {
    cell.addEventListener('click', cellSelect)
    } else cell.removeEventListener('click', cellSelect)
  }
}

 /*if (($(".a1") && $(".a2") && $(".a3")).hasClass("X")) {
    console.log('X wins!')}
 if
    (($(".b1") && $(".b2") && $(".b3")).hasClass("X")) {
     console.log('X wins!')}
 if
    (($(".c1") && $(".c2") && $(".c3")).hasClass("X")) {
     console.log('X wins!')}
 if
    (($(".a1") && $(".b1") && $(".c1")).hasClass("X")) {
     console.log('X wins!')}
 if
    (($(".a2") && $(".b2") && $(".c2")).hasClass("X")) {
     console.log('X wins!')}
 if
    (($(".a3") && $(".b3") && $(".c3")).hasClass("X")) {
     console.log('X wins!')}
 if
    (($(".a1") && $(".b2") && $(".c3")).hasClass("X")) {
     console.log('X wins!')}
 if
    (($(".a3") && $(".b2") && $(".c1")).hasClass("X")) {
     console.log('X wins!')}
    */
 // O victory Block


/*|| ($(".c1") && $(".c2") && $(".c3") || ($(".a1") && $(".b1") && $(".c1") || ($(".a2") && $(".b2") && $(".c2") || ($(".a3") && $(".b3") && $(".c3") || ($(".a1") && $(".b2") && $(".c3") || ($(".a3") && $(".b2") && $(".c1")*/
////////////////////////////////////////
  //  winningStates[0]

// Game Function

function startGame () {
  if (gameActive === 0) {
  console.log('Begin the battle')
  console.log(cells);
  console.log(newGame);

  api.startGame()
  .then(ui.startGame)
  .catch(ui.onFailure)

  gameActive = 1
  gameEnable()
} else {
  if (gameActive === 1) {
    console.log('There is a game in progress');
    resetGame()
    }
  }
}

function resetGame (event) {
  const cells = document.querySelectorAll('#box')
  gameActive = 0

  console.log(cells);
  console.log('DESTROY THE BOARD');

  for (const cell of cells) {
  cell.classList.remove('X');
  cell.classList.remove('O');
}

  gameActive = 1
  turnCount = 1
  gameEnable()

  api.startGame()
}

/*

  if (gameWin) {
    winMess()
  }
}*/

module.exports = {
  startGame,
  cellSelect,
  resetGame,
  gameEnable,
  checkBoard
  //winCheck
}
