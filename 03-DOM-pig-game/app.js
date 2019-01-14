/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// create variables 
var scores = [0, 0];
var roundScore = 0;
var acitvePlayer = 0;

// manipulanto el DOM .. 
// this change the number current
// document.querySelector('#current-' + acitvePlayer).textContent = dice;

// // this change the html context 
// //document.querySelector('#current-' + acitvePlayer).innerHTML = '<em>' + dice + '</em>';
// // jus for reading or retreiving some information from html. 

// var x = document.querySelector('#score-1').textContent;
// console.log(x);

// how to change css styles by javaScript 
document.querySelector('.dice').style.display = 'none';
// this is another way and it is faster than .querySelector, and 
// this is because we work by ID  NOT a class 
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
// first we need to select the tag of html that we need to work. 
document.querySelector('.btn-roll').addEventListener('click', () => {
    // 1.Random Number.
    var dice = Math.floor(Math.random() * 6) + 1;
    // 2. Display the result 
    var diceDom = document.querySelector('.dice'); // this is for select the class CSS;
    // block in css: Displays an element as a block element (like <p>).
    // It starts on a new line, and takes up the whole width 
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    // 3.- Update the round score if the rolled number was not a 1. 
    if (dice !== 1) {
        // add score points
        roundScore += dice;
        document.querySelector('#current-' + acitvePlayer).textContent = roundScore;

    } else {
        // next player// changing the player 
        acitvePlayer === 0 ? acitvePlayer = 1 : acitvePlayer = 0;
        roundScore = 0;
        // vamos a settear 
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        // remove the class .active 
        document.querySelector('.player-0-panel').classList.toggle('active');
        // adding for another tag the class .active 
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';

        /** JUST FOR REFERENCES  */
        // remove the class .active 
        // document.querySelector('.player-0-panel').classList.remove('active'); 
        // adding for another tag the class .active 
        //document.querySelector('.player-1-panel').classList.add('active'); 
    }

});