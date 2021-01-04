const config = require('./config.js')
const store = require('./store.js')

// User API
const signup = function (formData) {

  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST',
    data: formData
  })
}

const signin = function (formData) {

  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    method: 'POST',
    data: formData
  })
}

const signout = function () {

  $('.auth').hide()
  $('.unauth').show()

  return $.ajax({
    url: config.apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const changepass = function (formData) {

  return $.ajax({
    url: config.apiUrl + '/change-password/',
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

// Game API

const viewgames = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const startGame = function () {

  return $.ajax({
    url: config.apiUrl + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const updateGame = function () {

  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: store.game.cells,
          value: store.game.__v
        },
        over: store.game.over
      }
    },
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signup,
  signin,
  signout,
  changepass,
  viewgames,
  startGame,
  updateGame
};
