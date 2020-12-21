const store = require('./store.js')


// User
const onRegisterUser = function () {
  console.log('Sign Up Clicked');
  $('form').trigger('reset')
}

const onSignInUser = function (response) {
  console.log('Sign in Clicked');
  store.user = response.user
  console.log(response.user);
  $('.auth').show()
  $('.unauth').hide()
  $(".modal-backdrop").remove()
  $('form').trigger('reset')
  $('.welcomeMessage h1').text("Hey " + store.user.email + "!")
}

const onSignOutUser = function () {
  console.log('Logoff Clicked');
  store.user = null
  $('.unauth').show()
  $('.auth').hide()
}

const onChangePass = function (response) {
  $('form').trigger('reset')
  console.log('Alright, thats cool');
}

const onFailure = function () {
  console.log('Something critical exploded.');
}

const startGame = function (gameResponse) {
  console.log('Calling Game API...');
  store.game = gameResponse.game
  console.log(gameResponse);
  console.log(gameResponse.game._id);

  $('.actualPlayButton h1').text("Replay")
}

const onViewGames = function (gameResponse) {
  console.log(gameResponse.games.length)
  $('.welcomeMessage p').html(store.user.email + " has played " + gameResponse.games.length + " games!")
}

// Game API UI

module.exports = {onRegisterUser, onSignInUser, onSignOutUser, onFailure, startGame, onChangePass, onViewGames}
