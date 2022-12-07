'use strict';

let score = 20;
let secretNum = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;
console.log(secretNum);

// function for display specific message --> this work only - class of -->  .message
const displayMessage = function (returnedText) {
  document.querySelector('.message').textContent = returnedText;
};

// function for display specific messages --> works only classes
const displayContent = function (classOftext, contentOftext) {
  document.querySelector(`.${classOftext}`).textContent = contentOftext;
};

// main brain
document.querySelector('.check').addEventListener('click', function () {
  const guessNum = Number(document.querySelector('.guess').value);

  // when input is empty
  if (!guessNum) {
    displayMessage('⛔️ No number!');

    // when guess is correct
  } else if (secretNum === guessNum) {
    document.querySelector('.number').textContent = secretNum;
    displayMessage('🎉 Correct Number!');

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.background = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  // guess is wrong
  else if (guessNum !== secretNum) {
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
      displayMessage(guessNum < secretNum ? '📉 Too low!' : '📈 Too high!');

      // document.querySelector('.guess').value = ''; // for clear ;
      document.querySelector('.guess').focus(); // for focus cusor
    } else {
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// again  - function  -- > reset settings
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20 + 1);
  // console.log(secretNum);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score; // for reset score

  // document.querySelector('.number').textContent = '?';
  displayContent('number', '?');
  document.querySelector('.number').style.width = '15rem';

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = ''; //for clear
  document.querySelector('.guess').focus();
});
