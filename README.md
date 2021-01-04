# Tic-Tac-Boom: A game about a dog.

Tic-Tac-Boom is an emotional experience for those who pursuit the truth of one square grid.

## Planning Story

Planning for Tic-Tac-Boom started with thinking about how to make the game more interesting from the beginning.

The old planning story follows...

*The game board should be split into 9 different divisions that each have the ability to display an "x", "o" or "blank". This way, each of the divisions will be able to be styled easily. Each division will need to reference an array of options to play the game, listed prior. On click, it will display your chosen piece, "x" or "o". I will also need logic to check who's turn it is and what piece they own; one should not be able to win the game with the opponent's pieces. Interacting with the board will be with simple clicks and only clicks.

First step, is to outline the application with HTML, developing the divisions I need to house all of the elements I may need. In our body, I plan to have 3 large divisions, one for the gameboard, one for user data and one for the play button. After that, developing the X and O pieces to be used. I'm unsure if I will use images that draw on each cell or if I will use styled text. In our right user data box, I will be implementing a simple login form with a displayed username and a play button that will only draw in the bottom right box when logged in.*

Debugging CSS was written for to help me isolate the individual element of my application even though I had access to a wireframe. The wireframe would need to be represented regardless and utilizing CSS to add annoying, debugging colors to elements made breaking down the project much simpler. The idea was to integrate the API AFTER finishing the game or rather, the minimum user experience that I could manage since, in theory, I would only need to write an ajax call and a function call in my code to have the API work with my application... I was right for the most part.

After working on the application for a week, my ambitions for the game remain the same but and working through it.

### User Stories

As a new user, I want quick account creation so that I can quickly play games. As a returning user, I want the application to be able to remember who I am so that I don't have to log in every time. As a frequent user, I want to be able to play familiar users so that I can have a sense of community. As a power user, I want to be able to play against strong players so that I can be competitive.

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript

### Unsolved Problems

- Still need to fully implement the game API. The ability to update your current game as it is being played is currently not supported.
- Would like to eventually fully style the application and be able to reference and access a user's history of played games.

## Images
### Version 0.4
![Version 0.4](https://i.imgur.com/eRN35pZ.png)

---

#### Wireframe:
![wireframe](https://raw.git.generalassemb.ly/domorinoro/project-planning-wireframes-study/response/project_1_wireframes/tttWireframe.jpg?token=AAAH6GQA3L736KRIQRHTCG274AHZO)
