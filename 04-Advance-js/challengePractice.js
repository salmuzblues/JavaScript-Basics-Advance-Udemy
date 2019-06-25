// CODING CHALLENGE

/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).
*/
var chooseQuestion = Math.floor(Math.random() * 3); 
 var question = function (){

    if(chooseQuestion === 0 ){
        question1();    
    }else if(chooseQuestion === 1){
         question2(); 
    }else if(chooseQuestion === 2){
        question3(); 
    }    
}; 

  question(); 
  var result = prompt("which is the correct answer? "); 
   
  if (chooseQuestion === 0){
    if (result === '0' ){
        console.log("Incorrect Answer"); 
    }else if (result === '1') {
        console.log("Correct Answer")
    }else {
        console.log("Wrong Answer"); 
    }   
 }else if(chooseQuestion === 1){
    if (result === '0' ){
        console.log("Incorrect Answer"); 
    }else if (result === '1') {
        console.log("Correct Answer")
    }else if (result === '0'){
        console.log("Incorrect Answer"); 
    }else {
        console.log("Wrong Answer"); 
    }  
 }else if (chooseQuestion === 2){
    if (result === '1' ){
        console.log("Incorrect Answer"); 
    }else if (result === '0') {
        console.log("Correct Answer")
    }else {
        console.log("Wrong Answer"); 
    } 
 }

 function question1(number){
    console.log("Is the JavaScript Languaje the coolest?");
    console.log("0. No ");
    console.log("1. Yes "); 
 }

 function question2 (){
    console.log("What is your  name ? ");
    console.log("0. Jhon");
    console.log("1. Alex");
    console.log("2. Ricardo");
 }
 function question3 (){
    console.log("Do you love coding?");
    console.log("0. Yes of course ");
    console.log("1. No");
 }
 
