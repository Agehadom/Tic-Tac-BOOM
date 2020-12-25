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

    const tie = store.game.cells.every(spot => {
      return spot !== ''
    })

    if (winner === true) {
      if (turnCount === 1) {
      gameActive = 0
      store.game.over = true
      turnCount = 3
      $('#board_container').css( "pointer-events", "none" );
      $('.game_container h1').text("X wins!");
      $('.game_container p').text("Game Over, Press Replay to play again.");
      gameEnable();
    }
    if (winner === true) {
      if (turnCount === 2) {
        gameActive = 0
        store.game.over = true
        turnCount = 3
        $('#board_container').css( "pointer-events", "none" );
        $('.game_container h1').text("O wins!");
        $('.game_container p').text("Game Over, Press Replay to play again.");
        gameEnable();
        }
      }
    }
    if (winner === false && tie === true) {
      gameActive = 0
      store.game.over = true
      turnCount = 3
      $('#board_container').css( "pointer-events", "none" );
      $('.game_container h1').text("Draw game.");
      $('.game_container p').text("Game Over, Press Replay to play again.");
      gameEnable();
    }
  }

const cells = document.querySelectorAll('#box')
const newGame = document.querySelectorAll('.actualPlayButton')

const cellSelect = function (event) {
  console.log(event.target);
  console.log(event.target.classList);

  if (turnCount === 1) {
    $('.game_container p').text("O's Turn")
    event.target.classList.add('X');
    const index = $(event.target).data('cell-index')
    store.game.cells[index] = 'X'
    checkBoard()
    api.updateGame()
    turnCount = 2;

  } else {
    $('.game_container p').text("X's Turn")
    event.target.classList.add('O');
    const index = $(event.target).data('cell-index')
    store.game.cells[index] = 'O'
    checkBoard()
    api.updateGame()
    turnCount = 1;

  }
  /*if (event.target.classList === "X" || "O") {
    event.target.removeEventListener('click', cellSelect);
  }*/
}

function gameEnable () {
  for (const cell of cells) {
    if (gameActive === 1) {
    cell.addEventListener('click', cellSelect)
  } //else cell.removeEventListener('click', cellSelect)
  }
}

function startGame () {

  if (gameActive === 0) {
  console.log('Begin the battle')
  console.log(cells);
  console.log(newGame);

  api.startGame()
  .then(ui.startGame)
  .catch(ui.onFailure)

  gameActive = 1
  $('.game_container p').text("X's Turn")

  $('#board_container').css( "pointer-events", "all" );
  $('.game_container h1').text("Play Information");

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

  store.game.over = true
  gameActive = 0

  console.log(cells);
  console.log('DESTROY THE BOARD');

  for (const cell of cells) {
    cell.classList.remove('X');
    cell.classList.remove('O');
  }

  gameActive = 1
  turnCount = 1
  $('.game_container p').text("X's Turn")

  gameEnable()

  api.startGame()
  .then(ui.startGame)
  .catch(ui.onFailure)
}

module.exports = {
  startGame,
  cellSelect,
  resetGame,
  gameEnable,
  checkBoard
}
