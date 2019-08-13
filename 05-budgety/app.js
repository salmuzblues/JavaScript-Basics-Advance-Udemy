// we have to create modules  wih IIFE and closure
/* First module Budget Controller */
// this module handles our buget data 
// this variable is going to be immediately invoked function expression that will 
// return an object. IIEF  is simply an anonymous function wrapped in parenthesis 
// with IIEF  you can make a private variables and functions 
var budgetController = (function(){
    /* var x = 23; 
    var add = function(a){
        return x + a; 
    }

    return {
        publicTest: function(b){
            return add(b); 
        }
    } */
})(); // () this invokes the function  

/*  Second Module UI Controller */

var UIController = (function(){

    // here space all variables or functions are private
    var DOMstrings = {
        inputType: '.add__type',
        inputDesc: '.add__description', 
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    } 
    // retriving data all values from the button 
    // that is public, so we have to use a return object 
    return {
        getInput: function(){
            return {
                type: document.querySelector(DOMstrings.inputType).value, // it will be either inc or exp 
                description: document.querySelector(DOMstrings.inputDesc).value, 
                value: document.querySelector(DOMstrings.inputValue).value
            }           
        },
        getDOMstrings: function(){
            return DOMstrings; 
        }
    } 

})(); 

/* Global  APP Conrtoller */

var controller = (function(budgetCtrl, UICtrl){
   
    function validation(input){
        var val= false; 
        if(input.description === "" || input.description === undefined){
            return val; 
        } 
        if(input.value === "" || input.value === undefined){
            return val;  
        }
    
        return true; 
    }


    var DOM = UICtrl.getDOMstrings(); 
    // created a function 
    var ctrlAddItem = function(){
         // 1. get the field input data 
            var input = UICtrl.getInput();
            var checkInput = validation(input);  
            if(checkInput){
                console.log(input); 
            }else{
                alert("Please missing an input"); 
            }
        // 2. Add  the item  to the budget  controller 

        // 3. Add the item to the UI 

        // 4. calculate the budget 

        // 5. display the budget on the UI
    }

    // Listener
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);  

    // Keypress event 
    // this is an eventListener but global web 
    document.addEventListener('keypress', function(event){
        // event.which is used for older webs 
        if (event.keyCode === 13 || event.which === 13){
            console.log("Enter was pressed"); 
            ctrlAddItem(); 
        }
    })

    /* var z = budgetCtrl.publicTest(5); 

    // Because the variable z is private, we need to return by making pulic.
    return {
        anotherPublic: function(){
            console.log(z); 
        }
    } */

})(budgetController, UIController); 



