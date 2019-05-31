/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
// create variables 
// dentro de este array scores [(score-0), (score-1)];
// var scores = [0, 0];
// var roundScore = 0;
// var activePlayer = 0;

// manipulanto el DOM .. 
// this change the number current
// document.querySelector('#current-' r activePlayer).textContent = dice;

// // this change the html context 
// //document.querySelector('#current-' r activePlayer).innerHTML = '<em>' + dice + '</em>';
// // jus for reading or retreiving some information from html. 

// var x = document.querySelector('#score-1').textContent;
// console.log(x);

// Inicializar variables 
var scores = [0, 0];
var roundScore = 0;
var activePlayer = 0;
var rollTwice = 0;
var inputScore = 0;
var numberScore = 0; 
// how to change css styles by javaScript 
document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';



// this is another way and it is faster than .querySelector, and 
// this is because we work by ID  NOT a class 
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


/**   METHODO ROLL DICE  WITH BTN-ROLL */

// first we need to select the tag of html that we need to work. 
document.querySelector('.btn-roll').addEventListener('click', () => {
    // 1.Random Number.
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    // 2. Display the result 
    //var diceDom = document.querySelector('.dice'); // this is for select the class CSS;
    document.getElementById('dice-1').style.display = 'block'; 
    document.getElementById('dice-2').style.display = 'block'; 
    // block in css: Displays an element as a block element (like <p>).
    // It starts on a new line, and takes up the whole width 
    document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

     //3. Update the round score IF the rolled number was NOT a 1
     if (dice1 !== 1 && dice2 !== 1) {
        //Add score
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next player
        nextPlayer();
    }
   
    /* if (dice !== 1) {
        // add score points
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;

        if (dice === 6) {
            rollTwice += dice;
            if (rollTwice === 12) {
                console.log("rollTwicw: " + rollTwice);
                this.scores[this.activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = this.scores[activePlayer];
                rollTwice = 0;
                nextPlayerRestart();
            }
        } 
    } else {
        // next player// changing the player 
        nextPlayerRestart();
        rollTwice = 0;
        // JUST FOR REFERENCES  
        // remove the class .active 
        // document.querySelector('.player-0-panel').classList.remove('active'); 
        // adding for another tag the class .active 
        //document.querySelector('.player-1-panel').classList.add('active'); 
    } */
});

/* METODO  HOLD para guardar Records */
document.querySelector('.btn-hold').addEventListener('click', () => {
    // add a current score  to global score 
    // takes the score 0 first 
    // adding values to score[0]; 
    scores[activePlayer] += roundScore;
    //update  the UI 
    // next to show the results 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    var input = document.querySelector('.final-score').value; 
    var winningScore; 
    // ATENTION,  Undefined, 0, null or "" are COERCED to false.
    if(input) {
        winningScore = input; 
    } else {
       winningScore = 20; 
    }
        // check if the player won the game 
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'GANADOR!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
            // classList brings the access  from the class 
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
               
        } else {
            nextPlayerRestart();
        }
      
});
// this METHOD IS FOR THE BTN-NEW 
document.querySelector('.btn-new').addEventListener('click', () => {
  
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
  
    
});


function nextPlayerRestart() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    // vamos a settear 
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // remove the class .active 
    document.querySelector('.player-0-panel').classList.toggle('active');
    // adding for another tag the class .active 
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    
}


