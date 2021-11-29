'use strict';

let score = 20;
let highscore = 0;
let rnd = Math.trunc(Math.random() * 20 + 1);

let btnCheck = document.querySelector('.check');
let message = document.querySelector('.message');
let scoreHTML = document.querySelector('.score');
let highHTML = document.querySelector('.highscore');
let again = document.querySelector('.again');
let number = document.querySelector('.number');
let bgColor = document.querySelector('body');

btnCheck.addEventListener('click', () => {
    const guess = Number(document.querySelector('.guess').value);
    
    console.log(rnd);

    if(!guess){
        message.textContent = 'No guess!';
    } else if(guess > rnd || guess < rnd) {
        if(score){
            score--;
            message.textContent = guess > rnd ? '📈Горячо' : '📉Холодно';
            
        } else {
            message.textContent = '💥Ты проиграл';
            bgColor.style.backgroundColor = 'red';
        }
        
    } else if(guess  === rnd){
        message.textContent = 'Ты выйграл';
        bgColor.style.backgroundColor = '#60b347';
        number.textContent = rnd;

        if(score > highscore){
            highscore = score;
            highHTML.textContent = highscore;
        }
    }
    scoreHTML.textContent = score;
});

again.addEventListener('click', () => {
    rnd = Math.trunc(Math.random() * 20 + 1);
    number.textContent = '?';
    scoreHTML.textContent = '20';
    score = 20;
    bgColor.style.backgroundColor = '#222';
});