'use strict';
// Starter file comment to initialise repository changes -- Test1

// Starter
// let playerScore = 0;
// let playerScore2= 0;
// let roll = Math.trunc(Math.random() * 6) + 1;

// function rolled(number) {
//   return 'dice-' + number + '.png';
// }

// let player1Current = document.getElementById('current--0');
// let player1Score = document.getElementById('score--0');

// let bothScore = document.querySelectorAll('.score');
// const bothCurrentScore = document.querySelectorAll('.current-score');
// const dice = document.querySelector('.dice');
// const maxPoints = 100;

// document.querySelector('.btn--new').addEventListener('click', function () {
//   // Reset the score to -0
//   for (let i = 0; i < score.length; i++) {
//     bothScore[i].textContent = 0;
//     currentScore[i].textContent = 0;
//     console.log('This button is being pressed');
//   }

//   dice.style.display = 'none';
// });

// if (score != maxPoints) {
//   document.querySelector('.btn--roll').addEventListener('click', function () {
//     // changes the images of the dice number rolled:
//     let roll = Math.trunc(Math.random() * 6) + 1;
//     dice.src = rolled(roll);
//     dice.style.display = 'block';

//     if (roll != 1) {
//       playerScore = playerScore + roll;
//       player1Current.textContent = playerScore;

//     } else {
//       playerScore = 0;
//       player1Current.textContent = playerScore;
//     }
//   });

//   document.querySelector('.btn--hold').addEventListener('click', function() {
//     playerScore2 = playerScore2 + playerScore;
//     player1Score.textContent = playerScore2;
//     playerScore = 0;
//   })
//

// NEW ATTEMPT
// All variables
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');

const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');

let scores = [0, 0];
let activePlayer = 0;
let currentScore = 0;
let playing = true;
// VARIABLE LIST FINISH
//////////////////////////////////////////////////////////

// Starting values and functions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.style.display = 'none';

//Switch player function
function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Reset scores function
function newGame() {
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  diceEl.style.display = 'none';

  scores = [0, 0];
  activePlayer = 0;
  currentScore = 0;
}
// FUNCTIONS FINISH
//////////////////////////////////////////////////////////

// All event listeners:::::
// When NEW Game is clicked:
btnNew.addEventListener('click', newGame);

// When Dice is rolled
btnRoll.addEventListener('click', function () {
  console.log(playing);
  if (playing) {
    diceEl.style.display = 'block';
    let roll = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${roll}.png`;
    if (roll != 1) {
      currentScore += roll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else if (roll === 1) {
      //switch player
      // If the active player is 0, it should be one, else it should be 0
      switchPlayer();
    }
  }
});

// When player clicks the 'hold' button
btnHold.addEventListener('click', function () {
  console.log(playing + 'tattay');
  if (playing) {
    // 1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceEl.style.display = 'none';
    } else {
      switchPlayer();
    }
  }
});

// scores[1] = scores[1] + currentScore
// This way the information is stored in an array, and the activePlayer score is updated dynamically
// Without having to use if statements
// 2 Check if player's score is >=100
// Finish the game

// Switch to next player
