'use strict';
// Starter file comment to initialise repository changes -- Test1

// Starter

const score = document.querySelectorAll('.score');
const currentScore = document.querySelectorAll('.current-score');
const dice = document.querySelector('.dice');
const maxPoints = 100;

document.querySelector('.btn--new').addEventListener('click', function () {
  // Reset the score to -0
  for (let i = 0; i < score.length; i++) {
    score[i].textContent = 0;
    currentScore[i].textContent = 0;
    console.log('This button is being pressed');
  }

dice.style.display = 'none';
});

if(score != maxPoints) { 
    // then perform the entire code
} else {
    // type the message for who the winner is.
 }

