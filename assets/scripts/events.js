const api = require('./api')
const ui = require('./ui')
const getFormFields = require('./../../lib/get-form-fields.js')


// User Events
const onRegisterUser = function (event) {
  event.preventDefault();
  console.log('Register submit button clicked');

  const form = event.target
  const formData = getFormFields(form)

  console.log(formData);

  api.signup(formData)
  .then(ui.onSignUpUser)
  .catch(ui.onFailure)
}

const onSignInUser = function (event) {
  event.preventDefault();
  console.log('Login submit button clicked');

  const form = event.target
  const formData = getFormFields(form)

  api.signin(formData)
  .then(ui.onSignInUser)
  .catch(ui.onFailure)
}

const onSignOutUser = function (event) {
  event.preventDefault()

  api.signout()
  .then(ui.onLogOffUser)
  .catch(ui.onFailure)
}

const onChangePass = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.changepass(data)
  .then(ui.onChangePass)
  .catch(ui.onFailure)
}

const onViewGames = function (event) {
  event.preventDefault()

  console.log('Made it to events');

  api.viewgames()
  .then(ui.onViewGames)
  .catch(ui.onFailure)
}

// Game API Events


module.exports = {
  onRegisterUser,
  onSignInUser,
  onSignOutUser,
  onChangePass,
  onViewGames
};
