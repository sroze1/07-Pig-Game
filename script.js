'use strict';
// Starter file comment to initialise repository changes -- Test1

// Starter
let playerScore = 0;
let roll = Math.trunc(Math.random() * 6) + 1;


function rolled(number) {
  return "dice-"+number+".png";
}

let score = (document.querySelectorAll('.score'));
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

if (score != maxPoints) {
    document.querySelector('.btn--roll').addEventListener('click', function () { 

        // changes the images of the dice number rolled:
        let roll = Math.trunc(Math.random() * 6) + 1;
        dice.src = rolled(roll);
        dice.style.display = "block";
       

});

}






// switch (expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//   // code block
// } 