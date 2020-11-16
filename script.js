'use strict';


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener
('click', function() {
const guess = Number(document.querySelector('.guess').value);
console.log(guess, typeof guess);

    if(!guess) {
        // When there is no input
     document.querySelector('.message').textContent  = '⛔ No number!';
        // When a player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 
        '😎 You got it';
        document.querySelector('.number').textContent = secretNumber;
        // Changes background color
        document.querySelector('body').style.backgroundColor = '#60b347';
        //  Changes the number width
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = 
        '🥵 Too High!';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 
            '🤡 You lose!';
            document.querySelector('.score').textContent = 0;
      }
        // When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 
            '👴🏿 Not high enough' ;
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 
                '🤡 You lose!';
                document.querySelector('.score').textContent = 0;
          }

        }

});

document.querySelector('.again').addEventListener('click', function() {
score = 20;

secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.message').textContent = 'Start Guessing...';
document.querySelector('.score').textContent = score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value = '';

document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
});

