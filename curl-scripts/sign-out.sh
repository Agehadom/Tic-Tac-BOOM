curl --include --request DELETE "https://tic-tac-toe-api-development.herokuapp.com/sign-out" \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}"
echo
